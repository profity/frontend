import {connect} from 'react-redux';
import Asset from '../components/Asset';

const test = () => {
    console.log('test');
}
const mapStateToProps = (state) => ({asset: state.asset});

const mapDispatchToProps = (dispatch) => ({
    onTest:test
});


const ShowAsset = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Asset);
  
export default ShowAsset;