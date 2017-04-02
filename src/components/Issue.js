import React, {Component} from 'react';

export default class Issue extends Component{

    render(){
        const {issue} = this.props;
        const reporter = issue ? issue.user.login : '';
        const assignee = issue && issue.assignee ? issue.assignee.login : 'nobody';

        return (
            <table className="issue-container">
                <tr>
                    <td className="issue-stripe" rowSpan="4"></td>
                    <a className="issue-title" href={issue.html_url} target="_blank">{issue.number} - {issue.title}</a>
                    <td className="status-label">{issue.state}</td>
                </tr>
                <tr>
                    <td className="user-label" colSpan="2">
                        <div className="detail-left">assigned to {assignee}</div>
                        <div className="detail-right">reported by {reporter}</div>
                        <div className="last-detail-item"></div>
                    </td>
                </tr>
                <tr>
                    <td className="detail-label" colSpan="2">
                        <div className="detail-left">Updated on {issue.updated_at}</div>
                        <div className="detail-right">Created on {issue.created_at}</div>
                        <div className="last-detail-item"></div>
                    </td>
                </tr>
                <tr>
                    <td className="issue-body" colSpan={2}>{issue.body}</td>
                </tr>
            </table>
        );
    }
}
