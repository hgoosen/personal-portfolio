function Project({ title, desc } : { title: string, desc: string }) {
  return (
    <div className="bg-(--highlight)">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <Project title={"Budget Tracker"} desc={"C-based program that uses CLI input to manage a budget."} />
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <h1>Henri Goosen</h1>
      <Projects />
    </div>
  );
}
