import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 min-h-screen p-8">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            About Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            Discover who we are and what drives us to bring you the best film experience.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            At MovieSite, we are passionate about films and dedicated to providing you with the latest and most comprehensive film information. Our mission is to create an engaging and informative platform for film enthusiasts, where you can explore movies, discover new favorites, and stay updated with the latest releases. We aim to offer a user-friendly experience that makes it easy to find and enjoy films.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Our Story
          </h2>
          <div className="flex items-center justify-between mb-6">
            <div className="w-full md:w-1/2 pr-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our journey started with a simple love for movies and a vision to bring that passion to a wider audience. Over the years, we've grown from a small team of film enthusiasts to a dedicated group committed to delivering quality content and a seamless user experience. We continuously strive to improve our platform and offer valuable insights into the world of cinema.
              </p>
            </div>
            <div className="w-full md:w-1/2 pl-4">
              <img 
                src="./images/story-image.jpg" 
                alt="Our Story" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Meet the Team
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <img 
                  src="./images/team-member1.jpg" 
                  alt="John Doe" 
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">John Doe</h3>
                <p className="text-gray-600 dark:text-gray-400">Founder & CEO</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  John leads our team with a passion for film and a vision for an engaging user experience.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <img 
                  src="./images/team-member2.jpg" 
                  alt="Jane Smith" 
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Jane Smith</h3>
                <p className="text-gray-600 dark:text-gray-400">Content Manager</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Jane ensures that our content is fresh, relevant, and engaging for our audience.
                </p>
              </div>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We’d love to hear from you! If you have any questions, suggestions, or just want to say hello, feel free to reach out to us through our contact page.
          </p>
          <a href="/contact" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition duration-300">
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
