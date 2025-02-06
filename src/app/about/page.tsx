import Image from "next/image";
import mission from "../../../public/images/mission.jpg";
import quality from "../../../public/images/quality.jpg";
import sustain from "../../../public/images/sustain.jpg";
import set1 from "../../../public/images/set1.jpg";
import set2 from "../../../public/images/set2.jpeg";
import set3 from "../../../public/images/set3.jpeg";

// src/components/AboutUs.js
const AboutUs = () => {
  return (
    <div>
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
            <Image 
              src={mission}
              alt="Mission" 
              className="w-full object-cover rounded-md"
              width={600}  // Set width
              height={300} // Set height
            />
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-4 text-gray-600">To bring elegance and functionality to every dining table with beautifully designed crockery that enhances every meal.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <Image 
              src={quality}
              alt="Quality" 
              className="w-full object-cover rounded-md"
              width={600}  // Set width
              height={300} // Set height
            />
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Our Quality Promise</h3>
            <p className="mt-4 text-gray-600">We ensure that every piece is crafted with the utmost care, using only the highest quality materials that offer both durability and beauty.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <Image 
              src={sustain}
              alt="Sustainability" 
              className="w-full object-cover rounded-md"
              width={600}  // Set width
              height={300} // Set height
            />
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
          <Image 
            src={set1}
            alt="Crockery Set 1" 
            className="w-full object-cover rounded-lg shadow-md"
            width={600}  // Set width
            height={400} // Set height
          />
          <Image 
            src={set2}
            alt="Crockery Set 2" 
            className="w-full object-cover rounded-lg shadow-md"
            width={100}  // Set width
            height={50} // Set height
          />
          <Image 
            src={set3}
            alt="Crockery Set 3" 
            className="w-full object-cover rounded-lg shadow-md"
            width={600}  // Set width
            height={400} // Set height
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
