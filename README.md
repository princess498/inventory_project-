# Inventory Dashboard – Step by Step Guide
## Your 3 files explained

| File | What it does |
|------|-------------|
| `mock_inventory.json` | Your simulated Cin7 data (stock levels, reorder points) |
| `api.js` | The bridge between Cin7 and the dashboard |
| `index.html` | The visual dashboard your team sees |

---

## STEP 1 — Open in VS Code
1. Open VS Code
2. File → Open Folder → select the `inventory-dashboard` folder
3. You'll see the 3 files in the sidebar

---

## STEP 2 — Run the dashboard locally
You need a local server (not just double-click) because of browser security.

**Option A — VS Code extension (easiest):**
1. Install extension: "Live Server" by Ritwick Dey
2. Right-click `index.html` → "Open with Live Server"
3. Browser opens automatically at http://127.0.0.1:5500

**Option B — Terminal:**
```bash
cd inventory-dashboard
npx serve .
```
Then open http://localhost:3000

---

## STEP 3 — Understand how it works (simulation)

Right now `api.js` reads `mock_inventory.json`.
That file has your real SKUs with fake stock numbers.
The dashboard shows them with status: OK / LOW STOCK / OUT OF STOCK.

---

## STEP 4 — Connect to real Cin7 Core (when ready)

### Get your API keys:
1. Log into Cin7 Core
2. Go to: Integrations → API → Cin7 Core API
3. Click "Add Integration" / Create Application
4. Copy your **Account ID** and **Application Key**

### Update api.js:
Open `api.js` and:
1. Replace `"YOUR_ACCOUNT_ID"` with your real Account ID
2. Replace `"YOUR_API_KEY"` with your real API Key
3. Comment out the SIMULATION block (lines 30-32)
4. Uncomment the REAL CIN7 block (lines 35-55)

That's it — the dashboard now pulls live data from Cin7.

---

## What the dashboard shows your team

- **Red card** → how many SKUs are completely out of stock
- **Yellow card** → how many SKUs are below reorder point
- **Search box** → find any SKU or product name instantly
- **Category filter** → view only Rings, Bracelets, etc.
- **Status filter** → show only low stock items
- **Stock bar** → visual indicator of how full stock is
- **Reorder Point** → the minimum stock level before you need to reorder

---

## To change reorder points
Open `mock_inventory.json` and change the `"reorder_point"` value
for any product. Save the file and refresh the browser.

When connected to real Cin7, reorder points are set inside
Cin7 Core: Products → select product → Reorder Point field.
