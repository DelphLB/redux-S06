import { connect } from 'react-redux';

import { fetchArticles } from './actionsCreators';
import App from './App';

const mapStateToProps = ({ areArticlesBeingFetched }) => ({
  areArticlesBeingFetched,
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: fetchArticles(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
