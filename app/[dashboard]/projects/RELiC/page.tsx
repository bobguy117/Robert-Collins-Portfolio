"use client";

import Image from "next/image";
import Navbar from "@/app/site/navbar";

//Page for displaying Relic Project
//Ideally will include video demo and link to the playable game
//Should have a back button and a link to navigate to the other pages
export default function ProjectRelic() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <iframe
          src="https://drive.google.com/file/d/1KQpNxF3FfDfFExcksf3xrfpw2lowWxDy/preview"
          width="640"
          height="480"
          allow="autoplay"
          className="rounded-lg shadow-md"
        ></iframe>
        {/* Buttons Section */}
        <div className="flex flex-col items-center justify-center gap-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://play.unity.com/en/games/1be32d07-fcf5-47b3-9301-84a7b87e613c/relic-gold-master-release"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Play it now!
          </a>
        </div>
        {/* Links Section */}
        <div className="text-center mt-4">
          <a
            href="https://github.com/bobguy117/Robert-Collins-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Portfolio Website
          </a>
          <br />
          <a
            href="https://github.com/bobguy117/cs5100_Final_Kanku_Collins_Wu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            Pac-Man NN
          </a>
          <br />
          <a
            href="mailto:robertcollins1107@gmail.com"
            className="text-red-600 hover:underline"
          >
            RELiC
          </a>
        </div>
      </main>
      {/* Footer */}
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
