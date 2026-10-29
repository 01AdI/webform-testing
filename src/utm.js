// Captures UTM parameters (and Google Ads gclid) from the landing URL,
// remembers them for the browser session, and hands them back for the form.

const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
const STORE_KEY = "lead_tracking_v1";

function readStore() {
  try {
    return JSON.parse(sessionStorage.getItem(STORE_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeStore(data) {
  try {
    sessionStorage.setItem(STORE_KEY, JSON.stringify(data));
  } catch {
    /* storage can be blocked; the form still works with current URL values */
  }
}

export function captureTracking() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = {};
  KEYS.forEach((k) => {
    const v = params.get(k);
    if (v) fromUrl[k] = v.slice(0, 200);
  });

  const stored = readStore();
  // If the visitor arrived with new UTMs, they replace old ones; otherwise keep what we stored.
  const merged = Object.keys(fromUrl).length ? { ...fromUrl } : stored;

  // Direct visits with no UTMs still get a clear source so the CRM is never blank
  if (!merged.utm_source) {
    merged.utm_source = "direct";
    merged.utm_medium = merged.utm_medium || "website";
  }

  writeStore(merged);
  return merged;
}
