/**
 * Debug script for Google Sheets authentication
 */
require("dotenv").config({ path: ".env" });
const { google } = require("googleapis");

async function debugSheets() {
  console.log("🔍 Google Sheets Configuration Debug\n");

  // Parse credentials
  let credentials;
  try {
    credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    if (credentials.private_key) {
      credentials.private_key = credentials.private_key.replace(/\\n/g, "\n");
    }
    console.log("✅ Credentials parsed successfully");
    console.log(`   Email: ${credentials.client_email}`);
    console.log(`   Project: ${credentials.project_id}\n`);
  } catch (error) {
    console.error("❌ Failed to parse credentials:", error.message);
    process.exit(1);
  }

  // Check environment variables
  console.log("📋 Environment Variables:");
  console.log(`   SHEET_ID: ${process.env.SHEET_ID || "❌ NOT SET"}`);
  console.log(`   SHEET_RANGE: ${process.env.SHEET_RANGE || "❌ NOT SET"}\n`);

  // Create auth client
  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  // Test 1: Check if sheet exists
  console.log("🧪 Test 1: Checking if sheet exists...");
  try {
    const metadata = await sheets.spreadsheets.get({
      spreadsheetId: process.env.SHEET_ID,
    });
    console.log(`✅ Sheet found: "${metadata.data.properties.title}"`);
    console.log(`   Available sheets:`);
    metadata.data.sheets.forEach((sheet) => {
      console.log(`   - ${sheet.properties.title}`);
    });
    console.log();
  } catch (error) {
    console.error("❌ Sheet not accessible!");
    console.error(`   Error: ${error.message}`);
    console.error("\n⚠️  SOLUTION: Share your Google Sheet with:");
    console.error(`   ${credentials.client_email}\n`);
    console.error("   Steps:");
    console.error(
      "   1. Open: https://docs.google.com/spreadsheets/d/" +
        process.env.SHEET_ID
    );
    console.error('   2. Click "Share" (top right)');
    console.error("   3. Add the email above");
    console.error('   4. Set permission to "Viewer"');
    console.error('   5. Click "Send"\n');
    process.exit(1);
  }

  // Test 2: Try to read data
  console.log("🧪 Test 2: Reading data from sheet...");
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: process.env.SHEET_RANGE || "Sheet1!A1:E",
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      console.log("⚠️  Sheet is empty or range has no data");
    } else {
      console.log(`✅ Successfully read ${rows.length} rows`);
      console.log(`   Headers: ${rows[0].join(" | ")}`);
      console.log(`   Data rows: ${rows.length - 1}\n`);

      // Show first few rows
      console.log("📊 Sample data:");
      rows.slice(0, 5).forEach((row, index) => {
        console.log(`   Row ${index + 1}: ${row.join(" | ")}`);
      });
    }
    console.log("\n✅ All tests passed! Your configuration is correct.\n");
  } catch (error) {
    console.error("❌ Failed to read data");
    console.error(`   Error: ${error.message}`);
    if (error.code === 404) {
      console.error("\n⚠️  The sheet range might be incorrect.");
      console.error(
        `   Current range: ${process.env.SHEET_RANGE || "Sheet1!A1:E"}`
      );
      console.error("   Try checking the sheet tab name.\n");
    }
    process.exit(1);
  }
}

debugSheets().catch(console.error);
