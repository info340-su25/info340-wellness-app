import Card from "../../components/Card";
import { LOG_CATEGORIES } from "../../data/sampleData";

export default function LogMenu() {
  return (
    <>
      <h1>Log</h1>
      <section id="log-menu">
        <h2>Select a category to log</h2>
        <div className="log-grid">
          {LOG_CATEGORIES.map((cat) => (
            <Card key={cat.to} to={cat.to} icon={cat.icon}>
              {cat.label}
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
