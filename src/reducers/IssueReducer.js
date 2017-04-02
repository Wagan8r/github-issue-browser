import {List, Map} from 'immutable'
import {REFRESH_REQUESTED, REFRESH_SUCCESS, REFRESH_FAILURE} from '../actions/IssueActions';

const initial = Map({
    issues: List([]),
    page: 1,
    dayOffset: 7
});

export default function(state=initial, action){
    switch(action.type){
        case REFRESH_SUCCESS:
            let updates = Map({
                issues: List(action.issues),
                page: action.page,
                hasNext: action.hasNext,
                hasPrevious: action.hasPrevious,
                totalPages: action.totalPages
            });
            return state.merge(updates);
        default:
            return state;
    }
}