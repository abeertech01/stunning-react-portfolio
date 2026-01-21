import memojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image"
import ArrowDown from "@/assets/icons/arrow-down.svg"
import grainImage from "@/assets/images/grain.jpg"
import StarIcon from "@/assets/icons/star.svg"
import SparkleIcon from "@/assets/icons/sparkle.svg"
import HeroOrbit from "@/components/HeroOrbit"

export const HeroSection = () => {
  return (
    <div className="z-0 relative py-32 md:py-48 lg:py-60 overflow-x-clip">
      <div className="absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="-z-30 absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="hero-ring size-155"></div>
        <div className="hero-ring size-205"></div>
        <div className="hero-ring size-255"></div>
        <div className="hero-ring size-305"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="bg-emerald-300/20 rounded-full size-2"></div>
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="bg-emerald-300/20 rounded-full size-2"></div>
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="bg-emerald-300/20 rounded-full size-3"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-25"
            alt="Person peeking from behind laptop"
          />
          <div className="inline-flex items-center gap-4 bg-gray-950 px-4 py-1.5 border border-gray-800 rounded-lg">
            <div className="relative bg-green-500 rounded-full size-2.5">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping-large"></div>
            </div>
            <div className="font-medium text-sm">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-lg">
          <h1 className="mt-8 font-serif text-3xl md:text-5xl text-center tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-white/60 md:text-lg text-center">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your text
            project.
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 mt-8">
          <button className="inline-flex items-center gap-2 px-6 border border-white/15 rounded-xl h-12">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 bg-white px-6 border border-white rounded-xl h-12 text-gray-900">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  )
}
