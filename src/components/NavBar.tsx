import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md">

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-2 px-4 py-4 text-[#1a2a44] font-semibold text-sm md:text-base">

        <Link href="/" className="hover:opacity-70 transition">
          Home
        </Link>

        <Link href="/story" className="hover:opacity-70 transition">
          Our Story
        </Link>

        <Link href="/schedule" className="hover:opacity-70 transition">
          Schedule
        </Link>

        <Link href="/wedding-party" className="hover:opacity-70 transition">
          Wedding Party
        </Link>

        <Link href="/registry" className="hover:opacity-70 transition">
          Registry
        </Link>

        <Link href="/rsvp" className="hover:opacity-70 transition">
          RSVP
        </Link>

      </div>

    </nav>
  );
}