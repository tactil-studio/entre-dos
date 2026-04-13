

## Problem

On mobile, users can't pinch-to-zoom on the Carta menu images. This is caused by `overflow-x: hidden` on the `html` element in `index.css`, which some mobile browsers interpret as disabling pinch-to-zoom.

## Solution

Two changes:

1. **Move `overflow-x: hidden` from `html` to `body`** in `index.css` — this still prevents horizontal scroll from layout issues but doesn't interfere with browser-level pinch zoom.

2. **Add a tap-to-expand fullscreen view for menu images** on the Carta page — since pinch-zoom on inline images is always unreliable on mobile, we'll add a click/tap handler that opens the menu image in a fullscreen overlay (dialog) where users can freely zoom and pan. This is the standard pattern for restaurant menu sites.

## Implementation

- **`src/index.css`**: Move `overflow-x: hidden` from `html` to `body`
- **`src/pages/Carta.tsx`**: Wrap the menu image in a clickable element. On tap, open a fullscreen `Dialog` overlay showing the image at full resolution with native scroll/zoom enabled. Add a subtle "Tap to zoom" hint below the image on mobile.

