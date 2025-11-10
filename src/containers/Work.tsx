import Heading from "../components/Heading";

const Work = () => {
  const text =
    "Excited to team up with fellow developers! From building slick interfaces to crafting smooth, interractive experiencess, I'm all ears\u2014let's make something awesome togeter";
  return (
    <section className="py-16" id="work">
      <Heading title="Sold Yet?" emoji="🤙🏽" />
      <p
        style={{ color: "var(--color-text-muted)" }}
        className="mt-6  leading-relaxed"
      >
        {text}
      </p>
    </section>
  );
};

export default Work;
