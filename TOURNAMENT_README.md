# Tournament System Documentation

## Overview

This tournament system provides a complete, reusable solution for creating and managing esports tournament pages. The system is built with Next.js, TypeScript, and Tailwind CSS, featuring modern animations and a responsive design.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Gaming-themed design with beautiful animations
- **Reusable Components**: Easy to create new tournament pages
- **Data-Driven**: Tournament data stored in structured objects
- **SEO Optimized**: Proper metadata and semantic HTML
- **Accessible**: Keyboard navigation and screen reader support

## File Structure

```
src/
├── data/
│   ├── tournaments.ts          # Tournament data definitions
│   └── tournamentTemplates.ts  # Templates for creating new tournaments
├── components/
│   ├── TournamentHeader.tsx    # Tournament hero section
│   ├── TournamentDetails.tsx   # Prize pool, schedule, rules, sponsors
│   └── TournamentSlots.tsx     # Team slot tables
└── app/
    └── tournaments/
        └── pmwc/
            └── page.tsx        # PMWC tournament page
```

## Creating a New Tournament

### Step 1: Define Tournament Data

Create your tournament data in `src/data/tournaments.ts`:

```typescript
export const valorantCup: Tournament = {
  id: "valorant-cup-2025",
  name: "Valorant Championship Cup",
  shortName: "VCC",
  description: "The ultimate Valorant tournament...",
  // ... other properties
};

export const valorantSlots: TournamentSlot[] = [
  // Define your tournament slots
];
```

### Step 2: Create Tournament Page

Create a new page at `src/app/tournaments/[tournament-name]/page.tsx`:

```typescript
import { valorantCup, valorantSlots } from "@/data/tournaments";
import TournamentHeader from "@/components/TournamentHeader";
import TournamentDetails from "@/components/TournamentDetails";
import TournamentSlots from "@/components/TournamentSlots";

export default function ValorantCupPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-slate-950">
        {/* Background effects... */}
        <div className="container mx-auto px-4 py-8 space-y-16">
          <TournamentHeader tournament={valorantCup} />
          <TournamentDetails tournament={valorantCup} />
          <TournamentSlots
            slots={valorantSlots}
            maxTeams={valorantCup.maxTeams}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
```

### Step 3: Using Templates (Recommended)

Use the tournament template for faster creation:

```typescript
import {
  createTournamentTemplate,
  createTournamentSlots,
} from "@/data/tournamentTemplates";

export const valorantCup = createTournamentTemplate({
  id: "valorant-cup-2025",
  name: "Valorant Championship Cup",
  shortName: "VCC",
  game: "Valorant",
  format: "Team (5 Players)",
  maxTeams: 16,
  prizePool: {
    total: "50,000",
    currency: "NPR",
    breakdown: [
      { position: "1st Place", amount: "25,000 NPR" },
      { position: "2nd Place", amount: "15,000 NPR" },
      { position: "3rd Place", amount: "7,000 NPR" },
      { position: "4th Place", amount: "3,000 NPR" },
    ],
  },
});

export const valorantSlots = createTournamentSlots(16, ["Alpha", "Beta"]);
```

## Tournament Data Structure

### Tournament Interface

```typescript
interface Tournament {
  id: string; // Unique identifier
  name: string; // Full tournament name
  shortName: string; // Abbreviated name
  description: string; // Tournament description
  image: string; // Banner image URL
  logo: string; // Tournament logo URL
  prizePool: {
    total: string; // Total prize amount
    currency: string; // Currency (NPR, USD, etc.)
    breakdown: {
      position: string; // Position name (1st Place, etc.)
      amount: string; // Prize amount for position
    }[];
  };
  dates: {
    registration: {
      start: string; // Registration start date (YYYY-MM-DD)
      end: string; // Registration end date
    };
    tournament: {
      start: string; // Tournament start date
      end: string; // Tournament end date
    };
  };
  status: "registration" | "upcoming" | "live" | "finished";
  format: string; // Team format (Squad 4 Players, etc.)
  maxTeams: number; // Maximum number of teams
  registeredTeams: number; // Currently registered teams
  entryFee: {
    amount: string; // Entry fee amount
    currency: string; // Entry fee currency
  };
  game: string; // Game name
  platform: string[]; // Supported platforms
  rules: string[]; // Tournament rules
  sponsors: {
    name: string; // Sponsor name
    logo: string; // Sponsor logo URL
    website: string; // Sponsor website
  }[];
}
```

### Tournament Slot Interface

```typescript
interface TournamentSlot {
  slotNumber: number; // Unique slot number
  slotName: string; // Slot identifier (A1, B2, etc.)
  logo: string; // Team logo URL
  teamName: string; // Team name (or 'TBD' if available)
  status: "available" | "reserved" | "confirmed";
  registrationDate?: string; // Date team registered
}
```

## Components

### TournamentHeader

Displays tournament title, status, key statistics, and basic information in a hero-style layout.

**Props:**

- `tournament: Tournament` - Tournament data object

### TournamentDetails

Shows detailed tournament information including prize pool breakdown, schedule, rules, and sponsors.

**Props:**

- `tournament: Tournament` - Tournament data object

### TournamentSlots

Displays team slots in side-by-side tables for different groups with registration status and team information.

**Props:**

- `slots: TournamentSlot[]` - Array of tournament slots
- `maxTeams: number` - Maximum number of teams

## Styling & Theming

The tournament pages use a consistent gaming-themed design with:

- **Colors**: Cyan, purple, and pink gradients on dark slate backgrounds
- **Typography**: Bold, modern fonts with gradient text effects
- **Animations**: Smooth transitions and hover effects
- **Cards**: Glassmorphism cards with backdrop blur
- **Responsive**: Mobile-first responsive design

## Customization

### Adding New Tournament Types

1. Extend the `Tournament` interface if needed
2. Create new tournament data using the template
3. Customize components as needed
4. Add new page routes

### Styling Customization

- Modify CSS variables in `globals.css`
- Update gradient colors in component files
- Adjust animation durations and effects

## Performance Considerations

- Images should be optimized and properly sized
- Use Next.js Image component for automatic optimization
- Components use CSS animations for GPU acceleration
- Minimal JavaScript for better performance

## Accessibility

- Proper semantic HTML structure
- Keyboard navigation support
- Screen reader compatible
- Focus states for interactive elements
- Alt text for images

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement approach

## Future Enhancements

- Real-time tournament updates
- Team registration system
- Live match streaming integration
- Tournament bracket visualization
- Admin panel for tournament management
