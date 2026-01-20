import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"

export const ContactSection = () => {
  return (
    <div className="py-16 lg:py-24 pt-12 lg:pt-20">
      <div className="container">
        <div className="z-0 relative bg-linear-to-r from-emerald-300 to-sky-400 px-10 py-8 rounded-3xl overflow-hidden text-gray-900 md:text-left text-center">
          <div
            className="-z-10 absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex md:flex-row flex-col items-center gap-8 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="mt-2 text-sm md:text-base">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button className="inline-flex relative items-center gap-2 bg-gray-900 px-6 border border-gray-900 rounded-xl w-max h-12 text-white">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
