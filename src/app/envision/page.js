import ScrollSection from "../components/ScrollSection";

// lets get into it
export default function EnvisionPage() {
  return (
    <main className="space-y-24 pt-12">
      {/* Chapter 1 */}
      <section className="px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-10 text-center md:text-left">
          Chapter 1: Life Could Be a Dream
        </h2>
        <ScrollSection
          imageSrc="/envision/photo1.webp"
          quote="Shall we walk through this wonderland together? This is a photograph by Peter Lik."
        />
        <ScrollSection
          imageSrc="/envision/art1.webp"
          quote="When you're with someone you love, you learn to get comfortable even in your pain. This is 'The Kiss' by Gustav Klimt."
          reverse
        />
      </section>

      {/* Chapter 2 */}
      <section className="px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-10 text-center md:text-left">
          Chapter 2: Or so it Seems
        </h2>
        <ScrollSection
          imageSrc="/envision/photo2.webp"
          quote="An Echo, a Cave, just a Wisp of air. This piece speaks beautifully to the world and despair. This is 'Ghost' by Peter Lik."
        />
        <ScrollSection
          imageSrc="/envision/art2.webp"
          quote="Even shadows carry echoes if you listen long enough. This is 'American Gothic' by Grant Wood."
          reverse
        />
      </section>

      {/* Chapter 3 */}
      <section className="px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-10 text-center md:text-left">
          Chapter 3: And I Scream
        </h2>
        <ScrollSection
          imageSrc="/envision/photo3.jpg"
          quote="Like a waterfall. Life will flow. Falling into an endless abyss, you don't have to carry all of it."
        />
        <ScrollSection
          imageSrc="/envision/art3.webp"
          quote="Sometimes, it's okay to just let it all out. Even if it feels like we're broken, the first step to healing is breaking down.
          That is 'The Scream' by Edvard Munch"
          reverse
        />
      </section>
    </main>
  );
}
