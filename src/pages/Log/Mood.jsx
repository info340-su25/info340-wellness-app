import { useEffect, useState } from "react";
import { getDatabase, ref, push, onValue } from "firebase/database";

export default function Mood() {
  const [form, setForm] = useState({ mood: "", notes: "" });
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);

  const db = getDatabase();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    const mood = form.mood.trim();
    const notes = form.notes.trim();

    if (!mood) {
      setError("Please enter your mood.");
      return;
    }

    const payload = { mood, notes, createdAt: Date.now() };

    push(ref(db, "mood"), payload)
      .then(() => setForm({ mood: "", notes: "" }))
      .catch((err) => setError(err.message));
  }

  useEffect(() => {
    const moodRef = ref(db, "mood");
    return onValue(moodRef, (snap) => {
      const data = snap.val() || {};
      const arr = Object.entries(data).map(([id, v]) => ({ id, ...v }));
      arr.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      setEntries(arr);
    });
  }, [db]);

  const items = entries.map((e) => {
    const date = e.createdAt ? new Date(e.createdAt).toLocaleDateString() : "";
    return (
      <li key={e.id}>
        {date && `${date}: `}
        {e.mood}
        {e.notes && ` — ${e.notes}`}
      </li>
    );
  });

  return (
    <main className="page-container">
      <h1 className="page-title">Mood</h1>

      {error && (
        <p role="alert" className="text-danger" style={{ margin: "0 1rem" }}>
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="half_form" noValidate>
        <label htmlFor="mood-mood">Mood</label>
        <input
          id="mood-mood"
          name="mood"
          type="text"
          value={form.mood}
          onChange={handleChange}
          required
          placeholder="e.g., Happy, Anxious"
        />

        <label htmlFor="mood-notes">Notes</label>
        <textarea
          id="mood-notes"
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="Anything you want to remember about today"
        />

        <button type="submit">Add</button>
      </form>

      <ul aria-live="polite">{items}</ul>
    </main>
  );
}
