import {List, Map} from 'immutable'

// const initial = List([]);

const initial = List([
    {id: 1, number: 1001, title: 'An amazing bug 1', body: 'No seriously. Amazing.', state: 'open'},
    {id: 2, number: 1002, title: 'An amazing bug 2', body: 'No seriously. Amazing.', state: 'open'},
    {id: 3, number: 1003, title: 'An amazing bug 3', body: 'No seriously. Amazing.', state: 'closed'},
    {id: 4, number: 1004, title: 'An amazing bug 4', body: 'No seriously. Amazing.', state: 'open'},
    {id: 5, number: 1005, title: 'An amazing bug 5', body: 'No seriously. Amazing.', state: 'open'}
]);

export default function(issues=initial, action){
    switch(action.type){
        default:
            return issues;
    }
}