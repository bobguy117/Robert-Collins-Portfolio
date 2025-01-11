"use client";

import Image from "next/image";
import Navbar from "./site/navbar";

//Home page for start of navigation
//Ideally will include buttons to access other pages
//Header and footer?
//Currently no difference between this and contact page, but i would like there to be a distinvtion
//Should have a back button and a link to navigate to the other pages
export default function Home() {
  
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <Image
        className="dark:invert rounded-full"
        src="/images/headshot.jpg"
        alt="Headshot"
        width={180}
        height={180}
        priority
        />
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <a
            href="https://www.linkedin.com/in/robert-collins-4348b7154/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <br />
          <a
            href="https://github.com/bobguy117"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            GitHub
          </a>
          <br />
          <a
            href="mailto:robertcollins1107@gmail.com"
            className="text-red-600 hover:underline"
          >
            Email
          </a>
        </div>
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
          Learn
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
          Examples
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
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
