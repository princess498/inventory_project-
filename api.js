// ============================================================
// api.js  –  Simulated Cin7 Core API
// ============================================================
// HOW THIS WORKS:
//   RIGHT NOW  → reads from mock_inventory.json (your simulation)
//   REAL CIN7  → swap the getInventory() function to call the
//                Cin7 Core API instead (see comments below)
// ============================================================

// -----------------------------------------------------------
// STEP 1: Your Cin7 credentials go here when you go live
// -----------------------------------------------------------
const CIN7_ACCOUNT_ID = "YOUR_ACCOUNT_ID";   // from Cin7: Integrations → API
const CIN7_API_KEY    = "YOUR_API_KEY";       // from Cin7: Integrations → API
const CIN7_API_URL    = "https://inventory.dearsystems.com/externalapi/v2/";

// -----------------------------------------------------------
// getInventory()
// -----------------------------------------------------------
// SIMULATION MODE (what runs now):
//   Reads your local mock_inventory.json file
//
// REAL CIN7 MODE (uncomment when you have API keys):
//   Calls the Cin7 Core API endpoint /product/availability
//   which returns live stock levels for all your products
// -----------------------------------------------------------

async function getInventory() {

  // ── SIMULATION: read local JSON file ──────────────────────
  const response = await fetch('mock_inventory.json');
  const data = await response.json();
  return data;

  // ── REAL CIN7 (uncomment this block when ready) ───────────
  /*
  const response = await fetch(CIN7_API_URL + "product/availability", {
    method: "GET",
    headers: {
      "api-auth-accountid": CIN7_ACCOUNT_ID,
      "api-auth-applicationkey": CIN7_API_KEY,
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();

  // Map Cin7 response fields to our dashboard format
  return data.ProductAvailabilityList.map(p => ({
    sku:           p.SKU,
    name:          p.Name,
    variant:       p.Option1 || "",
    category:      p.Category || "Uncategorised",
    subcategory:   p.Brand || "",
    stock_on_hand: p.Available,
    reorder_point: p.ReorderPoint || 5,
    location:      p.Location || "Main Warehouse",
    unit:          "pcs",
    status: p.Available === 0 ? "OUT OF STOCK"
          : p.Available < (p.ReorderPoint || 5) ? "LOW STOCK"
          : "OK"
  }));
  */
}
