"use client";


import Navbar from "@/app/site/navbar";

//Page for displaying Resume
//Currently features an embedded Google Doc, but I would like to change it to natively display the information
//Should have a back button and a link to navigate to the other pages
//Testing new styles
export default function Resume() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-purple-600 to-black text-white font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg mt-10">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Robert Collins</h1>
          <p className="text-lg mt-2">Brooklyn, NY | robertcollins1107@gmail.com | (781) 941-0196</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Skills</h2>
          <p><strong>Languages:</strong> Java, Javascript, Typescript, HTML, CSS, Python3, C, C#</p>
          <p><strong>Technologies:</strong> React, Next.js, Node.js, Android Studio, Git, Unity, Anaconda, Lensa, Jira</p>
          <p><strong>Modeling Tools:</strong> SolidWorks, AutoCAD</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Education</h2>
          <p><strong>Master of Science - Computer Science</strong></p>
          <p>Northeastern University, Portland, ME (August 2024)</p>
          <p className="mt-2"><strong>Bachelor of Science - Mechanical Engineering</strong></p>
          <p>Northeastern University, Boston, MA (May 2017)</p>
          <p className="mt-2"><strong>Relevant Classes:</strong> Machine Learning, Mobile App Design, Artificial Intelligence, Software Engineering, Object-Oriented Design, Data Structures, Algorithms, Cybersecurity</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Projects</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Next.js Web Application with API Interactivity</h3>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Co-created a multi-page interactive website for a national non-profit organizations annual competition.</li>
              <li>Implemented MongoDB API connectivity for storing and displaying data.</li>
              <li>Utilized HTML, CSS, and TypeScript to design and update the user interface based on customer feedback.</li>
              <li>Collaborated with a team of ten engineers using Git, Microsoft Teams, Lensa, and Jira.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Professional Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Mechanical Engineer - Alion Science & Technology</h3>
            <p>Boston, MA (June 2017 - January 2020)</p>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Validated installation of mechanical and electrical systems onboard Navy hovercrafts (LCAC100).</li>
              <li>Updated technical drawings using AutoCAD and SolidWorks.</li>
              <li>Oversaw and maintained progress tracking systems for LCAC Command, Control, Communications, Computers, and Navigation (C4N).</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center mt-10 p-6 bg-gray-900">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
        >
          Home
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/projects"
        >
          Projects
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
        >
          Contact Me →
        </a>
      </footer>
    </div>
  );
}
