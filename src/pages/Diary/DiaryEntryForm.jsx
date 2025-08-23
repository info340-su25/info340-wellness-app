import React, { useState } from "react";
import { Alert } from 'react-bootstrap';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from "firebase/database";

export default function DiaryEntryForm(props) {
  const [diaryTitle, setDiaryTitle] = useState('');
  const [diaryContent, setDiaryContent] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setDiaryTitle(newTitle);
  }

  function handleContentChange(event) {
    const newContent = event.target.value;
    setDiaryContent(newContent);
  }

  return (
    <>
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
            onClick={(event) => {
              event.preventDefault();
              props.applyDiaryElementsCallback(diaryTitle, diaryContent, setAlertMessage);
              setDiaryTitle('');
              setDiaryContent('');
            }}
          >
            Add Entry
          </button>
        </form>
        {alertMessage &&
          <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>{alertMessage}</Alert>
        }
      </section>
    </>
  );
}
