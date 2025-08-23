import { useState, useEffect } from "react";
import { getDatabase, ref, push, onValue } from "firebase/database";

export default function Sleep() {
  const [form, setForm] = useState({ hours: "", quality: "" });
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

    const hours = Number(form.hours);
    const quality = form.quality === "" ? null : Number(form.quality);
    if (Number.isNaN(hours)) {
      setError("Please enter hours of sleep.");
      return;
    }

    const payload = {
      hours,
      quality,
      createdAt: Date.now(),
    };

    push(ref(db, "sleep"), payload)
      .then(() => setForm({ hours: "", quality: "" }))
      .catch((err) => setError(err.message));
  }

  useEffect(() => {
    const sleepRef = ref(db, "sleep");
    return onValue(sleepRef, (snap) => {
      const data = snap.val() || {};
      const arr = Object.entries(data).map(([id, v]) => ({ id, ...v }));
      arr.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      setEntries(arr);
    });
  }, [db]);

  return (
    <main className="page-container">
      <h1 className="page-title">Sleep</h1>

      {error && (
        <p role="alert" className="text-danger" style={{ margin: "0 1rem" }}>
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="half_form" noValidate>
        <label htmlFor="sleep-hours">Hours</label>
        <input
          id="sleep-hours"
          name="hours"
          type="number"
          inputMode="numeric"
          min={0}
          max={24}
          step="0.25"
          value={form.hours}
          onChange={handleChange}
          required
        />

        <label htmlFor="sleep-quality">Quality (1-5)</label>
        <input
          id="sleep-quality"
          name="quality"
          type="number"
          inputMode="numeric"
          min={1}
          max={5}
          step="1"
          value={form.quality}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>

      <ul aria-live="polite">
        {entries.map((e) => {
          const date = e.createdAt
            ? new Date(e.createdAt).toLocaleDateString()
            : "";
          return (
            <li key={e.id}>
              {date && `${date}: `}
              {e.hours}h {e.quality != null && `(q${e.quality})`}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
