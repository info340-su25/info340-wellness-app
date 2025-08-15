import Card from "../../components/Card";
import { LOG_CATEGORIES } from "../../data/sampleData";

export default function LogMenu() {
  const categoryCards = LOG_CATEGORIES.map((cat) => (
    <Card key={cat.to} to={cat.to} icon={cat.icon}>
      {cat.label}
    </Card>
  ));

  return (
    <div>
      <h1>Log</h1>
      <section id="log-menu">
        <h2>Select a category to log</h2>
        <div className="log-grid">{categoryCards}</div>
      </section>
    </div>
  );
}
