import React, {Component} from 'react';
import Issue from './Issue'

export default class IssuesList extends Component{

    render(){
        const {issues} = this.props;
        return (
            <div className="issues-container">
                <div className="issues-list">
                    {issues.map(t => (
                        <Issue issue={t}/>
                    ))}
                </div>
            </div>
        )
    }
}