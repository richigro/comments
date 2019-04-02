import React from 'react';

export default function ApprovalCard(props) {
    console.log(props.children);
    return(
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">Would you like to approve this comment?</div>
            <div className="ui two buttons">
                <button className="ui basic green button">Approve</button>
                <button className="ui basic red button">Reject</button>
            </div>
        </div>
    );
}