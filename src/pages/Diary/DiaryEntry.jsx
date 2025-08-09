import React from "react";

export default function DiaryEntry(props) {

    const title = props.title;
    const datetime = props.datetime
    const date = props.date;
    const content = props.content;

    return (
        <div className="entry">
            <h3>{title}</h3>
            <time datetime={datetime}>{date}</time>
            <p>{content}</p>
        </div>
    );
}