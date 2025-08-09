import { useState } from "react";

export default function Exercise() {
  const [form, setForm] = useState({ activity: "", minutes: "" });
  const [entries, setEntries] = useState([]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEntries([{ id: Date.now(), ...form }, ...entries]);
    setForm({ activity: "", minutes: "" });
  }

  return (
    <main>
      <h1>Exercise</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Activity
          <input
            name="activity"
            value={form.activity}
            onChange={handleChange}
          />
        </label>
        <label>
          Minutes
          <input name="minutes" value={form.minutes} onChange={handleChange} />
        </label>
        <button>Add</button>
      </form>

      <ul>
        {entries.map((e) => (
          <li key={e.id}>
            {e.activity} — {e.minutes} min
          </li>
        ))}
      </ul>
    </main>
  );
}
