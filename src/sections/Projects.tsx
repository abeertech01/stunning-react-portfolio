import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png"
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png"
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png"
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
import Image from "next/image"
import SectionHeader from "@/components/SectionHeader"
import Card from "@/components/Card"

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
]

export const ProjectsSection = () => {
  return (
    <section className="lg:py-24 pb-16">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 md:px-10 lg:px-20 pt-8 md:pt-12 lg:pt-16 pb-0"
            >
              <div className="lg:gap-16 lg:grid lg:grid-cols-2">
                <div className="lg:pb-16">
                  <div className="inline-flex gap-2 bg-clip-text bg-linear-to-r from-emerald-300 to-sky-400 font-bold text-transparent text-sm uppercase tracking-widest">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="mt-2 md:mt-5 font-serif text-2xl md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="mt-4 md:mt-5 border-white/5 border-t-2" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="flex gap-2 text-white/50 text-sm md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="inline-flex justify-center items-center gap-2 bg-white mt-8 px-6 rounded-xl w-full md:w-auto h-12 font-semibold text-gray-950">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="lg:absolute mt-8 lg:mt-0 -mb-4 md:mb-0 lg:w-auto lg:max-w-none lg:h-full"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
