import React from 'react';
import { NavLink } from 'react-router';

export default function Diet() {
    return(
        <>
            <h1>Log Your Diet</h1>
            <form>
                <label for="meal-type">Meal Type</label>
                <select id="meal-type" name="meal-type">
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snack</option>
                </select>

                <label for="foods">Foods Eaten</label>
                <textarea
                id="foods"
                name="foods"
                placeholder="List what you ate..."
                ></textarea>

                <label for="calories">Calories</label>
                <input
                type="number"
                id="calories"
                name="calories"
                placeholder="e.g. 450"
                />

                <label for="diet-date">Date & Time</label>
                <input type="datetime-local" id="diet-date" name="diet-date" />

                <button type="submit">Save Diet Log</button>
                <NavLink to="/Log" className="button">Back</NavLink>
            </form>
        </>
    );
}