import React from 'react';
import {render} from 'react-dom';
import IssuesList from './components/IssuesList';

const dummyIssues = [
    {id: 1, number: 1001, title: 'An amazing bug 1', body: 'No seriously. Amazing.', state: 'open'},
    {id: 2, number: 1002, title: 'An amazing bug 2', body: 'No seriously. Amazing.', state: 'open'},
    {id: 3, number: 1003, title: 'An amazing bug 3', body: 'No seriously. Amazing.', state: 'open'},
    {id: 4, number: 1004, title: 'An amazing bug 4', body: 'No seriously. Amazing.', state: 'open'},
    {id: 5, number: 1005, title: 'An amazing bug 5', body: 'No seriously. Amazing.', state: 'open'}
];

let rootElement = document.getElementById('app');

render(
    <IssuesList issues={dummyIssues}/>,
    rootElement
);