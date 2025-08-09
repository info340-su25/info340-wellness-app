import React from 'react';
import { NavLink } from 'react-router';

export default function Exercise() {
    return(
        <>
            <h1>Log Your Exercise</h1>
            <form>
                <label for="exercise-type">Exercise Type</label>
                <input
                type="text"
                id="exercise-type"
                name="exercise-type"
                placeholder="e.g. Running, Yoga"
                />

                <label for="duration">Duration (minutes)</label>
                <input
                type="number"
                id="duration"
                name="duration"
                placeholder="e.g. 30"
                />

                <label for="intensity">Intensity</label>
                <select id="intensity" name="intensity">
                <option>Low</option>
                <option>Moderate</option>
                <option>High</option>
                </select>

                <label for="exercise-notes">Notes</label>
                <textarea
                id="exercise-notes"
                name="exercise-notes"
                placeholder="Additional details..."
                ></textarea>

                <label for="exercise-date">Date & Time</label>
                <input type="datetime-local" id="exercise-date" name="exercise-date" />

                <button type="submit">Save Exercise Log</button>
                <NavLink to="/log" className="button">Back</NavLink>
            </form>
        </>
    );
}