# CallToAction Component - Dynamic Tournament Status

## ✨ New Feature: Smart CallToAction Component

### 🎯 **Dynamic Content Based on Tournament Status**

The CallToAction component now automatically switches between **Registration Mode** and **Streaming Mode** based on the tournament dates.

### 🔧 **Technical Implementation**

**Helper Function:**

```typescript
// Helper function to check tournament status
export const isTournamentStreamed = (tournament: Tournament): boolean => {
  const currentDate = new Date();
  const tournamentEndDate = new Date(tournament.dates.tournament.end);

  // If current date is after tournament end date, show streaming content
  return currentDate > tournamentEndDate;
};
```

**Component Props:**

```typescript
interface CallToActionProps {
  isStreamed: boolean; // Determines which mode to show
  registrationUrl?: string; // Registration form/link
  youtubeVideoId?: string; // YouTube video ID for streaming
  tournamentName: string; // Tournament name for context
}
```

### 📅 **Registration Mode (Tournament Not Started/Ongoing)**

**Shows When:** Current date ≤ Tournament end date

**Features:**

- **Registration Header**: "Ready to Compete?" with calendar icon
- **Call-to-Action**: Prominent registration button with external link
- **Status Indicator**: "Registration Open" with animated pulse
- **Registration Deadline**: Reminder about deadlines
- **Clickable Button**: Opens registration URL in new tab

**Visual Design:**

- Cyan/purple/pink gradient theme
- Green status indicators
- Hover animations and scale effects
- External link icons

### 📺 **Streaming Mode (Tournament Completed)**

**Shows When:** Current date > Tournament end date

**Features:**

- **Stream Header**: "Tournament Replay" with play icon
- **YouTube Player**: Embedded iframe with tournament replay
- **Video Controls**: Custom overlay with "Tournament Concluded" status
- **Action Buttons**: "Watch on YouTube" and "View Highlights"
- **Professional Layout**: Large video player with responsive design

**Visual Design:**

- Red/purple/pink gradient theme (streaming focus)
- YouTube-style video player integration
- Animated status indicators
- Direct YouTube integration

### 🎮 **Integration Example**

```tsx
// In tournament page
<CallToAction
  isStreamed={isTournamentStreamed(pmwcTournament)}
  registrationUrl={pmwcTournament.registrationUrl}
  youtubeVideoId={pmwcTournament.youtubeVideoId}
  tournamentName={pmwcTournament.name}
/>
```

### 🔄 **Tournament Data Structure**

**New Fields Added:**

```typescript
interface Tournament {
  // ... existing fields
  registrationUrl?: string; // "https://forms.google.com/pmwc-registration"
  youtubeVideoId?: string; // "dQw4w9WgXcQ" (YouTube video ID)
}
```

### 📱 **Responsive Design**

**Registration Mode:**

- Mobile: Stacked buttons and full-width layout
- Desktop: Side-by-side buttons with hover effects

**Streaming Mode:**

- Mobile: Full-width video player with touch controls
- Desktop: Large centered video player with professional layout
- Aspect Ratio: 16:9 maintained across all devices

### ⚡ **Smart Features**

1. **Date Logic**: Automatically switches content based on real dates
2. **External Links**: Registration opens in new tab
3. **YouTube Integration**: Direct video embedding with controls
4. **Error Handling**: Fallback content if data is missing
5. **Performance**: Conditional rendering prevents unnecessary loads

### 🎬 **YouTube Player Features**

- **Autoplay**: Disabled for better UX
- **Related Videos**: Disabled (rel=0)
- **Branding**: Minimal YouTube branding
- **Full Screen**: Supported
- **Responsive**: Maintains aspect ratio

### 🚀 **Usage Benefits**

1. **Automatic Switching**: No manual updates needed
2. **Professional Presentation**: Tournament replay after completion
3. **User Engagement**: Direct registration links during active period
4. **Content Management**: Single component handles both states
5. **SEO Friendly**: Proper YouTube integration

The CallToAction component now provides a complete tournament lifecycle experience - from registration to post-tournament streaming! 🏆
