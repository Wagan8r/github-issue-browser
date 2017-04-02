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

export function refreshSuccess(data, linkHeader, currentPage){
    let links = linkHeader.split(',');
    let hasNext = false;
    let hasPrevious = false;
    let totalPages = currentPage;
    links.forEach(link => {
        if(link.search('rel="next"') > -1){
            hasNext = true;
        }
        if(link.search('rel="prev"') > -1){
            hasPrevious = true;
        }
        if(link.search('rel="last"') > -1){
            let matches = link.match(/page=\d+/);
            if(matches.length === 1){
                let match = matches[0];
                let start = match.indexOf('=')+1;
                totalPages = parseInt(match.substring(start, match.length))
            }
        }
    });
    return {
        type: REFRESH_SUCCESS,
        issues: data,
        page: currentPage,
        hasNext: hasNext,
        hasPrevious: hasPrevious,
        totalPages: totalPages
    };
}

export function refreshFailure(data){
    return {
        type: REFRESH_FAILURE,
        message: data
    };
}

export function refreshIssues(page){

    return dispatch => {
        dispatch(refreshRequested());

        let config = {
            params: {
                page: page,
                sort: 'updated'
            }
        };

        return Axios.get(ISSUES_URL, config)
            .then(response => {
                dispatch(refreshSuccess(response.data, response.headers.link, page));
            })
            .catch(error => {
                dispatch(refreshFailure(error));
            });
    }
}