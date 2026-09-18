// Pure calculation helpers for the PILL Method.
// No DOM access and no persistence: these functions are intentionally easy to test.
window.PILLCore = Object.freeze({
  sum(values) {
    return values.reduce((total, value) => total + (Number(value) || 0), 0);
  },

  monthlyInterest(balance, aprPercent) {
    const balanceValue = Math.max(0, Number(balance) || 0);
    const apr = Math.max(0, Number(aprPercent) || 0) / 100;
    return balanceValue * apr / 12;
  },

  totalMinimumPayments(debts) {
    return this.sum((debts || []).map(debt => debt.minPayment));
  },

  totalDebtBalance(debts) {
    return this.sum((debts || []).map(debt => debt.balance));
  },

  monthlySnapshot({ income = [], expenses = [], debts = [] } = {}) {
    const totalIncome = this.sum(income);
    const totalExpenses = this.sum(expenses);
    const debtMinimums = this.totalMinimumPayments(debts);
    const totalOutflow = totalExpenses + debtMinimums;

    return {
      totalIncome,
      totalExpenses,
      debtMinimums,
      totalOutflow,
      availableForPill: totalIncome - totalOutflow
    };
  },

  sortDebtsByApr(debts) {
    return [...(debts || [])].sort((a, b) => {
      const aprDelta = (Number(b.apr) || 0) - (Number(a.apr) || 0);
      if (aprDelta !== 0) return aprDelta;
      return (Number(a.balance) || 0) - (Number(b.balance) || 0);
    });
  }
});
