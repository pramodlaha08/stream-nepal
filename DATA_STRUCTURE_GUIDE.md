# Tournament Data Structure Reorganization

## 🏗️ **New Data Architecture**

The tournament data has been restructured for better scalability, maintainability, and type safety.

### 📁 **New File Structure**

```
src/data/
├── index.ts              # Main export file and tournament registry
├── types.ts              # All TypeScript interfaces and types
├── utils.ts              # Helper functions for tournaments
├── pmwc.ts              # PMWC tournament specific data
├── ffwarzone.ts         # Free Fire Warzone tournament data
└── [future-tournament].ts # Additional tournament files
```

### 🎯 **Key Benefits**

1. **Separation of Concerns**: Each tournament has its own data file
2. **Type Safety**: Centralized type definitions
3. **Scalability**: Easy to add new tournaments
4. **Maintainability**: Clean imports and organized structure
5. **Reusability**: Shared utilities and types

### 📋 **Core Interfaces**

**Main Tournament Interface:**

```typescript
export interface Tournament {
  id: string;
  name: string;
  shortName: string;
  description: string;
  prizePool: PrizePool;
  dates: TournamentDates;
  status: "registration" | "upcoming" | "live" | "finished";
  // ... other properties
}
```

**Additional Interfaces:**

- `TournamentSlot` - Team registration slots
- `Match` - Individual match details
- `Sponsor` - Sponsor information with tiers
- `StreamingPlatform` - Streaming platform details
- `TournamentStats` - Tournament statistics

### 🔧 **Usage Examples**

**Import Everything (Recommended):**

```typescript
import {
  pmwcTournament,
  pmwcSlots,
  isTournamentStreamed,
  Tournament,
  TournamentSlot,
} from "@/data";
```

**Import Specific Tournament:**

```typescript
import { pmwcTournament, pmwcSlots } from "@/data/pmwc";
import { ffwarzoneeTournament, ffwarzoneSlots } from "@/data/ffwarzone";
```

**Use Utility Functions:**

```typescript
import { getTournamentById, getActiveTournaments } from "@/data";

const tournament = getTournamentById("pmwc-2025");
const activeTournaments = getActiveTournaments();
```

### 🎮 **Tournament Data Files**

**PMWC (src/data/pmwc.ts):**

- Complete PUBG Mobile Warriors Cup data
- 32 team slots with confirmed registrations
- 7 match schedule with maps and times
- YouTube integration: `UGR_VQ5NTV4`

**FF Warzone (src/data/ffwarzone.ts):**

- Free Fire Warzone Championship data
- 24 team slots for battle royale format
- 6 match schedule with Free Fire maps
- Different prize pool and entry fee structure

### 🛠️ **Utility Functions**

**Tournament Status:**

```typescript
isTournamentStreamed(tournament); // Returns boolean
getTournamentStatus(tournament); // Returns current status
getRegistrationProgress(registered, max); // Returns percentage
```

**Date Helpers:**

```typescript
formatTournamentDate(dateString); // Formats dates nicely
getDaysRemaining(tournamentDate); // Days until tournament
```

**Tournament Queries:**

```typescript
getTournamentById(id); // Find by ID
getTournamentsByGame(game); // Filter by game
getActiveTournaments(); // Active tournaments only
getUpcomingTournaments(); // Upcoming tournaments only
```

### 📱 **Component Integration**

**Updated Component Imports:**

```typescript
// All tournament components now import from @/data
import { Tournament, TournamentSlot } from "@/data";
```

**Page Structure:**

```typescript
// Tournament pages import specific data
import { pmwcTournament, pmwcSlots, isTournamentStreamed } from "@/data";
```

### 🚀 **Adding New Tournaments**

**1. Create Tournament Data File:**

```typescript
// src/data/newtournament.ts
export const newTournament: Tournament = {
  // Tournament configuration
};

export const newTournamentSlots: TournamentSlot[] = [
  // Slot data
];
```

**2. Update Index File:**

```typescript
// src/data/index.ts
export * from "./newtournament";
import { newTournament } from "./newtournament";
export const allTournaments = [...existing, newTournament];
```

**3. Create Tournament Page:**

```typescript
// src/app/tournaments/newtournament/page.tsx
import { newTournament, newTournamentSlots } from "@/data";
```

### 🎯 **Migration Benefits**

1. **Cleaner Imports**: Single `@/data` import for most use cases
2. **Better Organization**: Each tournament is self-contained
3. **Type Safety**: Centralized type definitions prevent errors
4. **Scalability**: Easy to add unlimited tournaments
5. **Maintainability**: Clear structure for future development

### 📊 **Tournament Registry**

The new system includes a tournament registry that provides:

- List of all tournaments (`allTournaments`)
- Tournament lookup functions
- Filtering capabilities
- Status-based queries

This structure makes it easy to build tournament listing pages, search functionality, and dynamic tournament selection! 🏆
