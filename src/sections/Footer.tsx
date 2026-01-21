import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"

const footerLinks = [
  {
    title: "YouTube",
    href: "#",
  },
  {
    title: "Twitter",
    href: "#",
  },
  {
    title: "Instagram",
    href: "#",
  },
  {
    title: "Linkedin",
    href: "#",
  },
]

export const Footer = () => {
  return (
    <footer className="-z-10 relative overflow-clip">
      <div className="bottom-0 left-1/2 -z-10 absolute bg-emerald-300/30 w-400 h-100 -translate-x-1/2 mask-[radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="flex md:flex-row flex-col md:justify-between items-center gap-8 py-6 border-white/15 border-t text-sm">
          <div className="text-white/40">
            &copy; 2024. All the rights reserved.
          </div>
          <nav className="flex md:flex-row flex-col items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href="#"
                key={link.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
