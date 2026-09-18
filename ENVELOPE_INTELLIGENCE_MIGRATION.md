# Envelope Intelligence Migration Plan

## Goal

Evolve the existing PILL Budget prototype into a maintainable Envelope Intelligence web app while preserving the current visual language and PILL-specific calculations.

## Keep

- Dark PILL design system and typography direction
- Existing six-part workflow:
  1. Income & Expenses
  2. Debts
  3. PILL Strategy
  4. Advisor
  5. Accounts
  6. Payment Log
- Existing PILL prepayment and interest-cancellation concepts
- Mobile responsiveness
- Payment history concept
- User-facing debt prioritization and advisor explanations

## Refactor

- Move financial data out of hard-coded JavaScript defaults
- Separate UI, calculations, financial data, and persistence
- Replace direct DOM manipulation with component-based rendering
- Replace scattered localStorage usage with a structured app state layer
- Centralize currency/date formatting
- Centralize debt and obligation types
- Make PILL calculations pure/testable functions
- Add validation around missing or stale financial data
- Introduce explicit transaction classification:
  - true spending
  - debt payments
  - internal transfers
  - sinking-fund contributions

## Replace

- Static April 2026 balance snapshot
- Manual "last synced via Plaid" label
- Hard-coded debt balances, APRs, due dates, and account balances
- Assumptions that all checking cash is available for PILL acceleration
- Single-file architecture

## Target Architecture

### UI
A modern component-based web app preserving the current look.

Suggested structure:

- Dashboard
- Cash Flow
- Envelopes
- Debts
- PILL Strategy
- Advisor
- Accounts
- Payment Log
- Settings

### Data layer

Normalized entities:

- accounts
- balances
- transactions
- recurring_obligations
- envelopes
- debts
- income_sources
- payment_log
- sync_metadata

### Decision engine

The AI/rules layer should calculate:

1. cash available
2. protected cash
3. upcoming obligations
4. underfunded envelopes
5. debt minimums
6. high-interest debt exposure
7. safe-to-send amount
8. PILL acceleration recommendation

Core rule:

> Never treat account balance as surplus until protected obligations and envelope funding are satisfied.

## Migration Phases

### Phase 1 — Extract and stabilize
- Preserve current UI
- Move hard-coded financial defaults into a standalone data module
- Move PILL math into dedicated functions
- Add a single app-state object
- Keep behavior identical

### Phase 2 — Envelope Intelligence model
- Add envelopes and sinking funds
- Add obligation cadence: monthly, quarterly, annual
- Add protected-cash and liquidity-target logic
- Add "Safe to Send" calculation
- Distinguish transfers from spending

### Phase 3 — Live data adapter
- Define a read-only financial-data interface
- Map linked bank data into the normalized model
- Track sync timestamp and data quality
- Never overwrite user-entered corrections without confirmation

### Phase 4 — Advisor
- Use current account, debt, obligation, and envelope state
- Explain why a payment is or is not safe
- Surface warnings before PILL prepayments
- Prioritize high-interest revolving debt before low-rate mortgage acceleration when liquidity is constrained

### Phase 5 — Sites-ready polish
- Responsive dashboard layout
- Installable/PWA behavior where supported
- Empty/loading/error states
- Accessibility pass
- Deployment configuration

## First Implementation Slice

The first coding milestone should be intentionally boring:

1. reproduce current behavior exactly
2. extract data from `pill-budget.html`
3. extract PILL calculations
4. preserve all tabs and styling
5. introduce no live-bank writes

That gives us a stable base before adding financial automation.

## Safety Boundary

Initial integration should be read-only.

The app may:
- display balances
- classify transactions
- calculate recommendations
- prepare payment plans

The app should not initiate transfers or payments until a separate approval and action layer is designed.
