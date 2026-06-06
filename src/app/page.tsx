
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/landing.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="text-white text-2xl font-bold tracking-wide">
          🎸 GuitarFi
        </div>
 
        <Link
          href="/app"
          className="
            rounded-full
            bg-white
            px-6 py-3
            text-sm
            font-semibold
            text-black
            transition
            hover:scale-105
          "
        >
          Launch App
        </Link>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[85vh] items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-none
              text-white
              drop-shadow-xl
            "
          >
            Play.
            <br />
            Earn.
            <br />
            Own.
          </h1>

          <p
            className="
              mt-8
              text-lg
              md:text-xl
              text-white/80
              max-w-2xl
              mx-auto
            "
          >
            The SocialFi & GameFi Hub built on Celo.
            Stake, play games, earn rewards and unlock
            exclusive utilities with Guitar Token.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/app"
              className="
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-purple-500
                px-8
                py-4
                text-white
                font-semibold
                shadow-xl
                transition
                hover:scale-105
              "
            >
              Launch App →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

