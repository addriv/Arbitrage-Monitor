import { connect } from 'react-redux';
import Kucoin from './Kucoin';
import { fetchKucoinRatio } from '../../actions/intra/intra_kucoin_actions';

// state = {
//   arbitrage: {
//     intra: {
//      kucoin: {
//        BTCPairs: {
//          'ETH-BTC': null,
//          'NEO-BTC': null,
//          'KCS-BTC': null,
//          'BCH-BTC': null
//        },
//        ArbitragePairs: {

//        }
//      } 
//     }
//   },
//   ui: null
// }

const mapStateToProps = (state) => ({
  intraKucoin: state.arbitrage.intra.kucoin
});

const mapDispatchToProps = (dispatch) => ({
  fetchKucoinRatio: (baseCoin, quoteCoin, type) => {
    dispatch(fetchKucoinRatio(baseCoin, quoteCoin, type));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Kucoin);