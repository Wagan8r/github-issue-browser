import React, {Component} from 'react';

export default class Issue extends Component{

    render(){
        const {issue} = this.props;
        const reporter = issue ? issue.user.login : '';

        return (
            <table className="issue-container">
                <tr>
                    <td className="issue-stripe" rowSpan="3"></td>
                    <td className="issue-title">{issue.number} - {issue.title}</td>
                    <td className="status-label">{issue.state}</td>
                </tr>
                <tr>
                    <td className="user-label" colSpan="2">reported by {reporter}</td>
                </tr>
                <tr>
                    <td className="detail-label" colSpan="2">
                        <div className="detail-left">Updated on {issue.updated_at}</div>
                        <div className="detail-right">Created on {issue.created_at}</div>
                        <div className="last-detail-item"></div>
                    </td>
                </tr>
            </table>
        );
    }
}
