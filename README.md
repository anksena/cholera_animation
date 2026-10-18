# Interactive Presentation Storyboard: The Ghost Map (London 1854)

An interactive, character-driven presentation player set in Victorian London during the Industrial Revolution and the 1854 Broad Street cholera outbreak.

## 📖 Current Storyline: "The Ghost Map: A London Outbreak"

Follow the harrowing dilemma of poor textile mill workers in Soho, London:
1. **Scene 1: The Sudden Fever** (`images/scene1-sickbed.png`)
   - **Speaker**: Eliza Hughes (Textile Mill Weaver)
   - **Story**: Mary lies ill and feverish in their cramped tenement room before dawn. Eliza agonizes over whether to stay and nurse her or report to the factory.
2. **Scene 2: The Cost of a Shift** (`images/scene2-shift-dilemma.png`)
   - **Speaker**: Thomas Ward (Fellow Mill Worker)
   - **Story**: Thomas warns that missing a shift means immediate wage docking and eviction. He urges Eliza to fetch fresh water while he covers her loom station.
3. **Scene 3: The Sweet Water of Soho** (`images/scene3-broad-street-pump.png`)
   - **Speaker**: Eliza Hughes
   - **Story**: Eliza arrives at the Broad Street cast-iron street pump through the industrial smog, filling her tin pail with what everyone assumes is cool, pure water.
4. **Scene 4: The Blue Death** (`images/scene4-cholera-warning.png`)
   - **Speaker**: Thomas Ward
   - **Story**: Thomas races down Broad Street in terror to grab Eliza's arm: workers are dying across Soho and Dr. John Snow is investigating—the illness is cholera!

---

## 💡 Architecture

The application adopts the **3-Tier Interactive Storyboard** pattern:

1. **Scene Viewport (`<div class="scene-card">`)**:
   - 16:9 cinema viewport displaying high-resolution generated historical scenes.
   - Smooth cross-fade transitions and chapter tags.

2. **Dialogue & Character Box (`<section class="dialogue-card">`)**:
   - Character avatar badges with distinct colors (`#0284c7` for Eliza, `#d97706` for Thomas).
   - Speaker name, role title, and historical dialogue.

3. **Navigation & Controls Bar (`<nav class="controls-bar">`)**:
   - "Next Scene" and "Back" buttons with loop-around restart.
   - Dynamic progress bar and scene counter badge (`Scene 1 of 4`).
   - Keyboard shortcuts (`←`, `→`, `Space`, `M` for scenes drawer, `F` for fullscreen).
   - Expandable Presenter Notes with historical citations and footnotes.
   - Deep linking with hash routing (`#scene-1` to `#scene-4`).

---

## 🚀 How to Run Locally

### Option 1: Direct File Open
Double-click `index.html` to open directly in Google Chrome, Microsoft Edge, or Firefox.

### Option 2: Local Server
```bash
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

---

## 🎨 Image Generator (`generate_images.py`)

A dedicated script using Google Gemini (`gemini-2.5-flash-image`) to generate high-resolution scene artwork.

```bash
# Run using the local virtual environment
.\.venv\Scripts\python.exe generate_images.py [--debug]
```
