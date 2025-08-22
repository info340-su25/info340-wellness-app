import { useEffect, useState } from "react";
import { getDatabase, ref, push, onValue } from "firebase/database";

export default function Exercise() {
  const [form, setForm] = useState({ activity: "", minutes: "" });
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

    const activity = form.activity.trim();
    const minutes = form.minutes === "" ? null : Number(form.minutes);

    if (!activity) {
      setError("Please enter an activity.");
      return;
    }
    if (minutes != null && (Number.isNaN(minutes) || minutes < 0)) {
      setError("Minutes must be a non-negative number.");
      return;
    }

    const payload = { activity, minutes, createdAt: Date.now() };

    push(ref(db, "exercise"), payload)
      .then(() => setForm({ activity: "", minutes: "" }))
      .catch((err) => setError(err.message));
  }

  useEffect(() => {
    const exRef = ref(db, "exercise");
    return onValue(exRef, (snap) => {
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
        {e.activity}
        {e.minutes != null && ` — ${e.minutes} min`}
      </li>
    );
  });

  return (
    <main>
      <h1>Exercise</h1>

      {error && (
        <p role="alert" className="text-danger" style={{ margin: "0 1rem" }}>
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="half_form" noValidate>
        <label htmlFor="ex-activity">Activity</label>
        <input
          id="ex-activity"
          name="activity"
          type="text"
          value={form.activity}
          onChange={handleChange}
          required
          placeholder="e.g., Run, Lifting"
        />

        <label htmlFor="ex-minutes">Minutes</label>
        <input
          id="ex-minutes"
          name="minutes"
          type="number"
          inputMode="numeric"
          min={0}
          step={1}
          value={form.minutes}
          onChange={handleChange}
          placeholder="e.g., 30"
        />

        <button type="submit">Add</button>
      </form>

      <ul aria-live="polite">{items}</ul>
    </main>
  );
}
