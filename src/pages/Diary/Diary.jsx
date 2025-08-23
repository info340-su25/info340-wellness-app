import React, { useState, useEffect } from "react";
import DiaryEntryForm from "./DiaryEntryForm";
import DiaryEntryList from "./DiaryEntryList";
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from "firebase/database";

export default function Diary() {
  const [entries, setEntries] = useState([]);
  const [diaryTitle, setDiaryTitle] = useState('');
  const [diaryContent, setDiaryContent] = useState([]);

  function diaryElementsCallback(diaryTitle, diaryContent) {
    setDiaryTitle(diaryTitle);
    setDiaryContent(diaryContent);
    let newEntry = {
      title: diaryTitle,
      content: diaryContent,
      date: new Date().toLocaleDateString(),
      datetime: new Date().toISOString()
    }
    setEntries([newEntry, ...entries]);
    const db = getDatabase();
    const messageRef = ref(db, "diary/entries");
    firebasePush(messageRef, newEntry);
  }

  // const db = getDatabase();
  // const messageRef = ref(db, "diaryEntry");
  // firebaseSet(messageRef, "hello")


  useEffect(() => {
    const db = getDatabase();
    const allEntriesRef = ref(db, "diary/entries")
    onValue(allEntriesRef, (snapshot) => {
      const data = snapshot.val();
      const keyArr = Object.keys(data);
      const newArr = keyArr.map((keyString) => {
        const transformed = data[keyString]
        return transformed;
      })
      setEntries(newArr);
    });
  }, []);

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
          <DiaryEntryList entries={entries}/>
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
