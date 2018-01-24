import axios from 'axios';
import { kucoinURI } from '../util/kucoin_api_util';

export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';

// type = 'buy' or 'sell'
export const fetchBuyQuote = (baseCoin, quoteCoin, type) => dispatch => {
  const uri = kucoinURI(baseCoin, quoteCoin);

  axios.get(uri).then((response) => {
    const ratio = response['data']['data'][type];
  });
};








// import * as accountUtil from '../util/account_util';
// import { fetchTeams } from './navigation_actions';

// export const RECEIVE_NEW_TEAM = 'RECEIVE_NEW_TEAM';

// const receiveNewTeam = team => ({
//   type: RECEIVE_NEW_TEAM,
//   team
// }
// );

// export const createTeam = team => dispatch => {
//   const ajax = accountUtil.createTeam(team);

//   ajax
//     .then(
//     (response) => {
//       dispatch(receiveNewTeam(response));
//     }
//     );
//   return ajax;
// };

// export const leaveTeam = team => dispatch => {
//   accountUtil.leaveTeam(team).then(
//     (response) => {
//       dispatch(fetchTeams());
//     }
//   );
// };
