"use client"

import ChromeIcon from "@/assets/icons/chrome.svg"
import CssIcon from "@/assets/icons/css3.svg"
import GithubIcon from "@/assets/icons/github.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import ReactIcon from "@/assets/icons/react.svg"
import JavascriptIcon from "@/assets/icons/square-js.svg"
import bookImage from "@/assets/images/book-cover.png"
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import Card from "@/components/Card"
import CardHeader from "@/components/CardHeader"
import SectionHeader from "@/components/SectionHeader"
import ToolboxItems from "@/components/ToolboxItems"
import Image from "next/image"
import * as motion from "motion/react-client"
import { useRef } from "react"

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    let: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null)

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My world"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="flex flex-col gap-8 mt-20">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="md:col-span-2 lg:col-span-1 h-80">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="mx-auto mt-2 md:mt-0 w-40">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="md:col-span-3 lg:col-span-2 h-80">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="flex flex-col md:col-span-3 lg:col-span-2 p-0 h-80">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex absolute items-center gap-2 bg-linear-to-r from-emerald-300 to-sky-400 px-6 py-1.5 rounded-full"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="relative md:col-span-2 lg:col-span-1 p-0 h-80">
              <Image
                src={mapImage}
                alt="map"
                className="w-full h-full object-cover object-top-left"
              />
              <div className="top-1/2 left-1/2 absolute after:absolute after:inset-0 rounded-full after:rounded-full after:outline-2 after:outline-gray-950/30 after:-outline-offset-2 size-20 after:content-[''] -translate-x-1/2 -translate-y-1/2">
                <div className="-z-20 absolute inset-0 bg-linear-to-r from-emerald-300 to-sky-400 rounded-full animate-ping [animation-duration:2s]"></div>
                <div className="-z-10 absolute inset-0 bg-linear-to-r from-emerald-300 to-sky-400 rounded-full"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
