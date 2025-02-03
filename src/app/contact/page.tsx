// src/components/Contact.js
const Contact = () => {
    return (
      <div className="min-h-screen bg-gradient-to-r from-pink-50 bg-lime-100 flex items-center justify-center py-10">
        <div className="bg-yellow-50 shadow-lg rounded-lg p-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Contact Us</h1>
          <p className="text-lg text-center text-gray-600 mb-8">
            Feel free to reach out with any questions or concerns. Were here to help!
          </p>
  
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold">Your Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
  
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold">Your Message</label>
              <textarea
                id="message"
                className="w-full p-3 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
                rows={4}
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-orange-800 text-white rounded-lg font-semibold text-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
  
          {/* Contact Info */}
          <div className="mt-10 text-center">
            <p className="text-gray-600">Or reach out directly:</p>
            <p className="text-lg text-gray-800 mt-2">Email: <span className="text-green-700">info@crockeryshop.com</span></p>
            <p className="text-lg text-gray-800 mt-2">Phone: <span className="text-green-700">+123 456 7890</span></p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  
  