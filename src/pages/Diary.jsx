import React from 'react';

export default function Diary() {
    return (
        <>
            <header>
                <div>
                    <h1>Diary</h1>
                    <p>The place to keep daily personal notes and updates</p>
                </div>
            </header>

            <div className="card-deck">
                <section className="form-section">
                    <form className="diary-form">
                    <h2 className="text-small">Create an Entry</h2>
                    <label for="entry-title">Title</label><input type="text" id="entry-title" name="title"></input>
                    <label for="entry-content">Entry</label><textarea id="entry-content" name="content"></textarea>
                    <button type="submit" aria-label="Submit">Add Entry</button>
                    </form>
                </section>

                <section className="entry-section">
                    <div className="entry-deck">
                    <div className="entry">
                        <h3>Morning Walk</h3>
                        <time datetime="2025-07-13">July 13, 2025</time>
                        <p>Walked around the neighborhood</p>
                    </div>
                    <div className="entry">
                        <h3>Late Night Workout</h3>
                        <time datetime="2025-07-14">July 14, 2025</time>
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