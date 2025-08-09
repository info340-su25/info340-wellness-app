import React from 'react';
import { NavLink } from 'react-router';

export default function LogMenu() {
    return(
        <>
            <h1>Log</h1>
            <section id="log-menu">
                <h2>Select a category to log</h2>
                <div className="log-grid">
                    <NavLink to="/Log/Sleep" className="log-card">Sleep</NavLink>
                    
                    {/* <a href="log-diet.html" className="log-card">
                        <span className="material-icons" aria-hidden="true">restaurant</span>
                        Diet
                    </a> */}
                    <NavLink to="/Log/Diet" className="log-card">Diet</NavLink>

                    {/* <a href="log-exercise.html" className="log-card">
                        <span className="material-icons" aria-hidden="true">fitness_center</span>
                        Exercise
                    </a> */}
                    <NavLink to="/Log/Exercise" className="log-card">Exercise</NavLink>
                    {/* <a href="log-mood.html" className="log-card">
                        <span className="material-icons" aria-hidden="true">self_improvement</span>
                        Mood
                    </a> */}
                    <NavLink to="/Log/Mood" className="log-card">Mood</NavLink>
                </div>
            </section>
        </>
    );
}