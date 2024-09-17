import React from 'react';
import Navbar from "components/organisms/navbar";
import Footer from 'components/organisms/footer';

const ContactPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>
        <form className="max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Nom</label>
            <input type="text" id="name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea id="message" rows={4} className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Envoyer</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
