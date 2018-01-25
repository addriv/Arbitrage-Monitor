// Returns list of trading pairs
export const kucoinPairsSelector = (state, quoteCoin) => {
  return Object.keys(state.arbitrage.intra.kucoin.ratios[`${quoteCoin}Pairs`]);
};

