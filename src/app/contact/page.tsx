import { Container } from '@/components/Container';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <Image
              src="/Images/ContactIMG.png" // Replace with your image path
              alt="Contact Us"
              width={500}
              height={300}
              className="rounded-lg shadow-lg mr-8"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions, feedback, or just want to say hello, you can reach us through the following contact details:
            </p>
            <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <li>
                <strong>Email:</strong> <Link href={"mailto:dharamdotin@gmail.com"} className='underline'>dharamdotin@gmail.com</Link>
              </li>
              <li>
                <strong>Phone:</strong> +1 (123) 456-7890
              </li>
              <li>
                <strong>Address:</strong> 123 TaskVault Street, Suite 456, TechCity, TX 78901, INDIA
              </li>
              <li>
                <strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-6">Contact Form</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Please fill out the form below and we will get back to you as soon as possible.
          </p>
          {/* This is where your React form component will be rendered */}
          <div className="w-full">
            {/* Insert your form component here */}
          </div>
        </div>

        {/* Map Section (Optional) */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-6">Our Location</h2>
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            {/* You can embed a Google map or any other map component here */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.012963327468!2d-122.41941558468124!3d37.774929179759295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c5b4f64cb%3A0xdbc8bcd7963e8e2c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1623180845730!5m2!1sen!2sus"
              width="600"
              height="450"
              // allowFullScreen="true"
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;