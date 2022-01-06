import { Meteor } from 'meteor/meteor';
import React, { useState } from "react";


export const DiscussionForm = ({ user }) => {
    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (!text) return;

        Meteor.call('discussions.insert', text, user.emails[0].address);

        setText("");
    }
    return (
        <form className="discussion-form" onSubmit={handleSubmit}>
            <textarea
                type="text"
                placeholder="Add a discussion post"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button type="submit">Add Discussion</button>
        </form>
    )
}