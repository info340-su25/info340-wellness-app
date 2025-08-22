import { useEffect, useState } from "react";
import { getDatabase, ref, push, onValue } from "firebase/database";

export default function Diet() {
  const [form, setForm] = useState({ meal: "", calories: "" });
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

    const meal = form.meal.trim();
    const calories = form.calories === "" ? null : Number(form.calories);

    if (!meal) {
      setError("Please enter a meal or food description.");
      return;
    }
    if (calories != null && Number.isNaN(calories)) {
      setError("Calories must be a number.");
      return;
    }

    const payload = { meal, calories, createdAt: Date.now() };

    push(ref(db, "diet"), payload)
      .then(() => setForm({ meal: "", calories: "" }))
      .catch((err) => setError(err.message));
  }

  useEffect(() => {
    const dietRef = ref(db, "diet");
    return onValue(dietRef, (snap) => {
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
        {e.meal}
        {e.calories != null && ` — ${e.calories} cal`}
      </li>
    );
  });

  return (
    <main>
      <h1>Diet</h1>

      {error && (
        <p role="alert" className="text-danger" style={{ margin: "0 1rem" }}>
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="half_form" noValidate>
        <label htmlFor="diet-meal">Meal / Food</label>
        <input
          id="diet-meal"
          name="meal"
          type="text"
          value={form.meal}
          onChange={handleChange}
          required
          placeholder="e.g., Chicken bowl"
        />

        <label htmlFor="diet-calories">Calories</label>
        <input
          id="diet-calories"
          name="calories"
          type="number"
          inputMode="numeric"
          min={0}
          step={1}
          value={form.calories}
          onChange={handleChange}
          placeholder="e.g., 650"
        />

        <button type="submit">Add</button>
      </form>

      <ul aria-live="polite">{items}</ul>
    </main>
  );
}
