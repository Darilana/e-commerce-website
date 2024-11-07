export const formatPrice = (
  price: number,
  locale = "en-US",
  currency = "USD",
) =>
  new Intl.NumberFormat(locale, { style: "currency", currency }).format(price);
