# 🚀 Quick Start - Google Sheets Integration

## ⚡ 3-Step Setup

### 1️⃣ Update `.env.local`

```bash
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL="sheets-reader@pubg-tournament-sheet.iam.gserviceaccount.com"
SHEET_ID="YOUR_SHEET_ID_FROM_URL"
```

### 2️⃣ Share Your Sheet

Add email: `sheets-reader@pubg-tournament-sheet.iam.gserviceaccount.com`  
Permission: **Editor** or **Viewer**

### 3️⃣ Test It!

```bash
npm run dev
node test-sheets-connection.js
```

---

## 📋 Sheet Format

**Row 1:** `Slot | LogoLink | TeamName | Status | Date`  
**Row 2+:** Your data

**Status values:** `confirmed` | `pending` | `cancelled` | `waitlist`

---

## 🔗 Key Files

- **API:** `/src/app/api/sheets/slots/route.ts`
- **Component:** `/src/components/TournamentSlotsLive.tsx`
- **Lib:** `/src/lib/googleSheets.ts`
- **Page:** `/src/app/tournaments/pmwc_v2/page.tsx`

---

## 📚 Full Documentation

- `IMPLEMENTATION_COMPLETE.md` - Overview & checklist
- `GOOGLE_SHEETS_SETUP.md` - Detailed setup guide
- `test-sheets-connection.js` - Test script

---

## 🎯 Live Page

**URL:** `http://localhost:3000/tournaments/pmwc_v2`

**Features:**

- ✅ Auto-refresh every 30s
- ✅ Manual refresh button
- ✅ Live statistics
- ✅ Team logos & status badges

---

## 🐛 Quick Troubleshooting

**No data?**

- Check `SHEET_ID` in `.env.local`
- Verify sheet is shared with service account
- Confirm data starts at Row 2

**Auth error?**

- Check `GOOGLE_PRIVATE_KEY` format (keep `\n`)
- Restart dev server
- Verify service account email

**Test first:** `node test-sheets-connection.js`

---

**✨ That's it! You're ready to go live!** 🎮
