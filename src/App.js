import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import IssuesList from './components/IssuesList';
import IssueReducer from './reducers/IssueReducer';
import {Provider} from 'react-redux';

let store = createStore(IssueReducer);

let rootElement = document.getElementById('app');

render(
    <Provider store={store}>
        <IssuesList/>
    </Provider>,
    rootElement
);