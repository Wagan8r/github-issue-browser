import {List, Map} from 'immutable'
import {REFRESH_REQUESTED, REFRESH_SUCCESS, REFRESH_FAILURE} from '../actions/IssueActions';

const initial = List([]);

export default function(issues=initial, action){
    switch(action.type){
        case REFRESH_SUCCESS:
            return action.issues;
        default:
            return issues;
    }
}