export default function SectionHeader({
  title,
  eyebrow,
  description,
}: {
  title: string
  eyebrow: string
  description: string
}) {
  return (
    <>
      <div className="flex justify-center">
        <p className="bg-clip-text bg-linear-to-r from-emerald-300 to-sky-400 font-semibold text-transparent uppercase tracking-widest">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-6 font-serif text-3xl md:text-5xl text-center">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-md text-white/60 md:text-lg lg:text-lg text-center">
        {description}
      </p>
    </>
  )
}
