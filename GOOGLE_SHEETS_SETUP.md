# Google Sheets Integration - Complete Setup Guide

## 🎯 Overview

This integration fetches live tournament registration data from Google Sheets using the Google Sheets API. The data is displayed in real-time on your tournament pages.

---

## ✅ Prerequisites (Already Completed)

- ✅ Google Cloud project created
- ✅ Google Sheets API enabled
- ✅ Service account created: `sheets-reader@pubg-tournament-sheet.iam.gserviceaccount.com`
- ✅ JSON key downloaded
- ✅ `googleapis` package installed

---

## 📋 Google Sheet Format

Your Google Sheet must have the following columns in **Row 1 (Header)**:

| Slot | LogoLink | TeamName | Status    | Date       |
| ---- | -------- | -------- | --------- | ---------- |
| 1    | https:// | Team A   | confirmed | 2025-11-01 |
| 2    | https:// | Team B   | pending   | 2025-11-02 |
| 3    | https:// | Team C   | confirmed | 2025-11-03 |

### Column Descriptions:

- **Slot**: Team slot number (1, 2, 3, etc.)
- **LogoLink**: Direct URL to team logo image (optional)
- **TeamName**: Name of the team
- **Status**: Must be one of:
  - `confirmed` - Team payment confirmed
  - `pending` - Awaiting payment
  - `cancelled` - Registration cancelled
  - `waitlist` - On waiting list
- **Date**: Registration date (any format)

---

## 🔑 Environment Variables Setup

### Step 1: Get Your Sheet ID

1. Open your Google Sheet
2. Look at the URL: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`
3. Copy the `YOUR_SHEET_ID` part

### Step 2: Format Your Private Key

Your private key from the JSON file needs special formatting:

**Original format in JSON:**

```json
{
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBg...\n-----END PRIVATE KEY-----\n"
}
```

**How to add to `.env.local`:**

```bash
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBg...\n-----END PRIVATE KEY-----\n"
```

⚠️ **Important**: Keep the `\n` characters - they represent newlines!

### Step 3: Update `.env.local`

Create or update `/home/nextByte/Programming/stream-nepal/.env.local`:

```bash
# Google Sheets API Configuration
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_ACTUAL_KEY_HERE\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL="sheets-reader@pubg-tournament-sheet.iam.gserviceaccount.com"
GOOGLE_PROJECT_ID="pubg-tournament-sheet"

# Your Google Sheet ID
SHEET_ID="1ABC...XYZ"

# Sheet range (adjust if needed)
SHEET_RANGE="Sheet1!A2:E"

# Base URL
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### Step 4: Give Service Account Access to Your Sheet

1. Open your Google Sheet
2. Click **Share** button (top right)
3. Add email: `sheets-reader@pubg-tournament-sheet.iam.gserviceaccount.com`
4. Set permission to **Editor** (or at minimum **Viewer**)
5. Uncheck "Notify people"
6. Click **Share**

---

## 🚀 Testing the Integration

### Method 1: Test API Endpoint Directly

```bash
# Start your development server
npm run dev

# Test the API endpoint
curl http://localhost:3000/api/sheets/slots
```

Expected response:

```json
{
  "success": true,
  "data": [
    {
      "slot": "1",
      "logoLink": "https://...",
      "teamName": "Team Alpha",
      "status": "confirmed",
      "date": "2025-11-01"
    }
  ],
  "count": {
    "total": 5,
    "confirmed": 3,
    "pending": 2,
    "cancelled": 0,
    "waitlist": 0
  },
  "lastUpdated": "2025-11-05T10:30:00.000Z"
}
```

### Method 2: Test Connection via POST

Create a test file `test-sheets.js`:

```javascript
async function testConnection() {
  const response = await fetch("http://localhost:3000/api/sheets/slots", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sheetId: "YOUR_SHEET_ID",
      range: "Sheet1!A2:E",
    }),
  });

  const result = await response.json();
  console.log(result);
}

testConnection();
```

Run it:

```bash
node test-sheets.js
```

### Method 3: Visit Tournament Page

Navigate to: `http://localhost:3000/tournaments/pmwc_v2`

You should see:

- ✅ Live registration data
- ✅ Team slots with logos
- ✅ Status badges (confirmed/pending/etc.)
- ✅ Auto-refresh every 30 seconds
- ✅ Manual refresh button

---

## 🎨 Features

### Auto-Refresh

- Data automatically refreshes every 30 seconds
- Manual refresh button available
- Shows "last updated" timestamp

### Status Indicators

- **Green (Confirmed)**: Payment verified
- **Yellow (Pending)**: Awaiting confirmation
- **Red (Cancelled)**: Registration cancelled
- **Blue (Waitlist)**: On waiting list

### Statistics Dashboard

- Total registered teams
- Confirmed teams count
- Available slots remaining
- Pending registrations

### Error Handling

- Graceful fallbacks if API fails
- User-friendly error messages
- Automatic retry on network errors

---

## 🔧 Customization

### Change Sheet Range

Update in `.env.local`:

```bash
SHEET_RANGE="MySheet!A2:E100"  # Read up to row 100
```

### Add More Columns

1. Update interface in `/src/lib/googleSheets.ts`:

```typescript
export interface SheetSlotData {
  slot: string;
  logoLink: string;
  teamName: string;
  status: "confirmed" | "pending" | "cancelled" | "waitlist";
  date: string;
  // Add your new fields
  contactEmail?: string;
  phoneNumber?: string;
}
```

2. Update range:

```bash
SHEET_RANGE="Sheet1!A2:G"  # Now reads columns A-G
```

3. Update component to display new fields

### Change Refresh Interval

In `/src/components/TournamentSlotsLive.tsx`:

```typescript
// Change 30000 (30 seconds) to your preferred interval
const interval = setInterval(() => {
  fetchSlots();
}, 60000); // Now 60 seconds
```

---

## 🐛 Troubleshooting

### Error: "Missing required Google Sheets credentials"

**Solution**: Check your `.env.local` file:

- Ensure `GOOGLE_PRIVATE_KEY` is properly formatted with `\n`
- Verify `GOOGLE_CLIENT_EMAIL` matches your service account
- Restart dev server after updating `.env.local`

### Error: "Request had insufficient authentication scopes"

**Solution**:

1. Check service account has access to the sheet
2. Verify the sheet is shared with the service account email
3. Ensure permission is "Editor" or "Viewer"

### Error: "Cannot find module '@/lib/googleSheets'"

**Solution**: Restart your development server:

```bash
npm run dev
```

### Data Not Showing / Empty Array

**Solution**:

1. Check `SHEET_ID` is correct
2. Verify `SHEET_RANGE` matches your data (default: "Sheet1!A2:E")
3. Ensure Row 1 has headers and data starts from Row 2
4. Check sheet name matches (case-sensitive)

### Images Not Loading

**Solution**:

- Ensure logo URLs are publicly accessible
- Use direct image links (ending in .png, .jpg, etc.)
- For Google Drive: Right-click image → "Get link" → Set to "Anyone with link can view"

### CORS Errors

**Solution**: This shouldn't happen with API routes, but if you see CORS errors:

- Ensure you're using the API route (`/api/sheets/slots`)
- Don't call Google Sheets API directly from client

---

## 📊 Production Deployment

### Vercel / Netlify

1. Add environment variables in your deployment platform:

   - Go to project settings
   - Add all variables from `.env.local`
   - ⚠️ **Important**: Use the actual values, not the placeholder text!

2. Update `NEXT_PUBLIC_BASE_URL`:

```bash
NEXT_PUBLIC_BASE_URL="https://your-domain.com"
```

3. Deploy!

### Important Security Notes

✅ **Do's:**

- Keep `.env.local` in `.gitignore`
- Never commit actual credentials to git
- Use environment variables for all secrets
- Restrict service account to "read-only" if possible

❌ **Don'ts:**

- Never expose `GOOGLE_PRIVATE_KEY` in client code
- Don't commit `.env.local` to version control
- Don't share your service account JSON file

---

## 🎯 API Endpoints

### GET `/api/sheets/slots`

Fetch all tournament slots.

**Query Parameters:**

- `sheetId` (optional): Override default sheet ID
- `range` (optional): Override default range

**Response:**

```json
{
  "success": true,
  "data": [...],
  "count": { ... },
  "lastUpdated": "ISO timestamp"
}
```

### POST `/api/sheets/slots`

Test connection with custom parameters.

**Body:**

```json
{
  "sheetId": "your-sheet-id",
  "range": "Sheet1!A2:E"
}
```

---

## 📝 Example Google Sheet Template

Create a new Google Sheet with this structure:

```
Row 1 (Headers):
Slot | LogoLink | TeamName | Status | Date

Row 2+:
1 | https://i.imgur.com/logo1.png | Team Alpha | confirmed | 2025-11-01
2 | https://i.imgur.com/logo2.png | Team Beta | pending | 2025-11-02
3 | https://i.imgur.com/logo3.png | Team Gamma | confirmed | 2025-11-03
4 | | Team Delta | waitlist | 2025-11-04
```

---

## ✨ Next Steps

1. ✅ **Update `.env.local`** with your actual values
2. ✅ **Share your Google Sheet** with the service account
3. ✅ **Test the API endpoint** to verify connection
4. ✅ **Visit tournament page** to see live data
5. ✅ **Deploy to production** with environment variables

---

## 🤝 Support

If you encounter issues:

1. Check all environment variables are set correctly
2. Verify service account has access to the sheet
3. Test API endpoint directly
4. Check browser console for errors
5. Review server logs for detailed error messages

---

## 📚 Additional Resources

- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Service Account Authentication](https://cloud.google.com/docs/authentication)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

**🎮 Happy Gaming! May your tournaments be epic!** 🏆
