import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center p-8 pt-24" // ✅ Added `pt-24` to prevent overlap
      style={{ backgroundImage: "url('src/assets/images/bg6.jpg')" }} // Replace with correct path
    >
      <div className="bg-white bg-opacity-50 shadow-xl backdrop-blur-lg rounded-xl p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">📞 Contact Us</h1>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
          Have any questions or concerns? Feel free to reach out to us! Fill in the form below or contact us through our details.
        </p>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-blue-600 text-3xl mb-2" />
            <p className="text-gray-800 font-semibold">+1 234 567 890</p>
          </div>
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-red-600 text-3xl mb-2" />
            <p className="text-gray-800 font-semibold">contact@KarishmaShinde.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-green-600 text-3xl mb-2" />
            <p className="text-gray-800 font-semibold">123 Main St, City, Country</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-800 font-semibold mb-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1">Message</label>
            <textarea 
              placeholder="Type your message..." 
              className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 h-32"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
