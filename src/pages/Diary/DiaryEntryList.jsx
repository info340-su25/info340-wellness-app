import React from "react";

function DiaryEntry({entry, removeEntry}) {
  const title = entry.title;
  const datetime = entry.datetime;
  const date = entry.date;
  const content = entry.content;
  const key = entry.firebaseKey;

  return (
    <div className="entry">
      <h3>{title}</h3>
      <time dateTime={datetime}>{date}</time>
      <p>{content}</p>
      <button className="remove-btn" onClick={() => removeEntry(key)}>x</button>
    </div>
  );
}


export default function DiaryEntryList(props) {
      let entryList = props.entries.map((entry) => {
        return <DiaryEntry key={entry.firebaseKey} entry={entry} removeEntry={props.removeEntry} />;
      })

    return (
        <section className="entry-section">
            <div className="entry-deck">
                {entryList}
            </div>
        </section>
    );
}