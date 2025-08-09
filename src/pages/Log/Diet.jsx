import { useState } from "react";

export default function Diet() {
  const [form, setForm] = useState({ meal: "", calories: "" });
  const [entries, setEntries] = useState([]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEntries([{ id: Date.now(), ...form }, ...entries]);
    setForm({ meal: "", calories: "" });
  }

  return (
    <main>
      <h1>Diet</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Meal
          <input name="meal" value={form.meal} onChange={handleChange} />
        </label>
        <label>
          Calories
          <input
            name="calories"
            value={form.calories}
            onChange={handleChange}
          />
        </label>
        <button>Add</button>
      </form>

      <ul>
        {entries.map((e) => (
          <li key={e.id}>
            {e.meal} — {e.calories} kcal
          </li>
        ))}
      </ul>
    </main>
  );
}
