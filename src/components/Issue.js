import React, {Component} from 'react';

export default class Issue extends Component{

    render(){
        const {issue} = this.props;
        const reporter = issue ? issue.user.login : '';

        return (
            <div className="issue-container">
                <div>{issue.number} - {issue.title}</div>
                <div>Reported by {reporter} state:{issue.state}</div>
            </div>
        );
    }
}