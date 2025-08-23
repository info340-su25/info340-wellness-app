import React from "react";

function DiaryEntry({entry}) {
  const title = entry.title;
  const datetime = entry.datetime;
  const date = entry.date;
  const content = entry.content;

  return (
    <div className="entry">
      <h3>{title}</h3>
      <time dateTime={datetime}>{date}</time>
      <p>{content}</p>
    </div>
  );
}


export default function DiaryEntryList(props) {
      let entryList = props.entries.map((entry) => {
        return <DiaryEntry key={entry.title} entry={entry} />;
      })

    return (
        <section className="entry-section">
            <div className="entry-deck">
                {entryList}
            </div>
        </section>
    );
}