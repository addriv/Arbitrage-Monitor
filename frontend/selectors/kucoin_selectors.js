// Returns BTC trading pairs symbols
export const BTCPairsSelector = (state) => {
  return Object.keys(state.arbitrage.intra.kucoin.BTCPairs);
};