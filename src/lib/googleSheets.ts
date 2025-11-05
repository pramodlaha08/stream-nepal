/**
 * Google Sheets API Client
 *
 * This module handles authentication and data fetching from Google Sheets
 * using a service account for secure server-side operations.
 */

import { google } from "googleapis";

/**
 * Interface for tournament slot data from Google Sheets
 * Maps to columns: Slot | LogoLink | TeamName | Status | Date
 */
export interface SheetSlotData {
  slot: string;
  logoLink: string;
  teamName: string;
  status: "confirmed" | "pending" | "cancelled" | "waitlist";
  date: string;
}

/**
 * Creates an authenticated Google Sheets API client
 * Uses service account credentials from environment variables
 */
export async function getGoogleSheetsClient() {
  try {
    let credentials;

    // Check if using JSON format (GOOGLE_SERVICE_ACCOUNT_KEY)
    if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      try {
        credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
        // Fix escaped newlines in private key from JSON
        if (credentials.private_key) {
          credentials.private_key = credentials.private_key.replace(
            /\\n/g,
            "\n"
          );
        }
      } catch (parseError) {
        throw new Error("Failed to parse GOOGLE_SERVICE_ACCOUNT_KEY JSON");
      }
    }
    // Or individual environment variables
    else if (
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_CLIENT_EMAIL
    ) {
      const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");
      credentials = {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      };
    } else {
      throw new Error(
        "Missing required Google Sheets credentials. Either set GOOGLE_SERVICE_ACCOUNT_KEY or GOOGLE_PRIVATE_KEY + GOOGLE_CLIENT_EMAIL"
      );
    }

    // Create JWT auth client with service account credentials
    const auth = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets.readonly", // Read-only access
      ],
    });

    // Create and return the Sheets API client
    const sheets = google.sheets({ version: "v4", auth });

    return sheets;
  } catch (error) {
    console.error("Error creating Google Sheets client:", error);
    throw new Error("Failed to authenticate with Google Sheets API");
  }
}

/**
 * Fetches tournament slot data from Google Sheets
 *
 * @param sheetId - The Google Sheet ID (from the sheet URL)
 * @param range - The range to read (e.g., "Sheet1!A2:E")
 * @returns Array of slot data objects
 */
export async function getTournamentSlots(
  sheetId?: string,
  range?: string
): Promise<SheetSlotData[]> {
  try {
    // Use environment variables as defaults, but allow overrides
    const targetSheetId = sheetId || process.env.SHEET_ID;
    const targetRange = range || process.env.SHEET_RANGE || "Sheet1!A2:E";

    if (!targetSheetId) {
      throw new Error(
        "Sheet ID is required. Set SHEET_ID in environment variables or pass as parameter."
      );
    }

    // Get authenticated client
    const sheets = await getGoogleSheetsClient();

    // Fetch data from the sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: targetSheetId,
      range: targetRange,
    });

    const rows = response.data.values;

    // Return empty array if no data
    if (!rows || rows.length === 0) {
      console.log("No data found in the specified range");
      return [];
    }

    // Transform rows into structured data
    const slots: SheetSlotData[] = rows
      .map((row) => {
        // Handle missing columns gracefully
        const [
          slot = "",
          logoLink = "",
          teamName = "",
          status = "pending",
          date = "",
        ] = row;

        const slotStr = slot.toString().trim();
        const logoLinkStr = logoLink.toString().trim();

        return {
          slot: slotStr,
          // Only include logoLink if it's a valid URL (http:// or https://)
          logoLink: logoLinkStr.match(/^https?:\/\//) ? logoLinkStr : "",
          teamName: teamName.toString().trim(),
          status: validateStatus(status.toString().trim()),
          date: date.toString().trim(),
        };
      })
      // Filter out header rows (where slot column contains non-numeric values like "Slot")
      .filter((row) => {
        // Check if slot is a number or starts with a number
        return (
          /^\d/.test(row.slot) && row.teamName.toLowerCase() !== "teamname"
        );
      });

    return slots;
  } catch (error) {
    console.error("Error fetching tournament slots from Google Sheets:", error);
    throw new Error("Failed to fetch tournament data from Google Sheets");
  }
}

/**
 * Validates and normalizes status values
 * Ensures status matches expected types
 */
function validateStatus(status: string): SheetSlotData["status"] {
  const normalized = status.toLowerCase();

  switch (normalized) {
    case "confirmed":
      return "confirmed";
    case "pending":
      return "pending";
    case "cancelled":
      return "cancelled";
    case "waitlist":
      return "waitlist";
    default:
      console.warn(`Unknown status: ${status}. Defaulting to 'pending'`);
      return "pending";
  }
}

/**
 * Gets the count of confirmed teams
 * Useful for displaying registration stats
 */
export async function getConfirmedTeamsCount(
  sheetId?: string,
  range?: string
): Promise<number> {
  try {
    const slots = await getTournamentSlots(sheetId, range);
    return slots.filter((slot) => slot.status === "confirmed").length;
  } catch (error) {
    console.error("Error getting confirmed teams count:", error);
    return 0;
  }
}

/**
 * Utility function to test the Google Sheets connection
 * Returns true if connection is successful
 */
export async function testGoogleSheetsConnection(): Promise<boolean> {
  try {
    const sheets = await getGoogleSheetsClient();
    // Simple test: try to get spreadsheet metadata
    const response = await sheets.spreadsheets.get({
      spreadsheetId: process.env.SHEET_ID!,
    });

    console.log(
      "Successfully connected to Google Sheets:",
      response.data.properties?.title
    );
    return true;
  } catch (error) {
    console.error("Failed to connect to Google Sheets:", error);
    return false;
  }
}
