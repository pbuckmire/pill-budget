// Phase 1: extracted from the legacy single-file app.
// This is a static bootstrap snapshot only. Live financial data will replace it in a later phase.
window.PILL_DEFAULT_DATA = Object.freeze({
  schemaVersion: 1,
  snapshot: {
    label: "Legacy bootstrap snapshot",
    asOf: "2026-04-15",
    source: "manual/Plaid snapshot"
  },
  income: {
    primary: 7380.88,
    secondary: 1200,
    side: 300,
    other: 2100
  },
  expenses: {
    insurance: 514,
    subscriptions: 108.54,
    utilities: 303.67,
    lawn: 140,
    titheOffering: 1652.01,
    transportation: 200,
    otherLiving: 400
  },
  debts: [
    {
      type: "credit",
      name: "Amazon Prime Store Card (0424)",
      balance: 455.26,
      apr: 29.49,
      minPayment: 29,
      months: 18,
      nextDue: "2026-05-05",
      paymentNote: "Synchrony Bank — Cancel Payment Security fee if still active."
    },
    {
      type: "credit",
      name: "Barclays View® Mastercard®",
      balance: 400.87,
      apr: 25.99,
      minPayment: 30,
      months: 18,
      nextDue: "2026-05-07"
    },
    {
      type: "credit",
      name: "Discover it Miles Card",
      balance: 3116.53,
      apr: 19.74,
      minPayment: 63,
      months: 48,
      nextDue: "2026-04-14"
    },
    {
      type: "credit",
      name: "Apple Card",
      balance: 1512.78,
      apr: 19.49,
      minPayment: 122,
      months: 48,
      paymentNote: "Goal: Pay off → use as daily spending card (pay in full monthly)"
    },
    {
      type: "car",
      name: "2017 Subaru WRX",
      balance: 8474.30,
      apr: 5.14,
      minPayment: 296,
      months: 36
    },
    {
      type: "mortgage",
      name: "IO HELOC – 7340 Hill Drive",
      balance: 117992.02,
      apr: 7.5,
      minPayment: 737.45,
      months: 120,
      interestOnly: true
    },
    {
      type: "mortgage",
      name: "10/1 ARM Mortgage",
      balance: 858787.89,
      apr: 3.13,
      minPayment: 3600,
      months: 303,
      familyContribution: 3400,
      netOutOfPocket: 250
    }
  ]
});
