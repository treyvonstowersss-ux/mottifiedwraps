export default function App() {
  return (
    <div className="text-center">
      <header className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-800">
        <img
          src="/images/hero/hero.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <h1 className="relative text-5xl font-bold text-white drop-shadow-lg">
          Mottified Wraps
        </h1>
        <p className="relative mt-4 text-lg text-gray-300">
          Custom vehicle wraps & vinyl signage
        </p>
      </header>

      {/* Gallery Section */}
      <section className="py-16 bg-black">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {['wrap1.jpg', 'wrap2.jpg', 'wrap3.jpg'].map((file, i) => (
            <div key={i} className="aspect-video overflow-hidden rounded-lg border border-gray-700">
              <img
                src={`/images/gallery/${file}`}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer className="py-8 bg-gray-900 text-gray-300">
        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
        <p>(541) 337-2746 • mottifiedwraps@gmail.com</p>
        <p>550 Shelly St STE A, Springfield, OR 97477</p>
      </footer>
    </div>
  )
}
