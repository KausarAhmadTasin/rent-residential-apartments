import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className="py-20 lg:py-20 md:pb-72 min-h-screen bg-gray-100 ">
      <Helmet>
        <title>SH - About Us</title>
      </Helmet>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-12">
          <div className="flex items-center flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:pr-6">
              <img
                src="https://i.ibb.co/2cP6bBz/mikail-mcverry-GSL3-Iuuw-Jv8-unsplash-1.jpg"
                alt="About Us Image"
                className="rounded-lg mb-6 md:mb-0"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-6 md:mt-4">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-4">
                Welcome to SweetHome, your premier destination for renting and
                buying apartments. Our mission is to provide you with the best
                living spaces that meet your needs and lifestyle. Whether you
                are looking for a cozy apartment for yourself or a spacious home
                for your family, we have a wide range of options to choose from.
              </p>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                At SweetHome, our mission is to simplify the process of finding
                your dream home. We strive to offer a seamless and stress-free
                experience for all our clients, providing expert guidance and
                support every step of the way. We are committed to transparency,
                integrity, and excellence in all our services. Our mission at
                SweetHome is to simplify the process of finding your dream home
                by offering a seamless and stress-free experience. We provide
                expert guidance and support every step of the way, ensuring
                transparency, integrity, and excellence in all our services.
              </p>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
              </h2>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Extensive listings of apartments for rent and sale</li>
                <li>Personalized service tailored to your needs</li>
                <li>
                  Expert advice from experienced real estate professionals
                </li>
                <li>Comprehensive market analysis and insights</li>
                <li>Commitment to customer satisfaction</li>
              </ul>
              <p className="text-gray-600">
                Thank you for choosing SweetHome. We look forward to helping you
                find the perfect place to call home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
