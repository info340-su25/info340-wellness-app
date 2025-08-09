import { useState } from "react";

export default function Sleep() {
  const [form, setForm] = useState({ hours: "", quality: "" });
  const [entries, setEntries] = useState([]);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setEntries([{ id: Date.now(), ...form }, ...entries]);
    setForm({ hours: "", quality: "" });
  }

  return (
    <main>
      <h1>Sleep</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Hours
          <input name="hours" value={form.hours} onChange={handleChange} />
        </label>
        <label>
          Quality (1-5)
          <input name="quality" value={form.quality} onChange={handleChange} />
        </label>
        <button>Add</button>
      </form>

      <ul>
        {entries.map((e) => (
          <li key={e.id}>
            {e.hours}h — quality {e.quality}
          </li>
        ))}
      </ul>
    </main>
  );
}
