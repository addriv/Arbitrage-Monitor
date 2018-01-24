import axios from 'axios';
import { kucoinURI } from '../../util/kucoin_api_util';

export const RECEIVE_RATIO = 'RECEIVE_RATIO';

const receiveKucoinRatio = (symbol, ratio) => ({
  type: RECEIVE_RATIO,
  symbol,
  ratio
});

// type = 'buy' or 'sell'
export const fetchKucoinRatio = (baseCoin, quoteCoin, type) => dispatch => {
  const uri = kucoinURI(baseCoin, quoteCoin);

  axios.get(uri).then((response) => {
    const data = response['data']['data'];
    const symbol = data['symbol'];
    const ratio = data[type];
    dispatch(receiveKucoinRatio(baseCoin, quoteCoin, ratio));
  });
};