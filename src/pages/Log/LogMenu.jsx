import Card from "../../components/Card";

export default function LogMenu() {
  return (
    <div>
      <h1>Log</h1>
      <section id="log-menu">
        <h2>Select a category to log</h2>

        <div className="log-grid">
          <Card to="sleep" icon="hotel">
            Sleep
          </Card>
          <Card to="diet" icon="restaurant">
            Diet
          </Card>
          <Card to="exercise" icon="fitness_center">
            Exercise
          </Card>
          <Card to="mood" icon="self_improvement">
            Mood
          </Card>
        </div>
      </section>
    </div>
  );
}
