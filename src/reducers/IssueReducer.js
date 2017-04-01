import {List, Map} from 'immutable'
import {REFRESH_REQUESTED, REFRESH_SUCCESS, REFRESH_FAILURE} from '../actions/IssueActions';

const initial = Map({
    issues: List([]),
    page: 1
});

export default function(state=initial, action){
    switch(action.type){
        case REFRESH_SUCCESS:
            return state.update('issues', oldValue => List(action.issues));
        default:
            return state;
    }
}