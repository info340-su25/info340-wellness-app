import React, { useState } from "react";

export default function Streaks() {
  const [streak, setStreak] = useState(0);

  return (
    <div>
      <h1>Streaks and Habits Tracker</h1>
      <div className="flex-container">
        <section className="left-sect">
          <h2>Track Habits</h2>
          <form className="half_form">
            <div>
              <label htmlFor="habit_name">Habit Name:</label>
              <input
                id="habit_name"
                placeholder="Working out, Drinking 2L Water, etc."
                type="text"
                name="habit"
              ></input>
              <label htmlFor="habit_description">Description:</label>
              <textarea
                className="form-control"
                id="description_input"
                placeholder="Description of your habit"
                name="description"
              ></textarea>
            </div>
            <div>
              <label htmlFor="comment_field">Comment:</label>
              <textarea
                className="form-control"
                id="comment_field"
                placeholder="Additional comments"
                name="comment"
              ></textarea>
            </div>
            <button type="submit">Create New Habit</button>
          </form>
        </section>

        <section className="right-sect">
          <h2>Your current Streaks</h2>
          <p className="streak">{streak}</p>
        </section>
      </div>
    </div>
  );
}
