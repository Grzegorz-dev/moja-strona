import crypto from "crypto";

const secret = process.env.GUIDE_TOKEN_SECRET;
if (!secret) {
  console.error("Brak GUIDE_TOKEN_SECRET w env");
  process.exit(1);
}

const domain = "https://slowiaczek.pl";

// użycie: node scripts/gen-guide-link.mjs shop 30
// gdzie 30 = liczba dni ważności
const key = process.argv[2]; // "shop" lub "blog"
const days = Number(process.argv[3] || 30);

if (!["shop", "blog"].includes(key)) {
  console.error('key musi być "shop" albo "blog"');
  process.exit(1);
}

const exp = Math.floor(Date.now() / 1000) + days * 24 * 60 * 60;
const payload = { key, exp };

function b64url(buf) {
  return Buffer.from(buf)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

const payloadB64 = b64url(JSON.stringify(payload));
const sig = b64url(crypto.createHmac("sha256", secret).update(payloadB64).digest());
const token = `${payloadB64}.${sig}`;

console.log(`${domain}/api/guides?token=${token}`);
