import grainImage from "@/assets/images/grain.jpg"
import { twMerge } from "tailwind-merge"
export default function Card({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={twMerge(
        "z-0 after:z-10 after:absolute relative after:inset-0 bg-gray-800 rounded-3xl after:rounded-3xl after:outline-2 after:outline-white/20 after:-outline-offset-2 overflow-hidden after:content-[''] after:pointer-events-none",
        className,
      )}
    >
      <div
        className="-z-10 absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  )
}
// till 2:31:23
