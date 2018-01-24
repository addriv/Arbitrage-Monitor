export const kucoinURI = (baseCoin, quoteCoin) => {
  return `/api/kucoin?base_coin=${baseCoin}&quote_coin=${quoteCoin}` 
};