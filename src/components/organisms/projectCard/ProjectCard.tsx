import React from 'react';

const ProjectCard: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src="/path-to-image" alt="Project" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-2">Assistant Clevguard</h3>
        <p className="text-sm text-gray-500 mb-4">2019 - 2020</p>
        <p className="text-gray-700 text-sm mb-4">
          Clevguard est un projet de fin d’année de terminale STI2D (Sciences et Technologies de l'Industrie et du Développement Durable) option SIN (Système d'information et numérique). 
          Le projet Clevguard est divisé en plusieurs composantes, des boîtiers de capteurs divers ainsi qu'une progressive Web App permettant une visualisation des données des capteurs.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">EN SAVOIR PLUS</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">GITHUB</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;