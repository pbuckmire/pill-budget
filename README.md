# PILL Budget → Envelope Intelligence

This branch is the migration path from the original single-file PILL Method prototype to the Envelope Intelligence architecture.

## Current Phase

Phase 1 — Extract and stabilize.

Completed so far:

- Preserved the existing PILL UI and behavior.
- Extracted the legacy April 2026 bootstrap financial snapshot into `js/default-data.js`.
- Added `js/pill-core.js` for pure/testable PILL calculations.
- Added `js/app-state.js` for versioned state persistence.
- Migrated the app from scattered localStorage keys to a structured state payload, with automatic migration of existing saved data.
- Replaced duplicate debt-priority sorting and monthly-summary math with shared PILL core helpers.
- Replaced the misleading fixed "Plaid synced" label with an explicit legacy-snapshot notice.

## Files

- `pill-budget.html` — existing UI, progressively being slimmed down
- `js/default-data.js` — legacy bootstrap data only
- `js/pill-core.js` — PILL financial calculation helpers
- `js/app-state.js` — versioned persistence layer
- `ENVELOPE_INTELLIGENCE_MIGRATION.md` — migration roadmap

## Important Data Rule

Account balance is not the same thing as surplus cash.

Future Envelope Intelligence logic will protect:

1. required monthly bills
2. quarterly and annual sinking funds
3. debt minimums
4. emergency reserves
5. liquidity floor

Only the remaining amount can become a Safe to Send / PILL acceleration recommendation.

## Next Phase 1 Work

- Extract formatting and UI helpers
- Extract debt rendering and payment-log logic
- Add basic tests for PILL calculations
- Define the normalized financial-data adapter that the future live-bank integration will use
