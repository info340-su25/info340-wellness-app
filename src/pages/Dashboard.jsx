import React from 'react';

export default function Dashboard() {
    return (
        <>
            <h1>Welcome to the HuskyHealth Tracker!</h1>
            <section id="about-us">
                <div className="text">
                    <h2>About Us</h2>
                    <p>We care about your health! Let us work with you to design the perfect health plan so you can live your best life.</p>
                </div>
            </section>

            <section id="how-it-works">
                <div className="text">
                    <h2>How It Works</h2>
                    <p>We combine three health elements:</p>
                </div>

                <div className="elements">
                    <div className="element">
                        <img src="../img/diet.jpg" alt="Healthy meal"></img>
                        <p>Diet</p>
                    </div>
                    <div className="element">
                        <img src="../img/exercise.jpg" alt="Healthy meal"></img>
                        <p>Exercise</p>
                    </div>
                    <div className="element">
                        <img src="../img/sleep.jpg" alt="Healthy meal"></img>
                        <p>Sleep</p>
                    </div>
                </div>
            </section>
        </>
    );
}