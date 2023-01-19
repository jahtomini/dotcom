import { Head } from "$fresh/runtime.ts";
import { GitHubIcon, LinkedInIcon } from "../components/SVGs.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <title>Jahtomini's Internet Spot</title>
      </Head>
      <div className="w-full h-screen flex flex-col items-center justify-center font-serif">
        <div className="w-full flex items-center text-center flex-col justify-center">
          <h1 className="text-2xl lg:text-4xl lg:mb-3">
            Jahtomini's internet spot.
          </h1>
          <span className="mt-2 font-italic">Coming soon.</span>

          <div class="flex gap-3 mt-10">
            <a href="https://github.com/jahtomini">
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/jahtomini">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <a className="mt-8" href="https://fresh.deno.dev">
          <img
            width="131"
            height="12"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
      </div>
    </>
  );
}
