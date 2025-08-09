export default function Home() {
  const ELEMENTS = [
    { src: "/img/diet.jpg", alt: "Colorful healthy meal", label: "Diet" },
    { src: "/img/exercise.jpg", alt: "Person exercising", label: "Exercise" },
    { src: "/img/sleep.jpg", alt: "Cozy bed", label: "Sleep" },
  ];

  return (
    <div>
      <h1>Welcome to the HuskyHealth Tracker!</h1>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          We care about your health! Let us work with you to design the perfect
          health plan so you can live your best life.
        </p>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>We combine three health elements:</p>

        <div className="elements">
          {ELEMENTS.map((el) => (
            <div className="element" key={el.label}>
              <img src={el.src} alt={el.alt} />
              <p>{el.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
