# YouTube Video Update - PMWC Tournament

## ✅ **Official PMWC Video Added**

### 🎬 **Updated Video Details**

**Video ID:** `UGR_VQ5NTV4`  
**Title:** "PMWC – PUBG Mobile Warrior Cup | Live Tournament | Stream Nepal"  
**URL:** https://www.youtube.com/watch?v=UGR_VQ5NTV4

### 🔄 **Changes Made**

1. **Tournament Data Updated:**

   ```typescript
   // In src/data/tournaments.ts
   youtubeVideoId: "UGR_VQ5NTV4", // Official PMWC tournament video
   ```

2. **Component Default Updated:**

   ```typescript
   // In src/components/CallToAction.tsx
   youtubeVideoId = "UGR_VQ5NTV4", // Default to PMWC tournament video
   ```

3. **Enhanced Video Player:**
   - Updated iframe title to match official video title
   - Added all YouTube embed parameters for optimal experience
   - Maintained responsive design and professional styling

### 📺 **Video Player Features**

**Iframe Configuration:**

```html
<iframe
  src="https://www.youtube.com/embed/UGR_VQ5NTV4?autoplay=0&rel=0&showinfo=0&modestbranding=1"
  title="PMWC – PUBG Mobile Warrior Cup | Live Tournament | Stream Nepal"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
/>
```

**Player Settings:**

- ✅ **Autoplay**: Disabled (better UX)
- ✅ **Related Videos**: Hidden (professional look)
- ✅ **Branding**: Minimized YouTube branding
- ✅ **Full Screen**: Enabled
- ✅ **Responsive**: 16:9 aspect ratio maintained

### 🎮 **Integration Benefits**

1. **Official Content**: Uses the actual PMWC tournament footage
2. **Professional Presentation**: Stream Nepal branding in video title
3. **Optimal Settings**: Configured for tournament viewing experience
4. **Seamless Integration**: Works with existing component logic
5. **Future-Proof**: Easy to update video ID for new tournaments

### 🚀 **How It Works**

**Registration Mode (Current):**

- Shows registration form until tournament ends (Nov 3, 2025)
- Users can register for the tournament

**Streaming Mode (After Tournament):**

- Automatically switches to show the PMWC video
- Full embedded player with professional styling
- Direct link to watch on YouTube

The CallToAction component now features the official PMWC tournament video and will automatically display it when the tournament concludes! 🏆📺
