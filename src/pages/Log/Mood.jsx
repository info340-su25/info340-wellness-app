import { useState } from "react";

export default function Mood() {
  const [form, setForm] = useState({ mood: "", notes: "" });
  const [entries, setEntries] = useState([]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEntries([{ id: Date.now(), ...form }, ...entries]);
    setForm({ mood: "", notes: "" });
  }

  return (
    <main>
      <h1>Mood</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Mood
          <input name="mood" value={form.mood} onChange={handleChange} />
        </label>
        <label>
          Notes
          <input name="notes" value={form.notes} onChange={handleChange} />
        </label>
        <button>Add</button>
      </form>

      <ul>
        {entries.map((e) => (
          <li key={e.id}>
            {e.mood}
            {e.notes ? ` — ${e.notes}` : ""}
          </li>
        ))}
      </ul>
    </main>
  );
}
