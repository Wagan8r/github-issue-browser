import Axios from 'axios';

export const REFRESH_REQUESTED = 'REFRESH_REQUESTED';
export const REFRESH_SUCCESS = 'REFRESH_SUCCESS';
export const REFRESH_FAILURE = 'REFRESH_FAILURE';

const ISSUES_URL = 'https://api.github.com/repos/angular/angular/issues';

export function refreshRequested(){
    return {
        type: REFRESH_REQUESTED
    };
}

export function refreshSuccess(data){
    return {
        type: REFRESH_SUCCESS,
        issues: data
    };
}

export function refreshFailure(data){
    return {
        type: REFRESH_FAILURE,
        message: data
    };
}

export function refreshIssues(){

    return dispatch => {
        dispatch(refreshRequested());

        return Axios.get(ISSUES_URL)
            .then(response => {
                dispatch(refreshSuccess(response.data));
            })
            .catch(error => {
                dispatch(refreshFailure(error));
            });
    }
}