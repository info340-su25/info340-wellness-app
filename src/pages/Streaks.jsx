import React, { useState } from "react";

export default function Streaks() {
  const [habits, setHabits] = useState([]);
  const [habitName, setHabitName] = useState("");
  const [habitDescription, setHabitDescription] = useState("");
  const [habitComment, setHabitComment] = useState("");

  function addHabit(event) {
    event.preventDefault();

    const newHabit = {
      id: Date.now(),
      name: habitName,
      description: habitDescription,
      comment: habitComment,
      streak: 0,
      lastCompleted: null,
    };

    setHabits([newHabit, ...habits]);
    setHabitName("");
    setHabitDescription("");
    setHabitComment("");
  }

  function completeHabit(id) {
    setHabits(function(prevHabits) {
      return prevHabits.map((habit) => {
        if (habit.id === id) {
          const today = new Date().toDateString();
          let newStreak = habit.streak;

          if (habit.lastCompleted !== today) {
            newStreak = habit.streak + 1;
          }

          return {
            ...habit,
            streak: newStreak,
            lastCompleted: today,
          };
        }
        return habit;
      })
    });
  }

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
            <div key={habit.id} className="habit">
              <h4>{habit.name}</h4>
              <p>{habit.description}</p>
              {habit.comment ? <p><em>{habit.comment}</em></p> : null}
              <p>Streak: {habit.streak}</p>
              <button type="submit" onClick={() => completeHabit(habit.id)}>Mark Completed Today</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}