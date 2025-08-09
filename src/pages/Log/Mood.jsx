import React from 'react';
import { NavLink } from 'react-router';

export default function Mood() {
    return(
        <>
            <h1>Log Your Mood</h1>
            <form>
                <label for="mood-rating">Mood Rating (1-10)</label>
                <input
                type="number"
                id="mood-rating"
                name="mood-rating"
                min="1"
                max="10"
                placeholder="e.g. 7"
                />

                <label for="mood-description">Mood Description</label>
                <input
                type="text"
                id="mood-description"
                name="mood-description"
                placeholder="e.g. Happy, stressed, relaxed"
                />

                <label for="mood-notes">Notes</label>
                <textarea
                id="mood-notes"
                name="mood-notes"
                placeholder="Additional details about how you feel..."
                ></textarea>

                <label for="mood-date">Date & Time</label>
                <input type="datetime-local" id="mood-date" name="mood-date" />

                <button type="submit">Save Mood Log</button>
                <NavLink to="/log" className="button">Back</NavLink>
            </form>
        </>
    );
}