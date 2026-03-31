export default function WeddingParty() {
    return (
      <section className="max-w-6xl mx-auto px-6 md:px-10 text-center">
  
        <h1 className="text-4xl md:text-5xl mb-10 [font-family:var(--font-great-vibes)]">
          Wedding Party
        </h1>
  
        <h2 className="text-2xl md:text-3xl mb-8 [font-family:var(--font-great-vibes)]">
          Bridesmaids
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
  
          <div className="flex flex-col items-center">
            <img
              src="/img/person1.jpg"
              alt="Jacey Parker"
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold">Jacey Parker</h3>
            <p className="text-sm italic mb-2">Maid of honor</p>
          </div>
  
          <div className="flex flex-col items-center">
            <img
              src="/img/person2.jpg"
              alt="Kimberly Turner"
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold">Kimberly Turner</h3>
            <p className="text-sm italic mb-2">Juinor maid of honor</p>
          </div>
  
          <div className="flex flex-col items-center">
            <img
              src="/img/person3.jpg"
              alt="Delaney McDonald"
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold">Delaney McDonald</h3>
            <p className="text-sm italic mb-2">Bridesmaid</p>
          </div>
  
        </div>
  
        <h2 className="text-2xl md:text-3xl mb-8 [font-family:var(--font-great-vibes)]">
          Groomsmen
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
  
          <div className="flex flex-col items-center">
            <img
              src="/img/groomsman1.jpg"
              alt="Max Sharpnack"
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold">Max Sharpnack</h3>
            <p className="text-sm italic mb-2">Best man</p>
          </div>
  
          <div className="flex flex-col items-center">
            <img
              src="/img/groomsman2.jpg"
              alt="Gunner Ramey"
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold">Gunner Ramey</h3>
            <p className="text-sm italic mb-2">Groomsman</p>
          </div>
  
          <div className="flex flex-col items-center">
            <img
              src="/img/groomsman4.jpg"
              alt="Thomas Wilson"
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold">Thomas Wilson</h3>
            <p className="text-sm italic mb-2">Groomsman</p>
          </div>
  
        </div>
  
      </section>
    );
  }