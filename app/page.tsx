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

function TitleCard() {
  return (
    <div className="relative bg-cover bg-fixed h-screen w-full  flex flex-col items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.5)),url(./images/web-background.jpg)]">
      <h1 className="font-title text-8xl! text-white text-center mb-6">Henri Goosen</h1>
      <p className="absolute top-1/2 mt-20 w-lg p-5 rounded-lg text-center bg-background/80">
        Hello, I&apos;m Henri, an aspiring software developer with leadership experience as a resident assistant and 
        technical skills from projects and my involvement in Purdue&apos;s CubeSat lab. Adept in Java, C/C++, and Python.
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <TitleCard />
      <div className="p-5">
        <Projects />
      </div>
    </div>
  );
}
