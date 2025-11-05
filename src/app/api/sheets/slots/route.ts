/**
 * API Route: Get Tournament Slots from Google Sheets
 *
 * Endpoint: GET /api/sheets/slots
 *
 * This API route fetches tournament registration data from Google Sheets
 * and returns it as JSON. It uses service account authentication to
 * securely access the sheet without exposing credentials to the client.
 *
 * Query Parameters:
 * - sheetId (optional): Override the default sheet ID
 * - range (optional): Override the default range (e.g., "Sheet1!A2:E")
 *
 * Response Format:
 * {
 *   success: true,
 *   data: [...slots],
 *   count: {
 *     total: number,
 *     confirmed: number,
 *     pending: number,
 *     cancelled: number,
 *     waitlist: number
 *   },
 *   lastUpdated: timestamp
 * }
 */

import { NextRequest, NextResponse } from "next/server";
import { getTournamentSlots, SheetSlotData } from "@/lib/googleSheets";

// Enable caching but revalidate every 30 seconds
export const revalidate = 30;

export async function GET(request: NextRequest) {
  try {
    // Get query parameters for optional overrides
    const searchParams = request.nextUrl.searchParams;
    const sheetId = searchParams.get("sheetId") || undefined;
    const range = searchParams.get("range") || undefined;

    // Fetch data from Google Sheets
    const slots = await getTournamentSlots(sheetId, range);

    // Calculate statistics
    const stats = {
      total: slots.length,
      confirmed: slots.filter((s) => s.status === "confirmed").length,
      pending: slots.filter((s) => s.status === "pending").length,
      cancelled: slots.filter((s) => s.status === "cancelled").length,
      waitlist: slots.filter((s) => s.status === "waitlist").length,
    };

    // Return success response with data
    return NextResponse.json(
      {
        success: true,
        data: slots,
        count: stats,
        lastUpdated: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
        },
      }
    );
  } catch (error) {
    console.error("API Error - Failed to fetch slots:", error);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch tournament slots",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      {
        status: 500,
      }
    );
  }
}

// Optional: Add POST method for testing connection
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Test connection with provided credentials
    const { sheetId, range } = body;

    const slots = await getTournamentSlots(sheetId, range);

    return NextResponse.json({
      success: true,
      message: "Connection successful",
      sampleData: slots.slice(0, 3), // Return first 3 rows as sample
      totalRows: slots.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Connection test failed",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}
