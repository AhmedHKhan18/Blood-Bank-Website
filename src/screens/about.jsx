import Navbar from "../components/navbar";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';
import React from 'react';
import Footer from "../components/footer";

export default function About(){
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    return(
    <div className="bg-gray-100 min-h-screen">
            <Navbar/>
            <h1 className="mx-12 my-5 font-bold">About Us:</h1>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">We are dedicated to saving lives through blood donation. Our mission is to ensure a safe and adequate blood supply for all those in need.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">The Importance of Blood Donation</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <img src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Blood donation" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <p className="text-lg">Every day, thousands of people need blood transfusions to survive. Your donation can make a significant difference in someone's life. One donation can save up to three lives!</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-lg mb-4">"Donating blood was one of the most rewarding experiences of my life. Knowing that I could potentially save a life is an incredible feeling."</p>
              <p className="font-semibold">- John Doe, Regular Donor</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-lg mb-4">"As a recipient of blood transfusions, I can't express how grateful I am for donors. They truly are lifesavers."</p>
              <p className="font-semibold">- Jane Smith, Blood Recipient</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Donate Blood</h3>
              <p className="mb-4">Schedule an appointment to donate blood and save lives.</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">Donate Now</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
              <p className="mb-4">Join our team of volunteers and make a difference in your community.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Volunteer</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Organize an Event</h3>
              <p className="mb-4">Host a blood drive in your area and help us reach more donors.</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">Plan Event</button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">Have questions or need more information? Reach out to us!</p>
          <p className="mb-2"><strong>Email:</strong> info@blooddonation.org</p>
          <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook size={24} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={24} /></a>
              <a href="#" className="text-pink-600 hover:text-pink-800"><FaInstagram size={24} /></a>
              <a href="#" className="text-blue-800 hover:text-blue-900"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </section>
      </main>
<Footer/>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300"
        aria-label="Scroll to top"
      >
        <AiOutlineArrowUp size={24} />
      </button>
    </div>
    )
}