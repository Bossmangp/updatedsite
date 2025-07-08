import React from 'react';

export default function DJGeeWebsite() {
  return (
    <div className="bg-black text-white font-sans">
      <header className="p-4 text-center bg-gradient-to-r from-purple-800 to-blue-600">
        <h1 className="text-4xl font-bold">DJ Gee</h1>
        <p className="text-lg italic">Bringing the Beat to Every Bash!</p>
      </header>

      <nav className="flex justify-center gap-4 p-2 bg-gray-900 text-sm">
        <a href="#about" className="hover:text-purple-400">About</a>
        <a href="#services" className="hover:text-purple-400">Services</a>
        <a href="#gallery" className="hover:text-purple-400">Gallery</a>
        <a href="#reviews" className="hover:text-purple-400">Reviews</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
        <a href="/contract" className="hover:text-purple-400">Contract</a>
      </nav>

      <section id="about" className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">About DJ Gee</h2>
        <p className="max-w-2xl mx-auto">
          With years of experience turning parties into unforgettable nights, DJ Gee of G & R Entertainment LLC brings energy, style, and unmatched vibes to every event.
        </p>
      </section>

      <section id="services" className="p-8 bg-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-900 p-4 rounded-xl shadow">DJ Performance</div>
          <div className="bg-gray-900 p-4 rounded-xl shadow">MC Hosting</div>
          <div className="bg-gray-900 p-4 rounded-xl shadow">Lighting Packages</div>
          <div className="bg-gray-900 p-4 rounded-xl shadow">Karaoke Services</div>
          <div className="bg-gray-900 p-4 rounded-xl shadow">Just Music (No Mic)</div>
        </div>
      </section>

      <section id="gallery" className="p-8">
        <h2 className="text-2xl font-bold text-center mb-4">Event Highlights</h2>
        <p className="text-center italic mb-4">Photos & videos coming soon!</p>
      </section>

      <section id="reviews" className="p-8 bg-gray-800">
        <h2 className="text-2xl font-bold text-center mb-4">What Clients Say</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <blockquote className="bg-gray-900 p-4 rounded-xl shadow">
            “DJ Gee had the party jumping all night! Professional and fun!” — Amanda J.
          </blockquote>
          <blockquote className="bg-gray-900 p-4 rounded-xl shadow">
            “Best DJ in the DMV. Reliable and full of energy!” — Marcus D.
          </blockquote>
        </div>
      </section>

      <section id="contact" className="p-8">
        <h2 className="text-2xl font-bold text-center mb-4">Book DJ Gee</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Your Name" className="p-2 rounded bg-gray-700" />
          <input type="email" placeholder="Email Address" className="p-2 rounded bg-gray-700" />
          <input type="tel" placeholder="Phone Number" className="p-2 rounded bg-gray-700" />
          <textarea placeholder="Event Details" className="p-2 rounded bg-gray-700"></textarea>
          <button className="bg-purple-600 hover:bg-purple-700 p-2 rounded font-bold">Submit Booking Request</button>
        </form>
        <div className="text-center mt-6">
          <p>📞 443-891-8390</p>
          <p>📧 bookme@djgeedmv.com</p>
          <p>📱 Instagram: <a href="https://instagram.com/djgee_live" className="text-purple-400">@djgee_live</a></p>
          <p>▶️ YouTube: <a href="https://youtube.com/@djgeedmv" className="text-purple-400">@djgeedmv</a></p>
        </div>
      </section>

      <footer className="p-4 text-center bg-gray-900 text-xs">
        © {new Date().getFullYear()} DJ Gee | G & R Entertainment LLC. All rights reserved.
      </footer>
    </div>
  );
}
