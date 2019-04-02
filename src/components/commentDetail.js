import React from 'react';

export default function CommentDeatil(props) {
    return(
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={props.avatar} alt={props.author} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.date}</span>
                    </div>
                    <div className="text">{props.content}</div>
                </div>
            </div>            
    );
}