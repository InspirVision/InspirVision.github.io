'use client'
import { useState } from 'react';

function PhotoPoemCard({ image, snippet, fullPoem, showToggle = true }) {
    const [expanded, setExpanded] = useState(false);

    const content = fullPoem || snippet;

    return (
        <div className="rounded-lg shadow hover:shadow-lg transition p-4 bg-amber-50 dark:bg-[#2e1d0e] border border-stone-200 dark:border-stone-700 shadow-md hover:shadow-lg">
            <img src={image} alt="poetry visual" className="rounded-md mb-4" />
            <p className="text-sm text-muted-foreground text-[#ffe9d6]">
                {showToggle && fullPoem ? (expanded ? fullPoem : snippet) : content}
            </p>
            {showToggle && fullPoem && (
                <button
                    className="text-xs text-blue-500 mt-2 hover:underline"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "Read Less" : "Read More"}
                </button>
            )}
        </div>
    );
}

{/* starting with only 3 images per section to deploy web */}
export default function page({image, snippet, fullPoem}) {
    return ( 
    <div className="px-4 py-10 space-y-20 transition-transform duration-200 ease-in-out"> {/* for a hover do 'hover:scale-105' */}
    {/* Section 1: Looking Glass */}
        <section>
            <h2 className="text-2xl font-semibold mb-4 text-center"> Looking Glass </h2>
            <p className="mb-6 text-muted-foreground text-center"> View the world through my eyes </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <PhotoPoemCard
                        image="/gallery/inspirvision (52).JPG"
                        showToggle={false}
                    />
                    <PhotoPoemCard
                        image="/gallery/inspirvision (48).JPG"
                        showToggle={false}
                    />
                    <PhotoPoemCard
                        image="/gallery/inspirvision (50).JPG"
                        showToggle={false}
                    />
                </div>
        </section>
<hr className="border-t border-muted my-12" />
    {/* Section 2: More Than What Meets the Eye */}
    <section>
        <h2 className="text-2xl font-semibold mb-4 text-center"> More Than What Meets the Eye </h2>
        <p className="mb-6 text-muted-foreground text-center"> Where photography and poetry merge </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* image cards in here */}
                    <PhotoPoemCard
                        image="/gallery/InspirVision4.JPG"
                        snippet="Singular: "
                        fullPoem="Singular: Drip, drop. Plop, plop. Slow down time. Really take it in. Just one particle, can shape the world we live in."
                    />
                    <PhotoPoemCard
                        image="/gallery/inspirvision (42).JPG"
                        snippet="In the dark: "
                        fullPoem="In the dark: In the dark. Or in your heart. Do you sit alone? And is it hard? On this couch. Where faith meets doubt. Do we stand strong or give in to pout?"
                    />
                    <PhotoPoemCard
                        image="/gallery/InspirVisionP2.JPG"
                        snippet="Eyes: "
                        fullPoem="Eyes: Watch me as I rise. Take in the glory but don't leave out the strife. Over the bend, down the hill. Along the ways, where my mind will still. Take me away. Drag me through. Bring it together- just me and you."
                    />
            </div>
    </section>
<hr className="border-t border-muted my-12" />
    {/* Section 3: Board Life */}
    <section>
        <h2 className="text-2xl font-semibold mb-4 text-center"> Moodboard Moments </h2>
        <p className="mb-6 text-muted-foreground text-center"> Snapshots of feelings </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* image cards in here */}
                    <PhotoPoemCard
                        image="/gallery/inspirvision (51).JPG"
                        showToggle={false}
                        snippet="Her desire to be more..Was much stronger than all those who came before"
                    />
                    <PhotoPoemCard
                        image="/gallery/inspirvision (56).JPG"
                        showToggle={false}
                        snippet="If you just give us a chance, we could hold the world in our hands."
                    />
                    <PhotoPoemCard
                        image="/gallery/InspirVision (28).JPG"
                        showToggle={false}
                        snippet="Her hands fiddled around. Searching for her crown. It must have dropped when she let her head hang down"
                    />
            </div>
    </section>
<hr className="border-t border-muted my-12" />
<h4 className="text-center text-lg"> More to come.. </h4>
    </div>
    );
}