import {connect} from 'react-redux';
import Asset from '../components/Asset';


const mapStateToProps = (state) => ({
    asset: state.asset
});

const mapDispatchToProps = (dispatch) => ({
    
});


const ShowAsset = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Asset);
  
export default ShowAsset;