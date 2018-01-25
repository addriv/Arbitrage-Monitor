import axios from 'axios';
import { kucoinURI } from '../../util/kucoin_api_util';

export const RECEIVE_KUCOIN_BTC_RATIO = 'RECEIVE_KUCOIN_BTC_RATIO';
export const RECEIVE_KUCOIN_NEO_RATIO = 'RECEIVE_KUCOIN_NEO_RATIO';

const receiveKucoinRatio = (quoteCoin, symbol, ratio) => ({
  type: `RECEIVE_KUCOIN_${quoteCoin}_RATIO`,
  symbol,
  ratio
});

// type = 'buy' or 'sell'
export const fetchKucoinRatio = (baseCoin, quoteCoin, type) => dispatch => {
  const uri = kucoinURI(baseCoin, quoteCoin);

  axios.get(uri).then((response) => {
    const data = response.data;
    dispatch(receiveKucoinRatio(quoteCoin, data.symbol, data[type]));
  });
};