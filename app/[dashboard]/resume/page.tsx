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

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Neural Network-Controlled Pac-Man Agent using PyTorch</h3>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Co-developed a neural network-based agent for the Pac-Man environment with Python, trained using backpropagation, PyTorch libraries, and evolutionary algorithms</li>
              <li>Transformed the Pac-Man game map into a numerical tensor to enable neural network processing, implementing various neural network architectures with 2-3 hidden layers and Long Short-Term Memory (LSTM) for sequential data handling</li>
              <li>Employed PyTorchs DataLoader, Dataset, and torch.nn packages for model development, with dropout regularization to prevent overfitting</li>
              <li>Utilized cross-entropy loss function and Adam optimizer for training, performing backpropagation to minimize prediction errors</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Unity 3D Platformer Game ‘RELiC’</h3>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Co-developed a 3D action-adventure game featuring platforming, puzzles, and combat across variable planets and ancient ruins</li>
              <li>Implemented a custom gravity system in C# to support unique planet gravitational mechanics, allowing players to explore small planetoids</li>
              <li>Developed enemy AI, player functionality, and UI elements including combat mechanics, HUD, and a final boss encoun</li>
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
              <li>Created individualized government work packages containing individual craft data using HTML.</li>
              <li>Oversaw and maintained progress tracking systems for LCAC Command, Control, Communications, Computers, and Navigation (C4N).</li>
            </ul>

            <h3 className="text-xl font-semibold">Pump Engineering Co-op - Abiomed, Inc.</h3>
            <p>Danvers, MA (July 2016 - December 2016)</p>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Provided valuable testing results during DFMEA investigations of Impella Pump system that helped resolve new failure mode analysis.</li>
              <li>Designed a custom-fit attachment for compatibility between pump system and Keyence microscope.</li>
              <li>Created detailed procedure on operation of new lab hardware for in-house instructional purposes including Scanning Electron Microscope.</li>
            </ul>

            <h3 className="text-xl font-semibold">Systems Engineering Co-op - Lytron, Inc.</h3>
            <p>Woburn, MA (June 2015 - December 2015)</p>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Led a team in testing of new vital components after unexpected vendor obsolescence.</li>
              <li>Suggested design improvements to refrigeration system that helped reduce cost of production by half.</li>
              <li>Altered designs of pump systems and user interface using machine shop to improve performance and increase testing efficiency.</li>
            </ul>

            <h3 className="text-xl font-semibold">Mechanical Engineering Co-op - NxSTAGE Medical, Inc.</h3>
            <p>Lawrence, MA (June 2014 - December 2014)</p>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Designed test systems and followed procedures to verify consistency of and investigate variability with use of System One Dialysis machine.</li>
              <li>Compiled results of testing, lab reports, and procedural documents into a company-wide database using a digital Data Acquisition System.</li>
              <li>Altered circuit system to bypass internal restrictions in order to collect data for machines running at extreme temperatures and flow rates.</li>
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
          href="/dashboard/projects"
        >
          Projects
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/dashboard/contact"
        >
          Contact Me →
        </a>
      </footer>
    </div>
  );
}
