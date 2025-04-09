import React from 'react';

export default function GameFyWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header / Navigation */}
      <header className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <div className="text-lime-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current mr-2">
              <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z"/>
              <circle cx="14.5" cy="13.5" r="1.5"/>
              <circle cx="18.5" cy="10.5" r="1.5"/>
            </svg>
            <span className="font-bold text-lg">GAMER'S DEN</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-sm">Top gamers</a>
          <a href="#" className="text-sm">Game</a>
          <a href="#" className="text-sm">Tournaments</a>
        </nav>
        <button className="border border-lime-400 text-lime-400 px-4 py-1 text-sm">Book Now</button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            DISCOVER<br />
            COLLECT GAME<br />
            FROM US
          </h1>
          <p className="mb-8 text-sm max-w-md">
            Minecraft received critical acclaim, winning several awards and later being cited as one of the greatest video games.
          </p>
          <div className="flex space-x-4">
            <button className="bg-lime-400 text-black px-6 py-2 text-sm font-bold">Book Now!</button>
            <button className="border border-lime-400 text-lime-400 px-6 py-2 text-sm font-bold">Explore Prices</button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative">
            <div className="bg-lime-400 opacity-80 h-64 w-64 rounded-full absolute blur-2xl z-0"></div>
            <img src="/hero1-removebg-preview.png" alt="Glowing portal" className="relative z-10" />
          </div>
        </div>
      </section>

      {/* Top Products Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8">CHECK OUR TOP PRODUCT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-md overflow-hidden flex">
            <img src="/image2.jpg" alt="Genshin Impact" className="w-1/3 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">GENSHIN IMPACT - VERSION 3.3</h3>
              <p className="text-xs text-gray-400">
                Meet the Wanderer and Faruzan, and join in Teyvat's most popular card game! Check out what's new at Genshin! Deep dive into the latest news on your favorite.
              </p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-md overflow-hidden flex">
            <img src="/image2.jpg" alt="Hello Game" className="w-1/3 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">HELLO GAME</h3>
              <p className="text-xs text-gray-400">
                Wondarer and more! Join in the most popular new at Game! Check out the latest news on your...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Games Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8">LATEST GAMES</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <img src="/image2.jpg"  alt="Game 1" className="rounded-md w-full h-48 object-cover" />
          <img src="/image2.jpg"  alt="Game 2" className="rounded-md w-full h-48 object-cover" />
          <img src="/image2.jpg"  alt="Game 3" className="rounded-md w-full h-48 object-cover" />
          <img src="/image2.jpg"  alt="Game 4" className="rounded-md w-full h-48 object-cover" />
          <img src="/image2.jpg"  alt="Game 5" className="rounded-md w-full h-48 object-cover" />
          <img src="/image2.jpg"  alt="Game 6" className="rounded-md w-full h-48 object-cover" />
        </div>
        <div className="flex justify-center">
          <button className="bg-lime-400 text-black px-6 py-2 text-sm font-bold">GET STARTED</button>
        </div>
      </section>

      {/* Second Product Section */}
      <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 grid grid-cols-2 gap-4 mb-8 md:mb-0">
          <img src="/lower1.jpg" alt="Character 1" className="rounded-md" />
          <img src="/lower2.jpg" alt="Character 2" className="rounded-md mt-8" />
        </div>
        <div className="md:w-2/3 md:pl-12">
          <h2 className="text-2xl font-bold mb-6">CHECK OUR TOP PRODUCT</h2>
          <p className="mb-6 text-sm">
            Ludwig Wittgenstein was probably the first academic philosopher to address the definition of the word game. In his Philosophical Investigations, Wittgenstein argued that the elements of games, such as play.
          </p>
          <div className="flex space-x-4">
            <button className="bg-lime-400 text-black px-6 py-2 text-sm font-bold">GET STARTED</button>
            <button className="border border-lime-400 text-lime-400 px-6 py-2 text-sm font-bold flex items-center">
              EXPLORE
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-lime-400 py-12 px-6">
        <div className="container mx-auto text-black max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="mb-6 text-sm">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making.
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="For Latest Update Send Mail" 
              className="flex-grow px-4 py-2 bg-black bg-opacity-20 text-white"
            />
            <button className="bg-black text-white px-6 py-2">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="text-lime-400 flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current mr-2">
                <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z"/>
                <circle cx="14.5" cy="13.5" r="1.5"/>
                <circle cx="18.5" cy="10.5" r="1.5"/>
              </svg>
              <span className="font-bold text-lg">GAMER'S DEN</span>
            </div>
            <p className="text-xs text-gray-400 max-w-xs">
              Sit amet, consectetur adipiscing elit. Nullam dictum aliquam porta tellus rhoncus, in mattis. Nulla aliquet id vulputet.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Career</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-bold mb-4">Help</h3>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Delivery Details</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to - Blog</a></li>
                <li><a href="#">YouTube Playlist</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}