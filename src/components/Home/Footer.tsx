"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-green-600 to-green-400 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">FitTrack</h3>
          <p className="text-green-100">
            Empowering your fitness journey with easy tracking, tailored plans,
            and expert guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-green-100">
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/features"
                className="hover:text-white transition-colors duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/reviews"
                className="hover:text-white transition-colors duration-300"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="/onboarding"
                className="hover:text-white transition-colors duration-300"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-green-100">Email: support@fittrack.com</p>
          <p className="text-green-100">Phone: +1 (555) 123-4567</p>
          <p className="text-green-100">Address: 123 Fitness St, Wellness City</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-green-100">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-green-600 pt-6 text-center text-green-200 text-sm">
        &copy; {new Date().getFullYear()} FitTrack. All rights reserved.
      </div>
    </footer>
  );
}