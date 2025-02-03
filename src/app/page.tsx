import Link from "next/link";


// src/components/Home.js
const Home = () => {
  return (
    <>
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6073824/pexels-photo-6073824.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content Section */}
      <div className="relative z-10 text-center text-white px-6 py-20 md:px-12">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Welcome to the Crockery Shop
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          Explore our exquisite collection of crockery items that bring elegance to your table.
        </p>
        <Link href="/shop">
        <button className="mt-8 py-2 px-6 bg-orange-600 text-white font-semibold text-lg rounded-lg hover:bg-orange-700 transition-all duration-300">
          Shop Now
        </button>
        </Link>
      </div>
    </div>
  


    </>
  );
};

export default Home;
