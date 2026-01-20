const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component
  return (
    <>
      <Component className="fill-[url(#tech-icon-gradient)] size-10" />
      <svg className="absolute size-0">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="oklch(84.5% 0.143 164.978)" />
          <stop offset="100%" stopColor="oklch(74.6% 0.16 232.661)" />
        </linearGradient>
      </svg>
    </>
  )
}

// how svg part works ↓
/**
 * 1. The SVG's Role: The "Invisible Reference"
 * The <svg> element has the class absolute size-0. This makes it completely invisible to the user, but it still exists in the DOM.
 * It acts as a container for the <linearGradient>. Because it is in the DOM, any other element on the page can "look inside" it to find an ID.
 *
 * 2. <linearGradient>: The Paint Recipe
 * How it's used: In your icon, you have fill-[url(#tech-icon-gradient)]. This tells the icon: "Don't use a solid color; go find the element with this ID and use its gradient as my fill."
 *
 * 3. <stop> elements: The Color Transition Points
 * The <stop> elements define which colors are in the gradient and where they sit.
 * offset: This tells the gradient where a color starts or ends on a scale of 0% to 100%.
 *--- offset="0%" is the very beginning of the gradient (usually the top or left).
 *--- offset="100%" is the very end.
 * stopColor: This is the actual color value. You are using oklch, which is a modern CSS color format that handles gradients much more smoothly than HEX or RGB without getting "gray/muddy" in the middle.
 */

export default TechIcon
