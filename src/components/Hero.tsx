export default function Hero() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
  
        <div className="text-[#1a2a44] mb-8">
  
        <h1 className="text-7xl text-[#1a2a44] [font-family:var(--font-great-vibes)]">
                Joshua & Kaila
                </h1>
  
          <p className="text-xl mt-4">
            Feburary 22nd, 2027
          </p>
  
          <p className="text-lg">
            Ricks Place,  33904 East 111th St S, Coweta, OK 74429
          </p>
  
        </div>
  
        <div className="max-w-3xl w-full">
  
          <img
            src="/img/hero.jpg"
            alt="Joshua and Kiala"
            className="w-full rounded-lg shadow-lg"
          />
  
        </div>
  
      </section>
    );
  }