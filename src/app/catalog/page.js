"use client"
import { useState } from 'react';

function WritingCard({ title, author, snippet, fullText }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="p-6 rounded-xl shadow-lg bg-[#FDF7F2] text-[#5B3A29]">
        <h3 className="text-xl font-serif font-semibold">{title}</h3>
        <p className="text-sm text-neutral-600 italic">by {author}</p>
        <p className="mt-4 text-base text-balance">{snippet}</p>
        <button
          onClick={() => setShowModal(true)}
          className="mt-4 underline text-[#A05A2C] hover:text-[#703D1A]"
        >
          Read More
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="max-w-xl max-h-[80vh] overflow-y-auto bg-white p-6 rounded-xl shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-600 text-xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
            <p className="text-sm italic mb-4">by {author}</p>
            <p className="whitespace-pre-wrap">{fullText}</p>
          </div>
        </div>
      )}
    </>
  );
}

{/* starting with only 2 pieces of writing per section (most probs original) */}
export default function catalogPage() {
    return (
<main className="space-y-16 px-6 py-10">
  {/* Poetry Section */}
  <section>
    <h1 className="text-3xl font-bold font-serif text-center mb-6 text-[#5B3A29]">Poetry</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <WritingCard 
        title="Tear"
        author="Wistful"
        snippet="i don't know why i feel this way..."
        fullText={`i don’t know why i feel this way
all this shame and intense disarray
i don’t think i could do it
achieve all those dreams or escape from ruin


i hate myself so much
i get jealous and angry and i destroy the castles built right in front of me
i prefer to stay hidden behind walls so tall you won’t even hear my call

i don’t let anyone in and i don’t let my tears fall
i reprimand my mind for every small misstep

i tear apart the hope and turn my body to shreds
deadly thoughts swirl around in my head
i can think of nothing else

i wish this feeling would stop
but then i’d forever be alone in my head

i wish i didn’t feel so inadequate
i wish i could make things make sense
i wish i didn’t rely so much on the world's perception of me

	and i wish i knew how to live`}
      />
      <WritingCard 
        title="Whatif"
        author="Shel Silverstein"
        snippet="Last night, while I lay thinking here..."
        fullText={`Last night, while I lay thinking here,
some Whatifs crawled inside my ear
and pranced and partied all night long
and sang their same old Whatif song:
Whatif I'm dumb in school?
Whatif they've closed the swimming pool?
Whatif I get beat up?
Whatif there's poison in my cup?
Whatif I start to cry?
Whatif I get sick and die?
Whatif I flunk that test?
Whatif green hair grows on my chest?
Whatif nobody likes me?
Whatif a bolt of lightning strikes me?
Whatif I don't grow talle?
Whatif my head starts getting smaller?
Whatif the fish won't bite?
Whatif the wind tears up my kite?
Whatif they start a war?
Whatif my parents get divorced?
Whatif the bus is late?
Whatif my teeth don't grow in straight?
Whatif I tear my pants?
Whatif I never learn to dance?
Everything seems well, and then
the nighttime Whatifs strike again!`}
      />
{/* add in amanda gorman */}
    </div>
  </section>

  {/* Fiction Section */}
  <section>
    <h1 className="text-3xl font-bold font-serif text-center mb-6 text-[#5B3A29]">Fiction</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <WritingCard 
        title="Glass Echoes"
        author="Wistful"
        snippet="Echoes softly bouncing off the stone walls..."
        fullText={`Echoes softly bouncing off the stone walls. 
A silent scream ringing throughout, where only soft wisps of air escape. 
Your throat runs dry when there’s no one around to hear your cry. 
None will listen, so don’t even try.
Surveying the area, you wish to escape from all of this hysteria.
All their eyes. 
Glazed over, flickering, staring off into the distance. 
Become something you’re not.
 A face appears from the dark.
“Do you feel it too?” 
“Feel what?”
“The fleetingness of it all, the ease of just blending into these walls. But, at the same time, not wanting to be lost, because you know it’d be far too easy.” 
The helplessness in your eyes shows the truth you tried to mask with all the lies. 
The half-hearted “I’m fine’s.”
“Too easy to do what?”
“To be forgot.”
You would ask for elaboration, a further explanation, but you know very well the meaning of that statement. There’s no use denying, or even trying to hide it.
The sound that brings you back. It happens every time. That voice that keeps telling you to try. 
It says give it time, they won’t stay forever blind. 
Cracks form in the ice. Keep chipping away and watch as it begins to break. Starting small, then whole sides begin to fall. Do the same to every barrier that stands in your way. 
Though they seem so fragile, it's almost impossible to get past a see-through path, where nothing lasts. Always pushed to the back, you wonder if maybe you lack the ability to keep track.
You may never escape, but still, it tells you not to run away. These facades won’t keep you at bay. 
From the place that you wish to be at today. 
Search until your voice is finally heard.
Until you’re more than a hollowed-out shell, echoing quietly through the glass halls. 

`}
      />
      <WritingCard 
        title="Fever Dream: Prologue"
        author="Wistful"
        snippet="So that's what this whole thing has been..."
        fullText={`So that’s what this whole thing has been. 
But a pill? How can one pill ruin my entire life? How can it be the explanation for why I’ve been reliving the same pain all these years?
Who knew that a small hit to the head could bring back such an important memory? One that had been pushed to the back of my mind for years. 
Lies.
My whole world is one giant lie. The realisation comes crashing down on me like a shower of rocks. 
I’m a monster.
Deep cracks begin to form in the Earth all around me, the ground starts shaking uncontrollably. Thick tears fall fast from my eyes and sizzle as they hit the crumbling ground. I hear the screams, the shouts, the cries.
Good. 
Let them feel the same pain I was forced to feel every goddamn day of my 16 years of life. 
Let them burn. Let them suffer.  
No.
I’m not a monster. Heavy breathing.
I am NOT a monster! More screams.
IDARA AGWUEGBO, WAKE UP AND SEE! More cries.
I AM NOT A MONSTER! More death.
My body begins shaking violently, fire burns through my skin, and the Earth threatens to swallow me whole. I can’t give in. I’m not a monster. 
A sharp pain rips through my body. My scream silences the world around me, carrying pain no one should have, pain that isn’t even human. A bright flash of white. Then nothing. My whole world goes black. 
What’s broken can’t always be fixed, but we still try.  

Why…?`}
      />
    </div>
  </section>

  {/* Non-Fiction Section */}
  {/* <section>
    <h1 className="text-3xl font-bold font-serif text-center mb-6 text-[#5B3A29]">Non-Fiction</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <WritingCard 
        title=""
        author="Wistful"
        snippet="..."
        fullText={``}
      />
      <WritingCard 
        title=""
        author=""
        snippet="..."
        fullText={``}
      />
    </div>
  </section> */}
  <h2 className="text-center text-bold text-lg"> Updates coming soon</h2>
</main>
    );
}