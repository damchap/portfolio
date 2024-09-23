import GitHubCalendar, { ThemeInput } from 'react-github-calendar';
import Navbar from "components/organisms/navbar";
import Figure from "components/atoms/figure";
import { useEffect, useState } from 'react';
import Footer from 'components/organisms/footer';

interface AboutPageProps {
  toggleTheme: () => void;
}
interface Link {
  name: string;
  url: string;
}

interface Experience {
  role: string;
  company: Link;
  startDate: string;
  endDate: string;
  tasks: string[];
}
interface Education {
  degree: string;
  institution: Link;
  startDate: string;
  endDate: string;
}

const explicitTheme: ThemeInput = {
  light: ['#EEEEEE', '#4DE6FF', '#33CCFF', '#0099F2', '#007AC2'],
  dark: ['#BBBBBB', '#3AA2BF', '#2999CC', '#0077BA', '#005E91']
};

const experiencesFake: Experience[] = [
  {
    role: "Développeur / intégrateur",
    company: {
      name: "Thales six cholet",
      url: "https://www.thalesgroup.com/"
    },
    startDate: "septembre 2023",
    endDate: "aujourd'hui",
    tasks: [
      "Conception de site web avec des frameworks javascript / typescript",
      "Conception de maquette / UI kits",
      "Intégration sur différents CMS (Wordpress, prestashop)",
      "Optimisation de site pour le SEO (référencement naturel) et pour l'impact carbone"
    ]
  },
  {
    role: "Développeur / intégrateur",
    company: {
      name: "performance-webmarketing",
      url: "https://performance-webmarketing.fr/"
    },
    startDate: "septembre 2022",
    endDate: "aout 2023",
    tasks: [
      "Conception de site web avec des frameworks javascript / typescript",
      "Conception de maquette / UI kits",
      "Intégration sur différents CMS (Wordpress, prestashop)",
      "Optimisation de site pour le SEO (référencement naturel) et pour l'impact carbone"
    ]
  },
  {
    role: "Chef de projet",
    company: {
      name: "perf’n-zen",
      url: "https://perf-n-zen.fr/"
    },
    startDate: "décembre 2022",
    endDate: "Aujourd'hui",
    tasks: [
      "Conception d’une infrastructure réseaux",
      "Mise en place de gestion de projet",
      "Conception d’une app multi plate-forme (React-native)",
      "Relation client",
      "Création et gestion de base de données"
    ]
  },
  {
    role: "Développeur",
    company: {
      name: "365-1/4-conciergerie",
      url: "https://365-conciergerie.fr/"
    },
    startDate: "novembre 2022",
    endDate: "Aujourd'hui",
    tasks: [
      "Project fin de parcours projet CMS"
    ]
  },
  {
    role: "Administrateur",
    company: {
      name: "mjc-dz.org",
      url: "https://mjc-dz.org/"
    },
    startDate: "septembre 2020",
    endDate: "Aujourd'hui",
    tasks: [
      "Administrateur au Conseil d’administration de la maison des jeunes et de la culture a douarnenez"
    ]
  },
  {
    role: "Stagiaire developpeur",
    company: {
      name: "performance-webmarketing",
      url: "https://performance-webmarketing.fr/"
    },
    startDate: "décembre 2022",
    endDate: "janvier 2022",
    tasks: [
      "Conception de maquette / UI kits",
      "Intégration sur différents CMS (Wordpress, prestashop)"
    ]
  },
  {
    role: "Stagiaire développeur",
    company: {
      name: "novatech",
      url: "https://novatech.fr/"
    },
    startDate: "mai 2021",
    endDate: "juin 2021",
    tasks: [
      "Conception de maquette / UI kits",
      "Intégration sur différents CMS (Wordpress, prestashop)"
    ]
  },
  {
    role: "Responsable technique",
    company: {
      name: "ecowan-asso",
      url: "https://ecowan.fr/"
    },
    startDate: "novembre 2020",
    endDate: "février 2021",
    tasks: [
      "Gestion d’équipe dans une association d’hébergement (WEB, VPS, Serveur dédié)"
    ]
  },
  {
    role: "Technique de niveau 3",
    company: {
      name: "cosmhost-asso",
      url: "https://www.cosmhost.fr/"
    },
    startDate: "juin 2020",
    endDate: "novembre 2020",
    tasks: [
      "Gestion et résolution des problèmes clients et gestion de l’infrastructure réseaux"
    ]
  }
]

const educationsFake: Education[] = [
  {
    degree: "Master Informatique Option architecture logicielle",
    institution: {
      name: "Université de La Rochelle antaine Niortaise",
      url: "https://www.univ-larochelle.fr"
    },
    startDate: "septembre 2023",
    endDate: "septembre 2025"
  },
  {
    degree: "Licence CDA (Concepteur d’application)",
    institution: {
      name: "la-digital-school",
      url: "https://reseau-opencampus.com"
    },
    startDate: "septembre 2022",
    endDate: "septembre 2023"
  },
  {
    degree: "BTS SIO option SLAM (Brevet de technicien Supérieur Service Informatique aux Organisations)",
    institution: {
      name: "Lycee Saint Louis chateaulin",
      url: "https://www.saint-louis29.net"
    },
    startDate: "septembre 2020",
    endDate: "juin 2022"
  },
  {
    degree: "Bac STI2D (Science et Technique de l'Ingénierie et du Développement Durable)",
    institution: {
      name: "Le Likes la salle",
      url: "https://www.likes.org"
    },
    startDate: "septembre 2017",
    endDate: "juin 2020"
  }
]



const AboutPage: React.FC<AboutPageProps> = ({ toggleTheme }) => {
  // fonction asynchrone pour récupérer les données
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [educations, setEducations] = useState<Education[]>([]);
  useEffect(() => {
    // fetch('https://api.github.com/users/damchap/events')
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    setExperiences(experiencesFake);
    setEducations(educationsFake);
  });
  return ( <>
      <div className="flex items-center">
        {/*  notif */}
      </div>
      <header className="flex flex-col justify-between mx-auto max-w-5xl px-4 landscape xl:max-w-screen-2xl  ">
        <Navbar page={"about"} toggleTheme={toggleTheme}/>
      </header>
      <main className="mx-auto max-w-5xl px-4 xl:max-w-7xl xl:px-0 flex flex-col space-y-28">
        <section className="flex flex-col justify-center items-center">
          <div className={"w-full"}>
            <h1 className="text-4xl font-black pb-8">Qui suis-je </h1>
          </div>
          <div
            className={"flex flex-col lg:flex-row items-center space-x-0 space-y-8 lg:space-y-0 lg:space-x-12 lg:max-w-6xl"}>
            <div className={"lg:w-1/3"}>
              <img
                className="w-96 h-96 object-cover object-top"
                src="/damien_chapart.png" alt="Damien Chapart" />
            </div>
            <div className={"lg:w-2/3 flex flex-col justify-center"}>
              <div className={""}>
                <span className={"text-4xl font-extrabold"}>Damien Chapart</span>
                <h3 className={"text-xl font-bold tracking-wide pb-6"}>Etudiant en licence pro et
                  développeur full stack</h3>
                <p className={"text-secondary pb-8"}>
                  Hello and welcome, I am a junior developer, passionate about new technologies
                  and their abilities to improve the productivity of companies. I have a keen interest
                  in
                  exploring innovative solutions and staying updated with the latest tech trends.
                </p>
                <p className={"text-secondary pb-8"}>
                  I have been working on various personal and professional projects in the field of
                  IT for several years, particularly in web development and hosting. I have experience
                  in working with diverse programming languages and frameworks, and I am always eager
                  to learn more.
                </p>
                <GitHubCalendar username="damchap" colorScheme={"light"} theme={explicitTheme} />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center">
          <div className={"w-full"}>
            <h1 className="text-4xl font-black pb-8">🧪 Mes compétence</h1>
          </div>
          <div
            className={"flex flex-col lg:flex-row items-center space-x-0 space-y-8 lg:space-y-0 lg:space-x-12 lg:max-w-6xl"}>
            <Figure.Competence />
          </div>
        </section>
        <section className="flex flex-col">
          <div className={"w-full"}>
            <h1 className="text-4xl font-black pb-8">🔍 Expérience</h1>
          </div>
          <div className={"flex flex-col justify-center items-center space-y-14"}>
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={"flex w-full flex-col lg:max-w-6xl"}>
                <h3 className={"text-xl font-bold tracking-wide pb-3"}>{experience.role} @<a
                  className={"text-primary dark:text-primary-dark"}
                  href={experience.company.url}>{experience.company.name}</a></h3>
                {/*    date du debut et de fin */}
                <span className={"pb-3"}>
                  <time className={'font-mono text-slate-500'} dateTime="2022-12-01">{experience.startDate}</time>
                  &nbsp;-&nbsp;
                  <time className={'font-mono text-slate-500'} dateTime="2022-12-01">{experience.endDate}</time>
                </span>
                <ul className={"text-slate-500 pl-12 list-disc"}>
                  {experience.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            ))};

          </div>

        </section>
        <section className="flex flex-col">
          <div className={"w-full"}>
            <h1 className="text-4xl font-black pb-8">🎓 Education</h1>
          </div>
          <div className={"flex flex-col justify-center items-center space-y-14"}>
            {educations.map((education, index) => (
              <div
                key={index}
                className={"flex w-full flex-col lg:max-w-6xl"}>
                <h3 className={"text-xl font-bold tracking-wide pb-3"}>{education.degree} @<a
                  className={"text-primary dark:text-primary-dark"}
                  href={education.institution.url}>{education.institution.name}</a></h3>
                {/*    date du debut et de fin */}
                <span className={"pb-3"}>
                  <time className={'font-mono text-slate-500'} dateTime="2022-12-01">{education.startDate}</time>
                  &nbsp;-&nbsp;
                  <time className={'font-mono text-slate-500'} dateTime="2022-12-01">{education.endDate}</time>
                </span>
              </div>
            ))};
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;