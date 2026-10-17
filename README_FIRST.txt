PAI MANILA WATER TENANT SHARING APP — VERSION 1.1
STATUS: REVIEW / TESTING ONLY. NOT DEPLOYED TO GITHUB OR NETLIFY.

Source reference: supplied Manila Water October 2026 bill.
Invoice: RIZ2610-0002499111
CAN: 22365085
Current charges: PHP 284.30
Previous unpaid (separate): PHP 1,315.38
Total due: PHP 1,599.68
Official consumption: 0 m³

HOW TO TEST
1. Open index.html in Chrome or open the separate preview HTML file.
2. Go to TENANTS > Add each unit and its optional submeter ID.
3. Go to BILL & SHARING > Enter each tenant's previous and current submeter readings.
4. Select one of these formulas:
   A. FULL PROPORTIONAL: each tenant gets (tenant m³ / total tenant m³) × current Manila Water charges.
   B. EQUAL BASE + PROPORTIONAL REMAINDER: Enter an agreed base/minimum amount; share that amount equally, then allocate the balance proportional to m³.
   If total submeter consumption is zero, current charges are shared equally between active tenants.
5. Verify any mismatch between the main account and all submeters. The app warns and requests confirmation of an official-versus-submeter mismatch.
6. Check the main account previous unpaid amount. It is NOT automatically split; assign old balances only when a specific tenant owes them.
7. Save billing cycle to create printable unit statements and collection ledger.
8. Record tenant payments, print/share statements, then use NEW BILLING CYCLE to carry the last saved meter readings forward.
9. Export JSON backups regularly. Data is stored locally by the browser; a separate device or browser won't automatically have these records.

NOTES
- Do not give tenants an invoice based on incomplete or decreasing readings. The app blocks saving in those cases.
- The 0 m³ Manila Water bill still has minimum/current charges of PHP 284.30. Those charges are not a per-m³ tariff when total tenant use is zero.
- These are landlord-issued tenant billing statements, not official Manila Water invoices.
- Viewing downloaded HTML outside HTTPS may limit install/offline/browser storage features. Do not rely on preview for permanent bookkeeping.
- No cloud sync, automatic bill OCR, GitHub push, or Netlify upload is included.
- The storage key is unchanged from V1.0, so same-origin/browser V1 records can be read; export a JSON backup first.

FILES
index.html — app
manifest.webmanifest — PWA metadata
sw.js — offline caching service worker (available when hosted)
icon-192.png / icon-512.png — icons
