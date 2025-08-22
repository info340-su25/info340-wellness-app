import React, { useState } from "react";

export default function DiaryEntryForm(props) {
  const [diaryTitle, setDiaryTitle] = useState(null);
  const [diaryContent, setDiaryContent] = useState(null);

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setDiaryTitle(newTitle);
  }

  function handleContentChange(event) {
    const newContent = event.target.value;
    setDiaryContent(newContent);
  }

  return (
    <section className="form-section">
      <form className="diary-form">
        <h2 className="text-small">Create an Entry</h2>
        <label htmlFor="entry-title">Title</label>
        <input
          type="text"
          id="entry-title"
          name="title"
          value={diaryTitle}
          onChange={handleTitleChange}
        ></input>
        <label htmlFor="entry-content">Entry</label>
        <textarea
          id="entry-content"
          name="content"
          value={diaryContent}
          onChange={handleContentChange}
        ></textarea>
        <button
          type="submit"
          aria-label="Submit"
          onClick={() => {
            props.applyDiaryElementsCallback(diaryTitle, diaryContent);
          }}
        >
          Add Entry
        </button>
      </form>
    </section>
  );
}
