# Match Schedule Feature Added

## New Feature: Tournament Match Schedule

### What's Added

**Match Schedule Section** in Tournament Details page with:

- **Match Information Display**: Match number, name, time (AM/PM format), map name, and round
- **Visual Card Layout**: Each match displayed in an attractive card with gradient effects
- **Status Indicators**: Shows "Next", "Upcoming", or "Scheduled" status for each match
- **Professional Design**: Consistent with the gaming theme using green/blue gradients

### Match Schedule Data Structure

```typescript
// Added to Tournament interface
matchSchedule?: {
  matchNumber: number;
  matchName: string;
  time: string;         // Format: "10:00 AM"
  map: string;          // PUBG Map names
  round: string;        // Tournament round
}[]
```

### Sample Match Data (PMWC Tournament)

```typescript
matchSchedule: [
  {
    matchNumber: 1,
    matchName: "Opening Match",
    time: "10:00 AM",
    map: "Erangel",
    round: "Round 1",
  },
  {
    matchNumber: 2,
    matchName: "Elimination Round",
    time: "11:30 AM",
    map: "Miramar",
    round: "Round 1",
  },
  // ... 7 total matches including Grand Finals
];
```

### Visual Features

1. **Match Cards**:

   - Gradient borders with hover effects
   - Match number badge with gradient background
   - Round indicator and time display
   - Map information with map pin icon

2. **Status System**:

   - **Next**: Yellow badge for immediate upcoming match
   - **Upcoming**: Blue badge for near-term matches
   - **Scheduled**: Gray badge for future matches

3. **Responsive Design**:

   - Desktop: 3-column grid layout
   - Tablet: 2-column grid layout
   - Mobile: Single column stack

4. **Schedule Notes**:
   - Important information about timezone and updates
   - Professional disclaimer about schedule changes

### Integration

- **Conditional Rendering**: Only shows if tournament has matchSchedule data
- **Responsive Grid**: Adapts to different screen sizes automatically
- **Icon Integration**: Uses Clock and MapPin icons from Lucide React
- **Theme Consistency**: Matches existing tournament page styling

### Maps Included

- **Erangel**: Classic battle royale map
- **Miramar**: Desert themed map
- **Sanhok**: Small tropical map
- **Vikendi**: Snow themed map
- **Livik**: Fast-paced small map

The match schedule provides a complete tournament timeline from opening match through grand finals, giving players and spectators a clear understanding of the tournament flow and timing.
