import React from 'react';

export default function Streaks() {


    return (
        <>
            <h1>Streaks and Habits Tracker</h1>
            <div className="flex-container">
            <section className="left-sect">
                <h2>Track Habits</h2>
                <form className="half_form">
                <div>
                    <label for="habit_name">Habit Name:</label> 
                    <input id="habit_name" placeholder="Working out, Drinking 2L Water, etc." type="text" name="habit"></input>
                    <label for="habit_description">Description:</label>
                    <textarea className="form-control" id="description_input" placeholder = "Description of your habit" name="description"></textarea>
                </div>
                <div>
                    <label for="comment_field">Comment:</label>
                    <textarea className="form-control" id="comment_field" placeholder = "Additional comments" name="comment"></textarea>
                </div>
                <button type="submit">Create New Habit</button>
                </form>
            </section>

            <section className="right-sect">
                <h2>Your current Streaks</h2>
                <p className="streak">1</p>
            </section>
            </div>
        </>
    );
}