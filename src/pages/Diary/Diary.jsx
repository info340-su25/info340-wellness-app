import React, { useState } from "react";
import DiaryEntryForm from "./DiaryEntryForm";

export default function Diary() {
  const [diaryTitle, setDiaryTitle] = useState(null);
  const [diaryContent, setDiaryContent] = useState(null);

  function diaryElementsCallback(diaryTitle, diaryContent) {
    setDiaryTitle(diaryTitle);
    setDiaryContent(diaryContent);
  }

  return (
    <>
      <header>
        <div>
          <h1>Diary</h1>
          <p>The place to keep daily personal notes and updates</p>
        </div>
      </header>

      <div className="card-deck">
        <DiaryEntryForm applyDiaryElementsCallback={diaryElementsCallback} />

        <section className="entry-section">
          <div className="entry-deck">
            <div className="entry">
              <h3>Morning Walk</h3>
              <time dateTime="2025-07-13">July 13, 2025</time>
              <p>Walked around the neighborhood</p>
            </div>
            <div className="entry">
              <h3>Late Night Workout</h3>
              <time dateTime="2025-07-14">July 14, 2025</time>
              <p>Went to the gym late and worked out</p>
            </div>
          </div>
        </section>

        <section className="calender-section">
          <div className="calender">
            <h2>July 2025</h2>
          </div>
        </section>
      </div>
    </>
  );
}
