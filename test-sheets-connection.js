/**
 * Test Script for Google Sheets Integration
 *
 * Run this script to test your Google Sheets connection
 * Usage: node test-sheets-connection.js
 */

// Load environment variables
require("dotenv").config({ path: ".env.local" });

async function testConnection() {
  console.log("🔍 Testing Google Sheets Connection...\n");

  // Check environment variables
  console.log("📋 Checking Environment Variables:");
  console.log(
    "✓ GOOGLE_CLIENT_EMAIL:",
    process.env.GOOGLE_CLIENT_EMAIL ? "✅ Set" : "❌ Missing"
  );
  console.log(
    "✓ GOOGLE_PROJECT_ID:",
    process.env.GOOGLE_PROJECT_ID ? "✅ Set" : "❌ Missing"
  );
  console.log(
    "✓ GOOGLE_PRIVATE_KEY:",
    process.env.GOOGLE_PRIVATE_KEY ? "✅ Set" : "❌ Missing"
  );
  console.log("✓ SHEET_ID:", process.env.SHEET_ID ? "✅ Set" : "❌ Missing");
  console.log(
    "✓ SHEET_RANGE:",
    process.env.SHEET_RANGE || "Sheet1!A2:E",
    "(using default)\n"
  );

  if (
    !process.env.GOOGLE_CLIENT_EMAIL ||
    !process.env.GOOGLE_PRIVATE_KEY ||
    !process.env.SHEET_ID
  ) {
    console.error("❌ Missing required environment variables!");
    console.log("\n📝 Please update .env.local with your actual values.");
    process.exit(1);
  }

  try {
    console.log("🚀 Starting development server check...");
    console.log("Make sure your dev server is running: npm run dev\n");

    // Test API endpoint
    const response = await fetch("http://localhost:3000/api/sheets/slots");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    if (result.success) {
      console.log("✅ SUCCESS! Connection established!\n");
      console.log("📊 Statistics:");
      console.log(`   Total Teams: ${result.count.total}`);
      console.log(`   Confirmed: ${result.count.confirmed}`);
      console.log(`   Pending: ${result.count.pending}`);
      console.log(`   Available Slots: ${32 - result.count.confirmed}\n`);

      if (result.data.length > 0) {
        console.log("📝 Sample Data (first 3 rows):");
        result.data.slice(0, 3).forEach((slot, i) => {
          console.log(
            `   ${i + 1}. Slot #${slot.slot}: ${slot.teamName} - ${slot.status}`
          );
        });
      } else {
        console.log(
          "ℹ️  No data found in sheet. Add some test data to see results."
        );
      }

      console.log("\n🎉 Integration is working perfectly!");
      console.log("🌐 Visit: http://localhost:3000/tournaments/pmwc_v2");
    } else {
      console.error("❌ API Error:", result.message);
      console.log("\n🔧 Troubleshooting:");
      console.log("   1. Check if service account has access to the sheet");
      console.log("   2. Verify SHEET_ID is correct");
      console.log("   3. Ensure SHEET_RANGE matches your data");
    }
  } catch (error) {
    console.error("❌ Connection Failed:", error.message);
    console.log("\n🔧 Troubleshooting:");
    console.log("   1. Make sure dev server is running: npm run dev");
    console.log("   2. Check all environment variables are set correctly");
    console.log("   3. Verify service account has access to your Google Sheet");
    console.log(
      "   4. Review GOOGLE_SHEETS_SETUP.md for detailed instructions"
    );
  }
}

// Run the test
testConnection();
