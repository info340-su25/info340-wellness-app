import React, { useState, useEffect } from "react";
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from "firebase/database";

export default function Streaks() {
  const [habits, setHabits] = useState([]);
  const [habitName, setHabitName] = useState("");
  const [habitDescription, setHabitDescription] = useState("");
  const [habitComment, setHabitComment] = useState("");

  function addHabit(event) {
    event.preventDefault();

    if (!habitName) {
      return;
    }

    const newHabit = {
      id: Date.now(),
      name: habitName,
      description: habitDescription,
      comment: habitComment,
      streak: 0,
      lastCompleted: null,
    };

    const db = getDatabase();
    const habitsRef = ref(db, "habits");
    firebasePush(habitsRef, newHabit);

    setHabits([{...newHabit, key: habitsRef.key,}, ...habits]);
    setHabitName("");
    setHabitDescription("");
    setHabitComment("");
  }

  function completeHabit(key) {
    setHabits(function(prevHabits) {
      return prevHabits.map((habit) => {
        if (habit.key === key) {
          const today = new Date().toDateString();
          let newStreak = habit.streak;

          if (habit.lastCompleted !== today) {
            newStreak = habit.streak + 1;
          }

          const newHabit = {
            ...habit,
            streak: newStreak,
            lastCompleted: today,
          };

          const db = getDatabase();
          const location = "habits/" + key;
          const habitRef = ref(db, location);
          firebaseSet(habitRef, newHabit);

          return newHabit;
        }
        return habit;
      })
    });
  }

  useEffect(() => {
      const db = getDatabase();
      const allHabitsRef = ref(db, "habits")
      onValue(allHabitsRef, (snapshot) => {
        const data = snapshot.val();
        const keyArr = Object.keys(data);
        const dbHabits = keyArr.map((keyString) => {
          const transformed = data[keyString]
          return {
            ...transformed,
            key: keyString,
          };
        })
        setHabits(dbHabits);
      });
    }, []);

  return (
    <div>
      <h1>Streaks and Habits Tracker</h1>
      <div className="flex-container">
        <section className="left-sect">
          <h2>Track Habits</h2>
          <form className="half_form" onSubmit={addHabit}>
            <div>
              <label htmlFor="habit_name">Habit Name:</label>
              <input
                id="habit_name"
                placeholder="Working out, Drinking 2L Water, etc."
                type="text"
                value={habitName}
                onChange={(event) => setHabitName(event.target.value)}
              />
              <label htmlFor="habit_description">Description:</label>
              <textarea
                className="form-control"
                id="description_input"
                placeholder="Description of your habit"
                value={habitDescription}
                onChange={(event) => setHabitDescription(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="comment_field">Comment:</label>
              <textarea
                className="form-control"
                id="comment_field"
                placeholder="Additional comments"
                value={habitComment}
                onChange={(event) => setHabitComment(event.target.value)}
              />
            </div>
            <button type="submit">Create New Habit</button>
          </form>
        </section>

        <section className="right-sect">
          <h2>Your Current Streaks</h2>
          {habits.map((habit) => (
            <div key={habit.key} className="habit">
              <h4>{habit.name}</h4>
              <p>{habit.description}</p>
              {habit.comment ? <p><em>{habit.comment}</em></p> : null}
              <p>Streak: {habit.streak}</p>
              <button type="submit" onClick={() => completeHabit(habit.key)}>Mark Complete</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}