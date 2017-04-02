import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import IssuesList from './components/IssuesList';
import IssueReducer from './reducers/IssueReducer';
import {refreshIssues} from './actions/IssueActions';
import styles from './css/App.css';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

let store = createStoreWithMiddleware(IssueReducer);
store.dispatch(refreshIssues(1));

let rootElement = document.getElementById('app');

render(
    <Provider store={store}>
        <IssuesList/>
    </Provider>,
    rootElement
);