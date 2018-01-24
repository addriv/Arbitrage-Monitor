import axios from 'axios';
import { kucoinURI } from '../../util/kucoin_api_util';

export const RECEIVE_RATIO = 'RECEIVE_RATIO';

const receiveRatio = (baseCoin, quoteCoin, ratio) => ({
  type: RECEIVE_RATIO,
  baseCoin,
  quoteCoin,
  ratio
});

// type = 'buy' or 'sell'
export const fetchRatio = (baseCoin, quoteCoin, type) => dispatch => {
  const uri = kucoinURI(baseCoin, quoteCoin);

  axios.get(uri).then((response) => {
    const ratio = response['data']['data'][type];
    dispatch(receiveRatio(baseCoin, quoteCoin, ratio));
  });
};