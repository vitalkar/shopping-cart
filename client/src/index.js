import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import PropTypes from 'prop-types'
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));

// Provider.propTypes = {
//     store: PropTypes.object.isRequired
// }