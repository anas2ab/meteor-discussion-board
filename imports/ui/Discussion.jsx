import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const Discussion = ({ discussion }) => {
    
    return (
        <div className="discussion">
            <h3>{discussion.text}</h3>
            <small>
            posted by {discussion.email},
            {formatDistanceToNow(discussion.createdAt, { addSuffix: true })}
            </small>
        </div>
    );
}