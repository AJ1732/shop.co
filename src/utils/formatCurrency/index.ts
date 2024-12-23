const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};

export default formatCurrency;
