export default function TunesPage() {
  return (
    <main className="space-y-24 pt-12 px-4 md:px-16">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-2xl md:text-5xl font-serif font-semibold">Tunes for you, handpickded like cherries</h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          A playlist for dreaming, healing, raging, and dancing.
        </p>
      </section>

      {/* Playlist Section */}
      <section className="space-y-12">
        {/* Spotify Playlist Embed */}
        <div className="w-full flex justify-center">
          <iframe
            src="https://open.spotify.com/embed/playlist/0Ap74mcldHXUscQ6yQnAaM?utm_source=generator"
            width="100%"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl max-w-2xl w-full"
          />
        </div>
                <div className="w-full flex justify-center">
          <iframe
            src="https://open.spotify.com/embed/playlist/44yWAaVdhpDkrXNwaPEzQa?utm_source=generator"
            width="100%"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl max-w-2xl w-full"
          />
        </div>
        {/* commentary/favs */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-xl font-semibold mb-2">A few of my favorites:</h2>
          <ul className="text-base space-y-1 text-muted-foreground">
            <li> <em>“Survive”</em> – Lewis Capaldi: for that inconsolable pain</li>
            <li> <em>“Lonely”</em> – Noah Cyrus: like sitting on the street under the rain</li>
            <li> <em>“Vienna”</em> – Billy Joel: reassurance & comfort; it can't all be done in a day</li>
            {/* Add more as you go on */}
          </ul>
        </div>
      </section>

      {/* Original Music (pending section) */}
      <section className="space-y-4 text-center">
        <h2 className="text-3xl font-serif font-semibold">Original Tracks</h2>
        <p className="text-base text-muted-foreground max-w-xl mx-auto">
          My heart in sound — coming soon. 🎧
        </p>

        {/* Placeholder cards for original songs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="border rounded-xl p-4 shadow-sm">
            <h3 className="text-lg font-semibold">"Connections" (pending)</h3>
            <p className="text-sm text-muted-foreground">Raw. Introspective. Written in one go.</p>
          </div>
          <div className="border rounded-xl p-4 shadow-sm">
            <h3 className="text-lg font-semibold">"In the Past" (pending)</h3>
            <p className="text-sm text-muted-foreground">A nostaligc piece reflecting on youth and opportunity.</p>
          </div>
          {/* add more as ideas come to mind*/}
        </div>
      </section>

      {/* link to Spotify profile */}
      <p className="text-center text-sm text-muted-foreground mt-12">
  More playlists coming soon.{" "}
  <a
    href="https://open.spotify.com/user/31xpy6hm2wdiphaotdqik5fgr3gi"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-primary"
  >
    Follow me on Spotify
  </a>{" "}
</p>
    </main>
  );
}
