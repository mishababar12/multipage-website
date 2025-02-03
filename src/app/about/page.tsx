import Image from "next/image";

// src/components/AboutUs.js
const AboutUs = () => {
  return (
    <div >
      {/* Hero Section with Linear Gradient Background */}
      <section className="relative bg-gradient-to-r from-peach-100 to-white h-[400px]" style={{ backgroundImage: 'linear-gradient(to right, #FF9E9D, #FFD6B0)' }}>
        <div className="absolute inset-0 bg-opacity-40"></div>
        <div className="relative text-center text-gray-950 flex flex-col items-center justify-center h-full px-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">"About Our Crockery Shop"</h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Offering elegant and timeless crockery pieces that bring charm to every dining experience.</p>
          <div className="border border-s-violet-950"></div>
        </div>
        
      </section>

      {/* Our Mission and Vision */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-pink-100 bg-orange-200 ">
        <h2 className="text-3xl font-semibold text-gray-900">Our Mission & Vision</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We aim to provide premium quality crockery items that transform ordinary meals into unforgettable experiences. We believe in craftsmanship, attention to detail, and timeless designs that complement every home.
        </p>

        {/* Mission and Vision Blocks */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <Image src="https://images.pexels.com/photos/6914418/pexels-photo-6914418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Mission" className="w-full h-48 object-cover rounded-md"/>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-4 text-gray-600">To bring elegance and functionality to every dining table with beautifully designed crockery that enhances every meal.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <Image src="https://images.pexels.com/photos/4963932/pexels-photo-4963932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Quality" className="w-full h-48 object-cover rounded-md"/>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Our Quality Promise</h3>
            <p className="mt-4 text-gray-600">We ensure that every piece is crafted with the utmost care, using only the highest quality materials that offer both durability and beauty.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <Image src="https://images.pexels.com/photos/4906250/pexels-photo-4906250.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sustainability" className="w-full h-48 object-cover rounded-md"/>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Sustainability</h3>
            <p className="mt-4 text-gray-600">We are committed to sustainability by using eco-friendly processes and materials, ensuring our crockery is not only beautiful but also responsible.</p>
          </div>
        </div>
      </div>

      {/* Section for Image/Photo Gallery */}
      <section className="py-16 px-6 bg-gradient-to-r from-pink-100 bg-amber-100">
        <h2 className="text-3xl font-semibold text-center text-gray-900">Our Collections</h2>
        <p className="mt-4 text-lg text-center text-gray-600 max-w-2xl mx-auto">
          Take a look at some of our favorite designs from our exclusive crockery collections.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <Image src="https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Crockery Set 1" className="w-full h-full object-cover rounded-lg shadow-md"/>
          <Image src="https://images.pexels.com/photos/15864308/pexels-photo-15864308/free-photo-of-elegant-table-setting-with-candle-holder.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Crockery Set 2" className="w-full h-full object-cover rounded-lg shadow-md"/>
          <Image src="https://images.pexels.com/photos/2788490/pexels-photo-2788490.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Crockery Set 3" className="w-full h-full object-cover rounded-lg shadow-md"/>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
