import Image from "next/image";
import heroImage from "../../public/portrait.png";
import { MainDock } from "@/components/layout";
const dockItems = ["home", "work", "about", "contact", "github", "back"];

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#9ca0a3] text-[#efefef]">
      <section className="relative h-screen w-full max-w-[1600px]">
        <p className="absolute left-6 top-7 z-20 text-sm font-medium tracking-tight text-white/85 sm:left-12 sm:text-2xl">
          @ Developed by Saurabh
        </p>

        <p className="absolute right-6 top-7 z-20 max-w-1/3 text-right font-normal text-sm leading-tight text-white/75 sm:right-12 sm:text-lg">
          Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital
          experiences through modern technologies
        </p>

        <div className="absolute inset-x-0 top-[10%] z-10 flex justify-center px-6">
          <div className="relative h-[40vh] w-[min(92vw,640px)] overflow-hidden grayscale sm:h-[56vh] sm:w-[min(70vw,720px)]">
            <Image
              src= {heroImage}
              alt="Developer portrait"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        <button
          type="button"
          aria-label="Open portfolio"
          className="absolute right-[30%] top-[41%] z-20 flex h-16 w-16 items-center justify-center rounded-full border border-white/40 text-white/55 transition hover:scale-105 hover:border-white/70 hover:text-white sm:h-28 sm:w-28"
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-12 sm:w-12" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M6 18L18 6" />
            <path d="M8 6h10v10" />
          </svg>
        </button>

        <h1 className="pointer-events-none absolute bottom-[20%] left-1/2 z-20 w-full -translate-x-1/2 whitespace-nowrap text-center text-[20vw] font-semibold leading-none tracking-[-0.02em] text-white/90 sm:text-[15vw] lg:text-[14.5vw]">
          Creative Developer &
        </h1>

        <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2 rounded-2xl bg-[#151515]/95 shadow-[0_14px_30px_rgba(0,0,0,0.28)] backdrop-blur-sm">
          <MainDock />
        </div>
      </section>
    </main>
  );
}
