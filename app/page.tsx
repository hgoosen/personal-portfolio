function Project({ title, desc } : { title: string, desc: string }) {
  return (
    <div className="bg-(--highlight) rounded-md p-3 m-3 w-xs ">
      <h3 className="mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="border border-(--shadow) rounded-md p-px m-3">
        <Project title={"Budget Tracker"} desc={"C-based program that uses CLI input to manage a budget."} />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <h1 className="font-title text-6xl! text-center">Henri Goosen</h1>
      <Projects />
    </div>
  );
}
