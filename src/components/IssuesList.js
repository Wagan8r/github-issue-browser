import React, {Component} from 'react';
import Issue from './Issue';
import {connect} from 'react-redux';
import {refreshIssues} from '../actions/IssueActions';

class IssuesList extends Component{

    render(){
        const {issues, page, refresh, next, previous, totalPages, hasNext, hasPrevious} = this.props;
        return (
            <div className="issues-container">
                <div className="issues-header">Angular's GitHub issue browser</div>
                <div className="navigation-container">
                    <div className="navigation-buttons-container">
                        <button className="nav-btn nav-btn-left" disabled={!hasPrevious} onClick={() => previous(page)}>Previous</button>
                        <button className="nav-btn" onClick={() => refresh(page)}>Refresh</button>
                        <button className="nav-btn nav-btn-right" disabled={!hasNext} onClick={() => next(page)}>Next</button>
                    </div>
                    <div className="paging-label">page {page} of {totalPages}</div>
                </div>
                <div className="issues-list">
                    {issues.map(t => (
                        <Issue key={t.id} issue={t}/>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.get('issues'),
        page: state.get('page'),
        totalPages: state.get('totalPages'),
        hasNext: state.get('hasNext'),
        hasPrevious: state.get('hasPrevious')
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        refresh: page => dispatch(refreshIssues(page)),
        next: page => dispatch(refreshIssues(page+1)),
        previous: page => dispatch(refreshIssues(page-1))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);