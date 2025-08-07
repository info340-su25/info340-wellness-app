import React from 'react';

export default function LogMenu() {
    return(
        <>
            <h1>Log</h1>
            <section id="log-menu">
                <h2>Select a category to log</h2>

                <div className="log-grid">
                <a href="log-sleep.html" className="log-card">
                    <span className="material-icons" aria-hidden="true">hotel</span>
                    Sleep
                </a>

                <a href="log-diet.html" className="log-card">
                    <span className="material-icons" aria-hidden="true">restaurant</span>
                    Diet
                </a>

                <a href="log-exercise.html" className="log-card">
                    <span className="material-icons" aria-hidden="true">fitness_center</span>
                    Exercise
                </a>

                <a href="log-mood.html" className="log-card">
                    <span className="material-icons" aria-hidden="true">self_improvement</span>
                    Mood
                </a>
                </div>
            </section>
        </>
    );
}