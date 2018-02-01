import {connect} from 'react-redux';
import PortfolioTable from './PortfolioTable';

const mapStateToProps = (state) => ({assets: state.assets});

const mapDispatchToProps = (dispatch) => ({});


const ShowPortfolio = connect(
    mapStateToProps,
    mapDispatchToProps
  )(PortfolioTable);
  
  export default ShowPortfolio;