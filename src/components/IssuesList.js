import React, {Component} from 'react';
import Issue from './Issue';
import {connect} from 'react-redux';
import {refreshIssues} from '../actions/IssueActions';

class IssuesList extends Component{

    render(){
        const {issues, refresh} = this.props;
        return (
            <div className="issues-container">
                <button onClick={()=> refresh()}>Refresh</button>
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
        issues: state.get('issues')
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        refresh: () => dispatch(refreshIssues())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);