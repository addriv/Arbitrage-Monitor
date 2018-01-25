import { connect } from 'react-redux';
import Kucoin from './Kucoin';
import { fetchKucoinRatio } from '../../actions/intra/intra_kucoin_actions';
import { kucoinPairsSelector } from '../../selectors/kucoin_selectors';

// state = {
//   arbitrage: {
//     intra: {
//      kucoin: {
//       ratios: {
//         BTCPairs: {
//           'ETH-BTC': null,
//           'NEO-BTC': null,
//           'KCS-BTC': null,
//           'BCH-BTC': null
//         },
//         NEOPairs: {
//           'DBC-NEO': null
//         }
//       },
//       vehicles: [
//         'DBC',
//         'RPX'
//       ]
//      } 
//     }
//   },
//   ui: null
// }

const mapStateToProps = (state) => ({
  intraKucoin: state.arbitrage.intra.kucoin,
  BTCPairs: kucoinPairsSelector(state, 'BTC'),
  NEOPairs: kucoinPairsSelector(state, 'NEO')
});

const mapDispatchToProps = (dispatch) => ({
  fetchKucoinRatio: (baseCoin, quoteCoin, type) => {
    dispatch(fetchKucoinRatio(baseCoin, quoteCoin, type));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Kucoin);