import { connect } from 'react-redux';
import OmniFAB from '../components/OmniFAB';
import { clickOmni } from '../actions'

const mapStateToProps = (state) => ({
    active: state.omni_button
});

const mapDispatchToProps = (dispatch) => ({
    onButtonClick: () => {
        dispatch(clickOmni())
    }
}
);


const FAB = connect(
    mapStateToProps,
    mapDispatchToProps
)(OmniFAB);

export default FAB;