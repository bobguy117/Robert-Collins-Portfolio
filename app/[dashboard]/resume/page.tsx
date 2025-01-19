"use client";

import Image from "next/image";
import Navbar from "@/app/site/navbar";

//Page for displaying Resume
//Currently features an embedded Google Doc, but I would like to change it to natively display the information
//Should have a back button and a link to navigate to the other pages
//Testing new styles
export default function Resume() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <main>
        <iframe
          src="https://docs.google.com/document/d/1T0dq5XRH6Jbh6TBQH20IaoX5rp_gH6l3HzIHakNdVW8/preview"
          height="600px"
          width="100%"
          title="My Resume"
          style={{ border: "none" }}
        ></iframe>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Home
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Projects
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Contact Me →
        </a>
      </footer>
    </div>
  );
}
