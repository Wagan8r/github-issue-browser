import React, {Component} from 'react';

export default class Issue extends Component{

    render(){
        const {issue} = this.props;

        return (
            <div className="issue-container">
                <div>{issue.number} - {issue.title}</div>
                <div>{issue.body} state:{issue.state}</div>
            </div>
        );
    }
}