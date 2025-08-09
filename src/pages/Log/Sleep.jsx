import React from 'react';

export default function Sleep() {
    return(
        <>
            <h1>Log Your Sleep</h1>
            <form>
                <label for="sleep-hours">Hours Slept</label>
                <input
                type="number"
                id="sleep-hours"
                name="sleep-hours"
                placeholder="e.g. 7.5"
                step="0.1"
                />

                <label for="bedtime">Bedtime</label>
                <input type="time" id="bedtime" name="bedtime" />

                <label for="wake-time">Wake-up Time</label>
                <input type="time" id="wake-time" name="wake-time" />

                <label for="sleep-quality">Sleep Quality</label>
                <select id="sleep-quality" name="sleep-quality">
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
                <option>Poor</option>
                </select>

                <label for="sleep-notes">Notes</label>
                <textarea
                id="sleep-notes"
                name="sleep-notes"
                placeholder="Additional details..."
                ></textarea>

                <label for="sleep-date">Date</label>
                <input type="date" id="sleep-date" name="sleep-date" />

                <button type="submit">Save Sleep Log</button>
                <NavLink to="/Log" className="button">Back</NavLink>
            </form>
        </>
    );
}