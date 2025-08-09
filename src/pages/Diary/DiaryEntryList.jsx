import React from "react";
import DiaryEntry from "./DiaryEntry";

export default function DiaryEntryList(props) {

    // Add DiaryEntry Props to be sent in

    return (
        <section className="entry-section">
            <div className="entry-deck">
                <DiaryEntry />
            </div>
        </section>
    );
}