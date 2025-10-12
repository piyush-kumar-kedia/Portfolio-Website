import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-400">
          Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-3 text-gray-300 text-lg md:text-xl">
            <p>
              Personal Email:{" "}
              <span className="text-amber-400 font-semibold">
                piyushkumarkedia02221@gmail.com
              </span>
            </p>
            <p>
              College Email:{" "}
              <span className="text-amber-400 font-semibold">
                piyush.kedia@iitg.ac.in
              </span>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/piyush-kumar-kedia"
                className="text-amber-400 underline"
                target="__blank"
              >
                piyush-kumar-kedia
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/piyush-kumar-kedia"
                className="text-amber-400 underline"
                target="__blank"
              >
                piyush-kumar-kedia
              </a>
            </p>
          </div>

          {/* Optional Contact Form */}
          {/* <div>
            <form className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-amber-400"
              />
              <input
                name="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-amber-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-amber-400"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-amber-400 text-gray-900 font-medium hover:bg-amber-500 transition-colors shadow-md"
              >
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}
