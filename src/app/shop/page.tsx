import Image from "next/image";
import coffee from "../../../public/images/coffee.jpg";
import dinner from "../../../public/images/dinner.jpg";
import glass from "../../../public/images/glass.jpg";
import mugs from "../../../public/images/mugs.jpeg";
import plates from "../../../public/images/plates.jpeg";
import tes from "../../../public/images/tes.jpeg";


const ShopUs = () => {
    return (
      <div className="bg-gradient-to-r from-pink-50 bg-amber-50 py-16">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-950">"Elegant Crockery Collections for Your Home"</h1>
          <p className="mt-4 text-lg text-gray-600">
            We offer a wide variety of beautifully crafted crockery sets. Our mission is to bring elegance and style to your dining experience.
          </p>
        </div>
  
        {/* Crockery Items */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Item 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Image 
                src={tes}
                alt="Elegant Tea Set" 
                className="w-full h-48 object-cover"
                width={600}  // Set the width
                height={300} // Set the height
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Elegant Tea Set</h3>
                <p className="mt-2 text-gray-600">A beautifully crafted tea set to elevate your tea time experience.</p>
              </div>
            </div>
  
            {/* Item 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Image 
                src={dinner}
                alt="Dinner Set" 
                className="w-full h-48 object-cover"
                width={600}  // Set the width
                height={300} // Set the height
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Classic Dinner Set</h3>
                <p className="mt-2 text-gray-600">Our dinner sets are designed to make every meal a special occasion.</p>
              </div>
            </div>
  
            {/* Item 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Image 
                src={coffee}
                alt="Luxury Coffee Cups" 
                className="w-full h-48 object-cover"
                width={600}  // Set the width
                height={300} // Set the height
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Luxury Coffee Cups</h3>
                <p className="mt-2 text-gray-600">Add a touch of luxury to your coffee breaks with these premium coffee cups.</p>
              </div>
            </div>
  
            {/* Item 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Image 
                src={plates}
                alt="Porcelain Plates" 
                className="w-full h-48 object-cover"
                width={600}  // Set the width
                height={300} // Set the height
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Porcelain Plates</h3>
                <p className="mt-2 text-gray-600">Delicate yet durable, perfect for everyday meals or special occasions.</p>
              </div>
            </div>
  
            {/* Item 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Image 
                src={mugs} 
                alt="Hand-painted Mugs" 
                className="w-full h-48 object-cover"
                width={600}  // Set the width
                height={300} // Set the height
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Hand-painted Mugs</h3>
                <p className="mt-2 text-gray-600">Beautifully hand-painted mugs for a personal touch to your drinkware collection.</p>
              </div>
            </div>
  
            {/* Item 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Image 
                src={glass}
                alt="Glassware Set" 
                className="w-full h-48 object-cover"
                width={600}  // Set the width
                height={300} // Set the height
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Glassware Set</h3>
                <p className="mt-2 text-gray-600">High-quality glassware that brings elegance to your table settings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShopUs;
