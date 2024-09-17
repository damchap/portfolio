import Logos from "components/atoms/logos";
import Button from "components/atoms/button";
import Figure from "components/atoms/figure";
import Navbar from "components/organisms/navbar";
import Footer from "components/organisms/footer";

function App() {
    const div = <>
            <div className="flex items-center">
                {/*  notif */}
            </div>
            <header className="flex flex-col justify-between mx-auto max-w-5xl px-4 landscape xl:max-w-screen-2xl  ">
                <Navbar/>
                <div className="flex-grow py-16">
                    <div className="flex flex-col justify-center text-center items-center">
                        <span className="text-xl font-bold text-primary">Hello! 👋 I'm </span>
                        <h1 className="text-8xl font-black"><span className="text-primary">Damien</span> Chapart</h1>
                        <h2 className="text-2xl font-black">Software engineer.</h2>
                        <p className="text-lg py-4 xl:px-16 text-secondary">
                            I'm a student at <a href={"https://www.42lyon.fr/"}>université de la rochelle </a> and sowftware
                            engineer.
                            I'm passionate about web development, and I love to learn new things.
                        </p>
                        <div className="flex space-x-4 py-8">
                            <Button outline={false}>
                                <div className={"uppercase tracking-wide font-bold"}>
                                    <a>me contacter</a>
                                </div>
                            </Button>
                            <Button outline={true} className={"w-full sm:w-auto flex items-center justify-center bg-transparent hover:bg-primary text-primary hover:text-white border-primary border-2 text-lg leading-6 font-semibold py-3 px-6 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
                                <div className={"uppercase tracking-wide font-bold flex flex-grow space-x-2"}>
                                    <span>Github</span>
                                    <Logos.Github
                                        className="w-6 h-6 group-hover:animate-spin transition-all duration-200 ease-in-out "/>

                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            <main className="mx-auto max-w-5xl px-4 xl:max-w-7xl xl:px-0 flex flex-col space-y-28">
                <section className="flex flex-col justify-center items-center">
                    <div className={"w-full"}>
                        <h2 className="text-4xl font-black pb-8">🤖 Qui suis-je </h2>
                    </div>
                    <div className={"flex flex-col lg:flex-row items-center space-x-0 space-y-8 lg:space-y-0 lg:space-x-12 lg:max-w-6xl"}>
                        <div className={"lg:w-1/3"}>
                            <img
                                className="w-96 h-96 object-cover object-top"
                                src="/damien_chapart.png" alt="Damien Chapart"/>
                        </div>
                        <div className={"lg:w-2/3 flex flex-col justify-center"}>
                            <div className={""}>
                                <span className={"text-4xl font-extrabold"}>Damien Chapart</span>
                                <h3 className={"text-xl font-bold tracking-wide pb-6"}>Etudiant en licence pro et
                                    développeur full stack</h3>
                                <p className={"text-secondary pb-8"}>
                                    Hello and welcome, I am a junior developer, passionate about new technologies
                                    and their abilities to improve the productivity of companies. I have a keen interest in
                                    exploring innovative solutions and staying updated with the latest tech trends.
                                </p>
                                <p className={"text-secondary pb-8"}>
                                    I have been working on various personal and professional projects in the field of
                                    IT for several years, particularly in web development and hosting. I have experience
                                    in working with diverse programming languages and frameworks, and I am always eager
                                    to learn more.
                                </p>
                                <Button outline={true} className={"w-full sm:w-auto flex justify-center items-center bg-transparent hover:bg-primary text-primary hover:text-white border-primary border-2 text-lg leading-6 font-semibold py-3 px-6 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
                                    <div className={"uppercase tracking-wide font-bold"}>
                                        En savoir plus
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                {/*projet*/}
                <section className="flex flex-col justify-center items-center">
                    <div className={"w-full"}>
                        <h2 className="text-4xl font-black pb-8">🚀 Mes projets</h2>
                    </div>
                    <div className={"flex flex-col items-center sm:flex-row lg:space-x-12 lg:max-w-6xl"}>
                        <div className={"w-full lg:w-1/3 flex flex-col justify-center"}>
                            <div className={"w-full h-[330px] bg-gray-100  flex items-center justify-center rounded-xl border-1 border-transparent gap-1 bg-gray-500 bg-opacity-10 mb-2"}>
                                <svg width="158" height="152" viewBox="0 0 158 152" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_916_858)">
                                        <path
                                            d="M0.5 34.2939L49.7516 76.1988L0.5 117.704V102.297L31.511 76.1539L0.5 49.7763V34.2939Z"
                                            fill="#1E1E1E"/>
                                        <path
                                            d="M144.407 100.557C134.971 121.097 114.18 135.345 90.0501 135.345C65.92 135.345 45.2303 121.154 35.7615 100.692L22.678 111.826C35.5802 135.74 60.916 152.002 90.0501 152.002C119.184 152.002 144.612 135.688 157.498 111.698L144.407 100.559V100.557Z"
                                            fill="#1E1E1E"/>
                                        <path
                                            d="M35.7709 51.443C45.2068 30.9032 65.9977 16.6551 90.1279 16.6551C114.258 16.6551 134.948 30.8464 144.417 51.3082L157.5 40.1741C144.598 16.2602 119.262 0 90.1279 0C60.9937 0 35.5661 16.3146 22.678 40.3041L35.7686 51.443H35.7709Z"
                                            fill="#1E1E1E"/>
                                        <path
                                            d="M90.2268 54.3467L96.0268 59.3947V121.059L90.1608 126.048L84.2949 121.059V59.3947L90.2268 54.3467Z"
                                            fill="#1E1E1E"/>
                                        <path
                                            d="M117.486 53.7836C117.486 38.6252 105.258 26.3467 90.1609 26.3467C75.0639 26.3467 62.8352 38.6252 62.8352 53.7836C62.8352 64.563 69.0379 73.8907 78.0475 78.3855V67.1355C74.4493 63.8301 72.1816 59.0728 72.1816 53.8001C72.1816 43.8269 80.2281 35.75 90.1585 35.75C100.089 35.75 108.135 43.8293 108.135 53.8001C108.135 59.2785 105.708 64.1705 101.874 67.4878V78.5912C111.105 74.1555 117.482 64.7262 117.482 53.7836H117.486Z"
                                            fill="#1E1E1E"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_916_858">
                                            <rect width="157" height="152" fill="white" transform="translate(0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className={"lg:w-2/3 flex flex-col justify-center"}>
                            <div className={""}>
                                <div className={"flex items-center pb-8 justify-between"}>
                                    <div>
                                        <h3 className={"text-xl  lg:text-4xl  font-extrabold"}>Assistant Clevguard</h3>
                                        <span className={" font-light text-secondary "}>2019 - 2020</span>
                                    </div>
                                    <div className={"flex space-x-4 border-1 border-b-gray-200s p-2 rounded-full"}>
                                        <Logos.Cpp className={"w-7 h-7 lg:w-10 lg:w-10"}/>
                                        <Logos.Arduino className={"w-7 h-7 lg:w-10 lg:w-10"}/>
                                        <Logos.RaspberryPi className={"w-7 h-7 lg:w-10 lg:w-10"}/>
                                        <Logos.Php className={"w-7 h-7 lg:w-10 lg:w-10"}/>
                                        <Logos.Composer className={"w-7 h-7 lg:w-10 lg:w-10"}/>
                                    </div>
                                </div>
                                <p className={"text-secondary pb-8"}>
                                    Clevguard est un projet de fin d’année de terminale STI2D (Sciences et Technologies de
                                    l’Industrie et du Développement Durable) option SIN (Système d’information et
                                    numérique).
                                    Le projet Clevguard est divisé en plusieurs composantes, des boîtiers de capteurs divers
                                    ainsi qu’une progressive Web App permettant une visualisation des données des capteurs.
                                </p>
                                <a className={"text-primary flex items-center font-black"}>En savoir plus
                                    <svg className={"ml-2"} width="21" height="15" viewBox="0 0 21 15" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.7071 8.20711C21.0976 7.81658 21.0976 7.18342 20.7071 6.79289L14.3431 0.428932C13.9526 0.0384078 13.3195 0.0384078 12.9289 0.428932C12.5384 0.819457 12.5384 1.45262 12.9289 1.84315L18.5858 7.5L12.9289 13.1569C12.5384 13.5474 12.5384 14.1805 12.9289 14.5711C13.3195 14.9616 13.9526 14.9616 14.3431 14.5711L20.7071 8.20711ZM0 8.5H20V6.5H0V8.5Z"
                                            fill="#2181FA"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Article récents*/}
                <section className="flex flex-col ">
                    <div className={"w-full"}>
                        <h2 className="text-4xl font-black pb-8">🖋️Article récents</h2>
                    </div>
                    <div>
                        <div className={""}>
                            <span className={" font-light text-secondary "}>19 février 2023</span>
                        </div>
                    </div>
                    <ul>
                        <a className="group my-4 flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-101 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                           href="/blog/core-web-vitals">
                            <li className="py-4">
                                <article className={"flex justify-start space-x-8"}>
                                    <div className={"hidden sm:flex sm:flex-col sm:justify-center"}>
                                        <Figure.Congratulations className={"w-24 h-24"}/>
                                    </div>
                                    <div
                                        className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                        <dl>
                                            <dt className="sr-only">Published on</dt>
                                            <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                                                <time dateTime="2023-09-05T00:00:00.000Z">September 5, 2023</time>
                                                • <span className="mx-1">426</span>views
                                            </dd>
                                        </dl>
                                        <div className="space-y-5 xl:col-span-4">
                                            <div className="space-y-1">
                                                <div>
                                                    <h2 className="text-xl font-bold leading-8 tracking-tight">
                                                    <span className=" transition duration-500 ease-in-out ">
                                                        Allez ç’est (re)parti pour de nouvelle aventure ! 💥
                                                    </span>
                                                    </h2>
                                                </div>
                                                <div className={"flex space-x-3"}>
                                                    <Button outline={true}
                                                            className={"flex bg-transparent hover:bg-secondary text-secondary hover:text-white border-secondary border-2 text-lg leading-6 font-semibold py-2 px-4 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
                                                        <div
                                                            className={"uppercase tracking-wide font-bold text-xs flex flex-grow space-x-2"}>
                                                            <Logos.Github
                                                                className="w-4 h-4 "/>
                                                            <span>Github</span>
                                                        </div>
                                                    </Button>
                                                    <Button outline={true}
                                                            className={"flex bg-transparent hover:bg-secondary text-secondary hover:text-white border-secondary border-2 text-lg leading-6 font-semibold py-2 px-4 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
                                                        <div
                                                            className={"uppercase tracking-wide font-bold text-xs flex flex-grow space-x-2"}>
                                                            <Logos.Pnpm
                                                                className="w-4 h-4 "/>
                                                            <span>pnpm</span>
                                                        </div>
                                                    </Button>
                                                </div>

                                                <div
                                                    className="text-secondary">pnpm, next.js, react, versel ou bien vue,
                                                    nuxt3, netlify. Quelle de ce technologie j’utilise aujourd’hui pour
                                                    développer des projects cumulent une partie front et back avec une api
                                                    Rest ?
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        </a>
                        <a className="group my-4 flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-101 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                           href="/blog/core-web-vitals">
                            <li className="py-4">
                                <article className={"flex flex-grow justify-start space-x-8"}>
                                    <div className={"hidden sm:flex sm:flex-col sm:justify-center"}>
                                        <Figure.CodingScript className={"w-24 h-24"}/>
                                    </div>
                                    <div
                                        className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                        <dl>
                                            <dt className="sr-only">Published on</dt>
                                            <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                                                <time dateTime="2023-09-05T00:00:00.000Z">September 5, 2023</time>
                                                • <span className="mx-1">426</span>views
                                            </dd>
                                        </dl>
                                        <div className="space-y-5 xl:col-span-4">
                                            <div className="space-y-1">
                                                <div>
                                                    <h2 className="text-xl font-bold leading-8 tracking-tight">
                                                    <span className=" transition duration-500 ease-in-out ">
                                                        Pourquoi utiliser gitflow pour ca gestion de projet ? 💡
                                                    </span>
                                                    </h2>
                                                </div>
                                                <div className={"flex space-x-3"}>
                                                    <Button outline={true}
                                                            className={"flex bg-transparent hover:bg-secondary text-secondary hover:text-white border-secondary border-2 text-lg leading-6 font-semibold py-2 px-4 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
                                                        <div
                                                            className={"uppercase tracking-wide font-bold text-xs flex flex-grow space-x-2"}>
                                                            <Logos.Github
                                                                className="w-4 h-4 "/>
                                                            <span>Github</span>
                                                        </div>
                                                    </Button>
                                                    <Button outline={true}
                                                            className={" bg-transparent hover:bg-secondary text-secondary hover:text-white border-secondary border-2 text-lg leading-6 font-semibold py-2 px-4 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
                                                        <div
                                                            className={"uppercase tracking-wide font-bold text-xs flex flex-grow space-x-2"}>
                                                            <Logos.Pnpm
                                                                className="w-4 h-4 "/>
                                                            <span>pnpm</span>
                                                        </div>
                                                    </Button>
                                                </div>

                                                <div
                                                    className="text-secondary">L'utilisation de GitFlow permet de standardiser et de simplifier le processus de développement logiciel en définissant des règles claires pour la gestion des branches et des versions du code. Cela peut aider à améliorer la qualité du code, à faciliter la collaboration et à accélérer le déploiement des fonctionnalités.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        </a>
                    </ul>
                </section>
                {/*Projet récents*/}
                <section className="flex flex-col">
                    <div className={"w-full"}>
                        <h2 className="text-4xl font-black pb-8">🖋️ Les autres project</h2>
                    </div>
                    <div className={"flex-wrap space-y-7  gap-16 grid-cols-2 justify-center lg:mx-10"}>
                        <div className={"w-full flex flex-col  justify-center"}>
                            <div
                                className={"w-full h-[330px] bg-gray-100  flex items-center justify-center rounded-xl border-1 border-transparent gap-1 bg-emerald-700 bg-opacity-10 mb-2"}>
                                <svg width="278" height="85" viewBox="0 0 278 85" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M68.1107 0V56.1475H50.4228V28.153L41.6988 56.1475H26.492L17.768 28.153V56.1475H0V0H21.7698L34.2555 33.7043L46.421 0H68.1107Z"
                                        fill="black"/>
                                    <path
                                        d="M148.46 56.7026C143.925 56.7026 139.843 55.7774 136.215 53.927C132.586 52.0765 129.732 49.433 127.651 45.9965C125.623 42.5071 124.609 38.4362 124.609 33.7836C124.609 29.1311 125.623 25.0866 127.651 21.6501C129.732 18.1607 132.586 15.4908 136.215 13.6403C139.843 11.7899 143.925 10.8647 148.46 10.8647C152.996 10.8647 157.077 11.7899 160.706 13.6403C164.334 15.4908 167.162 18.1607 169.189 21.6501C171.27 25.0866 172.311 29.1311 172.311 33.7836C172.311 38.4362 171.27 42.5071 169.189 45.9965C167.162 49.433 164.334 52.0765 160.706 53.927C157.077 55.7774 152.996 56.7026 148.46 56.7026ZM148.46 41.4762C150.114 41.4762 151.501 40.8417 152.622 39.5729C153.743 38.2511 154.303 36.3214 154.303 33.7836C154.303 31.2459 153.743 29.3426 152.622 28.0737C151.501 26.752 150.114 26.0911 148.46 26.0911C146.806 26.0911 145.419 26.752 144.298 28.0737C143.178 29.3426 142.617 31.2459 142.617 33.7836C142.617 36.3214 143.151 38.2511 144.218 39.5729C145.339 40.8417 146.753 41.4762 148.46 41.4762Z"
                                        fill="black"/>
                                    <path
                                        d="M275.289 33.3871C275.289 34.6031 275.209 35.7663 275.048 36.8765H246.476C246.742 40.736 248.37 42.6657 251.358 42.6657C253.279 42.6657 254.666 41.7934 255.52 40.0487H274.328C273.688 43.2209 272.327 46.0758 270.246 48.6136C268.219 51.0984 265.631 53.081 262.483 54.5614C259.388 55.9889 255.973 56.7026 252.238 56.7026C247.756 56.7026 243.754 55.7774 240.233 53.927C236.765 52.0765 234.043 49.433 232.069 45.9965C230.148 42.5071 229.188 38.4362 229.188 33.7836C229.188 29.1311 230.148 25.0866 232.069 21.6501C234.043 18.1607 236.765 15.4908 240.233 13.6403C243.754 11.7899 247.756 10.8647 252.238 10.8647C256.72 10.8647 260.695 11.7899 264.164 13.6403C267.685 15.4379 270.406 18.0285 272.327 21.4122C274.301 24.7958 275.289 28.7875 275.289 33.3871ZM257.28 29.184C257.28 27.7036 256.8 26.5934 255.84 25.8532C254.879 25.0602 253.679 24.6637 252.238 24.6637C249.09 24.6637 247.249 26.1704 246.716 29.184H257.28Z"
                                        fill="black"/>
                                    <path
                                        d="M95.8207 56.7026C91.2854 56.7026 87.2035 55.7774 83.5752 53.927C79.9469 52.0765 77.0923 49.433 75.0113 45.9965C72.9838 42.5071 71.97 38.4362 71.97 33.7836C71.97 29.1311 72.9838 25.0866 75.0113 21.6501C77.0923 18.1607 79.9469 15.4908 83.5752 13.6403C87.2035 11.7899 91.2854 10.8647 95.8207 10.8647C100.356 10.8647 104.438 11.7899 108.066 13.6403C111.695 15.4908 114.522 18.1607 116.55 21.6501C118.631 25.0866 119.671 29.1311 119.671 33.7836C119.671 38.4362 118.631 42.5071 116.55 45.9965C114.522 49.433 111.695 52.0765 108.066 53.927C104.438 55.7774 100.356 56.7026 95.8207 56.7026ZM95.8207 41.4762C97.4748 41.4762 98.8621 40.8417 99.9826 39.5729C101.103 38.2511 101.663 36.3214 101.663 33.7836C101.663 31.2459 101.103 29.3426 99.9826 28.0737C98.8621 26.752 97.4748 26.0911 95.8207 26.0911C94.1667 26.0911 92.7793 26.752 91.6588 28.0737C90.5383 29.3426 89.9781 31.2459 89.9781 33.7836C89.9781 36.3214 90.5117 38.2511 91.5788 39.5729C92.6993 40.8417 94.1133 41.4762 95.8207 41.4762Z"
                                        fill="black"/>
                                    <path
                                        d="M227.996 16.78L207.537 53.6045C205.897 56.5576 200.992 56.5576 199.35 53.6045L178.891 16.78C177.037 13.4455 181.153 9.98391 185.01 11.6367L201.417 27.3409C202.693 27.8874 204.196 27.8874 205.469 27.3409L221.876 11.6367C225.734 9.98613 229.852 13.4433 227.996 16.78Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M203.444 55.8194V27.7508C204.138 27.7508 204.833 27.6142 205.469 27.3409L221.876 11.6367C225.734 9.98613 229.852 13.4433 227.996 16.78L207.537 53.6045C206.717 55.0812 205.08 55.8195 203.444 55.8194Z"
                                        fill="#34C759"/>
                                    <path
                                        d="M12.1295 65.3167C12.1295 66.3039 11.8863 67.2052 11.3998 68.0207C10.9134 68.8219 10.2624 69.4944 9.44689 70.038C9.87611 70.1239 10.2481 70.2741 10.5629 70.4887C10.8776 70.689 11.1351 70.9394 11.3354 71.2399C11.5501 71.5403 11.7074 71.8837 11.8076 72.27C11.922 72.642 11.9793 73.0354 11.9793 73.4503C11.9793 74.2658 11.7861 74.9812 11.3998 75.5964C11.0278 76.1973 10.5414 76.698 9.94049 77.0986C9.33959 77.4849 8.66715 77.7782 7.92318 77.9785C7.19351 78.1645 6.46384 78.2575 5.73418 78.2575C5.33358 78.2575 4.93297 78.2289 4.53237 78.1717C4.13177 78.1145 3.75263 78.0143 3.39495 77.8712C3.26619 77.8283 3.15888 77.6566 3.07304 77.3562C2.9872 77.0414 2.91566 76.6623 2.85843 76.2188C2.81551 75.7752 2.77974 75.2959 2.75113 74.7809C2.72251 74.2658 2.70105 73.7722 2.68675 73.3001C2.67244 72.8279 2.66528 72.413 2.66528 72.0554C2.66528 71.6977 2.66528 71.4473 2.66528 71.3042C2.66528 70.8035 2.66528 70.3027 2.66528 69.802C2.66528 69.2869 2.67959 68.779 2.70821 68.2783C2.70821 68.1495 2.70821 67.9492 2.70821 67.6774C2.72251 67.4055 2.72967 67.1051 2.72967 66.776C2.74397 66.4326 2.75828 66.075 2.77259 65.703C2.8012 65.331 2.82982 64.9876 2.85843 64.6729C2.90135 64.3438 2.95143 64.0648 3.00866 63.8359C3.08019 63.607 3.15888 63.4639 3.24473 63.4067C3.57379 63.1921 3.93862 62.9918 4.33923 62.8058C4.73983 62.6055 5.15474 62.4338 5.58395 62.2907C6.01317 62.1476 6.44238 62.0332 6.8716 61.9473C7.30081 61.8615 7.70857 61.8186 8.09486 61.8186C8.62423 61.8186 9.13214 61.8973 9.61858 62.0546C10.1193 62.1977 10.5485 62.4195 10.9062 62.7199C11.2782 63.0204 11.5715 63.3924 11.7861 63.8359C12.015 64.2651 12.1295 64.7587 12.1295 65.3167ZM8.567 66.4541C8.567 66.2109 8.48831 66.032 8.33093 65.9176C8.18786 65.8031 7.99471 65.7459 7.75149 65.7459C7.55119 65.7459 7.33658 65.7888 7.10767 65.8747C6.89306 65.9605 6.70707 66.075 6.54969 66.218C6.50677 66.2609 6.46384 66.3826 6.42092 66.5829C6.39231 66.7832 6.36369 67.0121 6.33508 67.2696C6.32077 67.5128 6.30646 67.7489 6.29216 67.9778C6.29216 68.1924 6.29216 68.3355 6.29216 68.407C6.29216 68.4356 6.29216 68.4857 6.29216 68.5573C6.29216 68.6145 6.29216 68.6789 6.29216 68.7504C6.30646 68.8219 6.32077 68.8863 6.33508 68.9436C6.34939 69.0008 6.37085 69.0294 6.39946 69.0294C6.64268 69.0294 6.89306 68.9435 7.15059 68.7719C7.40812 68.5859 7.63703 68.3641 7.83733 68.1066C8.05194 67.8347 8.22363 67.5486 8.35239 67.2481C8.49547 66.9477 8.567 66.683 8.567 66.4541ZM8.48116 72.6563C8.48116 72.413 8.39532 72.2414 8.22363 72.1412C8.05194 72.0411 7.8588 71.991 7.64419 71.991C7.44389 71.991 7.22928 72.0411 7.00036 72.1412C6.78576 72.227 6.60692 72.3344 6.46384 72.4631C6.42092 72.4917 6.38515 72.5633 6.35654 72.6777C6.34223 72.7922 6.32793 72.9209 6.31362 73.064C6.31362 73.1928 6.30646 73.3215 6.29216 73.4503C6.29216 73.5648 6.29216 73.6435 6.29216 73.6864C6.29216 73.715 6.29216 73.7722 6.29216 73.8581C6.29216 73.9439 6.29216 74.0369 6.29216 74.1371C6.30646 74.2229 6.32077 74.3087 6.33508 74.3946C6.36369 74.4661 6.39231 74.5019 6.42092 74.5019C6.62122 74.5019 6.84298 74.4447 7.08621 74.3302C7.32943 74.2158 7.55119 74.0727 7.75149 73.901C7.9661 73.7293 8.13779 73.5362 8.26655 73.3215C8.40962 73.0926 8.48116 72.8709 8.48116 72.6563Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M18.7111 78.6224C17.9814 78.6224 17.3448 78.4292 16.8011 78.0429C16.2574 77.6566 15.7996 77.163 15.4276 76.5621C15.0556 75.9612 14.7766 75.2959 14.5906 74.5663C14.4046 73.8223 14.3116 73.0926 14.3116 72.3773C14.3116 71.619 14.4046 70.8393 14.5906 70.038C14.7766 69.2225 15.0628 68.4857 15.449 67.8276C15.8353 67.1551 16.3289 66.6115 16.9298 66.1966C17.5307 65.7673 18.2461 65.5527 19.0759 65.5527C19.8771 65.5527 20.5567 65.7745 21.1147 66.218C21.687 66.6472 22.1448 67.1909 22.4882 67.849C22.8316 68.4929 23.0748 69.2011 23.2179 69.9737C23.3609 70.7463 23.411 71.4759 23.3681 72.1627C23.3252 72.9209 23.2035 73.6864 23.0032 74.459C22.8173 75.2316 22.5383 75.9255 22.1663 76.5407C21.7943 77.1559 21.3221 77.6566 20.7499 78.0429C20.1776 78.4292 19.498 78.6224 18.7111 78.6224ZM18.9257 68.9221C18.7111 68.9221 18.5179 69.0365 18.3463 69.2655C18.1889 69.4944 18.053 69.7734 17.9385 70.1024C17.8383 70.4315 17.7597 70.782 17.7024 71.154C17.6452 71.5117 17.6166 71.8264 17.6166 72.0983C17.6166 72.4417 17.6452 72.8136 17.7024 73.2142C17.774 73.6148 17.867 73.9868 17.9814 74.3302C18.0959 74.6593 18.2318 74.9383 18.3892 75.1672C18.5609 75.3818 18.754 75.4891 18.9686 75.4891C19.1975 75.4891 19.3907 75.3818 19.5481 75.1672C19.7197 74.9526 19.8557 74.6807 19.9558 74.3517C20.056 74.0226 20.1275 73.6649 20.1704 73.2786C20.2133 72.878 20.2348 72.506 20.2348 72.1627C20.2348 71.8479 20.2062 71.5045 20.149 71.1325C20.0917 70.7463 20.0059 70.3886 19.8914 70.0595C19.7913 69.7304 19.6554 69.4586 19.4837 69.244C19.3263 69.0294 19.1403 68.9221 18.9257 68.9221Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M35.4007 71.8622C35.4007 72.6491 35.322 73.4289 35.1646 74.2014C35.0073 74.974 34.7426 75.6679 34.3706 76.2831C33.9986 76.884 33.4979 77.3705 32.8683 77.7425C32.2531 78.1145 31.4805 78.3005 30.5506 78.3005C29.6349 78.3005 28.8695 78.1216 28.2543 77.7639C27.6391 77.3919 27.1455 76.9055 26.7735 76.3046C26.4158 75.7037 26.1583 75.0241 26.0009 74.2658C25.8578 73.5075 25.7863 72.735 25.7863 71.9481C25.7863 71.0896 25.8864 70.2384 26.0867 69.3942C26.1297 69.1653 26.2083 68.8506 26.3228 68.45C26.4516 68.035 26.6089 67.6344 26.7949 67.2481C26.9952 66.8475 27.217 66.5042 27.4602 66.218C27.7177 65.9319 27.9967 65.7888 28.2972 65.7888C28.5833 65.7888 28.8123 65.8675 28.9839 66.0249C29.1556 66.1823 29.2915 66.3826 29.3917 66.6258C29.4918 66.8547 29.5562 67.1051 29.5848 67.3769C29.6135 67.6344 29.6278 67.8705 29.6278 68.0851C29.6278 68.4142 29.5991 68.7361 29.5419 69.0508C29.499 69.3656 29.4489 69.6804 29.3917 69.9951C29.3345 70.4243 29.2772 70.8536 29.22 71.2828C29.1771 71.712 29.1556 72.1412 29.1556 72.5704C29.1556 72.785 29.1628 73.0283 29.1771 73.3001C29.2057 73.5576 29.2629 73.808 29.3488 74.0512C29.4346 74.2944 29.5562 74.5019 29.7136 74.6736C29.871 74.831 30.0927 74.9096 30.3789 74.9096C30.7509 74.9096 31.0442 74.8095 31.2588 74.6092C31.4877 74.4089 31.6522 74.1585 31.7524 73.8581C31.8668 73.5576 31.9384 73.2357 31.967 72.8923C31.9956 72.549 32.0099 72.2342 32.0099 71.9481C32.0099 71.3185 31.967 70.7033 31.8811 70.1024C31.7953 69.4872 31.7166 68.8649 31.6451 68.2353C31.6308 68.1638 31.6236 68.0637 31.6236 67.9349C31.6236 67.7203 31.6594 67.5057 31.7309 67.2911C31.8025 67.0765 31.9026 66.8833 32.0314 66.7116C32.1601 66.5399 32.3175 66.404 32.5035 66.3039C32.6895 66.1894 32.897 66.1322 33.1259 66.1322C33.4406 66.1322 33.7196 66.2466 33.9628 66.4756C34.2061 66.6902 34.4064 66.9763 34.5637 67.334C34.7354 67.6774 34.8713 68.0708 34.9715 68.5143C35.086 68.9435 35.1718 69.3728 35.229 69.802C35.3006 70.2169 35.3435 70.6103 35.3578 70.9823C35.3864 71.3543 35.4007 71.6476 35.4007 71.8622Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M47.9699 70.6819C47.9699 71.4115 47.9556 72.1412 47.9269 72.8709C47.9126 73.6005 47.8769 74.3302 47.8196 75.0599C47.7767 75.6894 47.7195 76.3618 47.648 77.0772C47.5764 77.7925 47.462 78.5008 47.3046 79.2018C47.1472 79.9172 46.9397 80.5968 46.6822 81.2406C46.4247 81.8987 46.0813 82.4782 45.6521 82.9789C45.2372 83.4797 44.7293 83.8803 44.1284 84.1807C43.5275 84.4812 42.8121 84.6314 41.9823 84.6314C41.596 84.6314 41.1596 84.567 40.6732 84.4382C40.2011 84.3238 39.7504 84.1521 39.3212 83.9232C38.9063 83.6943 38.5486 83.4081 38.2481 83.0647C37.962 82.7357 37.8189 82.3494 37.8189 81.9059C37.8189 81.5768 37.9334 81.2692 38.1623 80.983C38.4055 80.7112 38.7131 80.5753 39.0851 80.5753C39.314 80.5753 39.5286 80.6111 39.7289 80.6826C39.9435 80.7684 40.151 80.8614 40.3513 80.9616C40.5659 81.0617 40.7662 81.1476 40.9522 81.2191C41.1525 81.305 41.3528 81.3479 41.5531 81.3479C42.0825 81.3479 42.526 81.212 42.8837 80.9401C43.2413 80.6826 43.5275 80.3464 43.7421 79.9315C43.9567 79.5309 44.1141 79.0873 44.2142 78.6009C44.3287 78.1288 44.4074 77.6781 44.4503 77.2489C44.1642 77.5779 43.8279 77.8069 43.4416 77.9356C43.0697 78.0501 42.6762 78.1073 42.2613 78.1073C41.503 78.1073 40.8592 77.9785 40.3298 77.721C39.8005 77.4492 39.3712 77.0843 39.0422 76.6265C38.7131 76.1544 38.4699 75.6107 38.3125 74.9955C38.1551 74.3803 38.0764 73.715 38.0764 72.9996C38.0764 72.5561 38.1194 72.0554 38.2052 71.4974C38.3054 70.9394 38.4484 70.3743 38.6344 69.802C38.8204 69.2297 39.0493 68.6717 39.3212 68.128C39.6073 67.5844 39.9364 67.1051 40.3084 66.6902C40.6804 66.2753 41.0953 65.939 41.5531 65.6815C42.0252 65.424 42.5403 65.2952 43.0983 65.2952C43.6419 65.2952 44.1212 65.4526 44.5361 65.7673C44.9654 66.0821 45.2157 66.5256 45.2873 67.0979C45.4446 66.7975 45.6521 66.5042 45.9096 66.218C46.1672 65.9176 46.4819 65.7673 46.8539 65.7673C47.0542 65.7673 47.2187 65.8675 47.3475 66.0678C47.4906 66.2681 47.5979 66.5328 47.6694 66.8619C47.7553 67.1766 47.8196 67.5271 47.8626 67.9134C47.9055 68.2854 47.9341 68.6574 47.9484 69.0294C47.9627 69.3871 47.9699 69.7161 47.9699 70.0166C47.9699 70.317 47.9699 70.5388 47.9699 70.6819ZM44.7078 72.0768C44.7078 71.8622 44.6721 71.5832 44.6005 71.2399C44.5433 70.8965 44.4503 70.5674 44.3215 70.2527C44.2071 69.9379 44.0569 69.6661 43.8709 69.4371C43.6849 69.2082 43.4631 69.0938 43.2056 69.0938C42.8765 69.0938 42.5832 69.2082 42.3257 69.4371C42.0825 69.6661 41.875 69.9451 41.7033 70.2741C41.5316 70.5889 41.3957 70.9323 41.2956 71.3042C41.2097 71.6619 41.1668 71.9695 41.1668 72.2271C41.1668 72.413 41.1811 72.6634 41.2097 72.9782C41.2383 73.2929 41.2956 73.6005 41.3814 73.901C41.4816 74.2014 41.6103 74.459 41.7677 74.6736C41.9251 74.8882 42.1325 74.9955 42.3901 74.9955C42.7764 74.9955 43.1126 74.9025 43.3987 74.7165C43.6849 74.5305 43.9209 74.2944 44.1069 74.0083C44.3072 73.7221 44.4575 73.4074 44.5576 73.064C44.6578 72.7206 44.7078 72.3916 44.7078 72.0768Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M60.024 74.18C60.024 74.6664 59.8666 75.1457 59.5518 75.6179C59.2514 76.0757 58.8651 76.4906 58.3929 76.8626C57.9351 77.2203 57.4415 77.5136 56.9121 77.7425C56.3828 77.9571 55.8963 78.0644 55.4528 78.0644C54.6945 78.0644 54.0149 77.8784 53.414 77.5064C52.8274 77.1201 52.3338 76.6337 51.9332 76.0471C51.5326 75.4605 51.225 74.8167 51.0104 74.1156C50.8101 73.4002 50.71 72.7063 50.71 72.0339C50.71 71.3185 50.8101 70.5531 51.0104 69.7376C51.2107 68.9221 51.5112 68.171 51.9118 67.4842C52.3267 66.7975 52.8418 66.2252 53.457 65.7673C54.0865 65.3095 54.8305 65.0806 55.6889 65.0806C56.1753 65.0806 56.6403 65.1664 57.0838 65.3381C57.5274 65.4955 57.9137 65.7244 58.2427 66.0249C58.5718 66.3253 58.8365 66.683 59.0368 67.0979C59.2371 67.5128 59.3372 67.9778 59.3372 68.4929C59.3372 69.1653 59.1941 69.7948 58.908 70.3814C58.6219 70.968 58.2427 71.4759 57.7706 71.9051C57.2984 72.3344 56.7548 72.6849 56.1396 72.9567C55.5244 73.2142 54.8948 73.3573 54.251 73.3859C54.3082 73.8008 54.4728 74.1013 54.7446 74.2873C55.0308 74.4733 55.367 74.5663 55.7533 74.5663C56.0394 74.5663 56.3184 74.4947 56.5902 74.3517C56.8621 74.2086 57.1268 74.0512 57.3843 73.8795C57.6418 73.6935 57.8922 73.529 58.1354 73.3859C58.3929 73.2429 58.6505 73.1713 58.908 73.1713C59.1941 73.1713 59.4517 73.2643 59.6806 73.4503C59.9095 73.6363 60.024 73.8795 60.024 74.18ZM56.5473 68.9221C56.5473 68.7361 56.4972 68.5429 56.3971 68.3426C56.2969 68.1423 56.1396 68.0422 55.925 68.0422C55.6102 68.0422 55.3455 68.128 55.1309 68.2997C54.9163 68.4571 54.7375 68.6646 54.5944 68.9221C54.4513 69.1653 54.3369 69.43 54.251 69.7161C54.1795 70.0023 54.1366 70.267 54.1222 70.5102C54.3225 70.4673 54.5586 70.41 54.8305 70.3385C55.1166 70.267 55.3813 70.174 55.6245 70.0595C55.882 69.9307 56.0966 69.7734 56.2683 69.5874C56.4543 69.4014 56.5473 69.1796 56.5473 68.9221Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M72.0566 75.9827C72.0566 76.2688 71.935 76.5192 71.6918 76.7338C71.4628 76.9484 71.1624 77.1416 70.7904 77.3133C70.4327 77.4849 70.0178 77.628 69.5457 77.7425C69.0879 77.8569 68.63 77.9499 68.1722 78.0215C67.7287 78.093 67.3066 78.1431 66.906 78.1717C66.5054 78.2146 66.1835 78.2361 65.9403 78.2361C65.6971 78.2361 65.3537 78.2289 64.9102 78.2146C64.4809 78.2003 64.0517 78.1431 63.6225 78.0429C63.1933 77.9571 62.8213 77.814 62.5065 77.6137C62.1918 77.3991 62.0344 77.1058 62.0344 76.7338C62.0344 76.4477 62.1346 76.0971 62.3349 75.6822C62.5352 75.2673 62.7927 74.8167 63.1075 74.3302C63.4222 73.8438 63.7727 73.3502 64.159 72.8494C64.5453 72.3344 64.9245 71.8408 65.2964 71.3686C65.6684 70.8965 66.019 70.4673 66.348 70.081C66.6771 69.6804 66.9346 69.3513 67.1206 69.0938C66.9203 69.1367 66.6628 69.2011 66.348 69.2869C66.0476 69.3585 65.7328 69.43 65.4038 69.5015C65.0747 69.5731 64.7528 69.6374 64.438 69.6947C64.1376 69.7376 63.88 69.7591 63.6654 69.7591C63.4937 69.7591 63.3006 69.7304 63.086 69.6732C62.8714 69.6017 62.6639 69.5087 62.4636 69.3942C62.2776 69.2798 62.1131 69.1438 61.97 68.9865C61.8413 68.8291 61.7769 68.6503 61.7769 68.45C61.7769 68.1924 61.8913 67.9564 62.1203 67.7417C62.3492 67.5128 62.6496 67.3125 63.0216 67.1408C63.3936 66.9548 63.8085 66.7975 64.2663 66.6687C64.7242 66.5256 65.1748 66.4112 65.6184 66.3253C66.0619 66.2252 66.484 66.1536 66.8846 66.1107C67.2852 66.0678 67.6071 66.0463 67.8503 66.0463C68.1221 66.0463 68.4512 66.075 68.8375 66.1322C69.2238 66.1894 69.5958 66.2896 69.9534 66.4326C70.3254 66.5757 70.6402 66.7689 70.8977 67.0121C71.1552 67.2553 71.284 67.5629 71.284 67.9349C71.284 68.0493 71.2697 68.1567 71.2411 68.2568C71.2268 68.3426 71.2053 68.4428 71.1767 68.5573C71.1481 68.6574 71.0193 68.8863 70.7904 69.244C70.5758 69.5874 70.304 70.0023 69.9749 70.4887C69.6601 70.9609 69.3096 71.4759 68.9233 72.0339C68.5513 72.5776 68.1937 73.0926 67.8503 73.5791C67.5069 74.0655 67.2065 74.4947 66.9489 74.8667C66.6914 75.2387 66.5197 75.4891 66.4339 75.6179C67.0205 75.4605 67.6142 75.3317 68.2151 75.2316C68.8303 75.1171 69.4384 75.0599 70.0393 75.0599C70.1824 75.0599 70.3684 75.067 70.5973 75.0813C70.8262 75.0956 71.0479 75.1386 71.2626 75.2101C71.4772 75.2673 71.6632 75.3603 71.8205 75.4891C71.9779 75.6035 72.0566 75.7681 72.0566 75.9827Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M77.1145 76.8626C77.1145 77.0915 77.0501 77.3848 76.9213 77.7425C76.8069 78.1001 76.6567 78.4507 76.4707 78.7941C76.299 79.1374 76.0987 79.4307 75.8698 79.6739C75.6408 79.9172 75.4191 80.0388 75.2045 80.0388C74.9183 80.0388 74.7753 79.8957 74.7753 79.6096C74.7753 79.4379 74.811 79.2733 74.8826 79.116C74.9541 78.9586 75.0328 78.8012 75.1186 78.6438C75.2045 78.5007 75.2832 78.3505 75.3547 78.1931C75.4262 78.0501 75.462 77.907 75.462 77.7639C75.2474 77.907 75.0185 77.9785 74.7753 77.9785C74.4462 77.9785 74.1672 77.8498 73.9383 77.5922C73.7094 77.3347 73.5949 77.0486 73.5949 76.7338C73.5949 76.276 73.7451 75.9111 74.0456 75.6393C74.346 75.3532 74.7252 75.2101 75.183 75.2101C75.6981 75.2101 76.1487 75.346 76.535 75.6179C76.9213 75.8897 77.1145 76.3046 77.1145 76.8626Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M95.2136 74.18C95.2136 74.6664 95.0563 75.1457 94.7415 75.6179C94.4411 76.0757 94.0548 76.4906 93.5826 76.8626C93.1248 77.2203 92.6312 77.5136 92.1018 77.7425C91.5725 77.9571 91.086 78.0644 90.6425 78.0644C89.8842 78.0644 89.2046 77.8784 88.6037 77.5064C88.0171 77.1201 87.5235 76.6337 87.1229 76.0471C86.7223 75.4605 86.4147 74.8167 86.2001 74.1156C85.9998 73.4002 85.8997 72.7063 85.8997 72.0339C85.8997 71.3185 85.9998 70.5531 86.2001 69.7376C86.4004 68.9221 86.7009 68.171 87.1015 67.4842C87.5164 66.7975 88.0314 66.2252 88.6466 65.7673C89.2762 65.3095 90.0201 65.0806 90.8786 65.0806C91.365 65.0806 91.83 65.1664 92.2735 65.3381C92.717 65.4955 93.1033 65.7244 93.4324 66.0249C93.7615 66.3253 94.0261 66.683 94.2264 67.0979C94.4267 67.5128 94.5269 67.9778 94.5269 68.4929C94.5269 69.1653 94.3838 69.7948 94.0977 70.3814C93.8115 70.968 93.4324 71.4759 92.9603 71.9051C92.4881 72.3344 91.9444 72.6849 91.3292 72.9567C90.714 73.2142 90.0845 73.3573 89.4407 73.3859C89.4979 73.8008 89.6625 74.1013 89.9343 74.2873C90.2204 74.4733 90.5567 74.5663 90.9429 74.5663C91.2291 74.5663 91.5081 74.4947 91.7799 74.3517C92.0518 74.2086 92.3164 74.0512 92.574 73.8795C92.8315 73.6935 93.0819 73.529 93.3251 73.3859C93.5826 73.2429 93.8402 73.1713 94.0977 73.1713C94.3838 73.1713 94.6414 73.2643 94.8703 73.4503C95.0992 73.6363 95.2136 73.8795 95.2136 74.18ZM91.737 68.9221C91.737 68.7361 91.6869 68.5429 91.5868 68.3426C91.4866 68.1423 91.3292 68.0422 91.1146 68.0422C90.7999 68.0422 90.5352 68.128 90.3206 68.2997C90.106 68.4571 89.9271 68.6646 89.7841 68.9221C89.641 69.1653 89.5265 69.43 89.4407 69.7161C89.3692 70.0023 89.3262 70.267 89.3119 70.5102C89.5122 70.4673 89.7483 70.41 90.0201 70.3385C90.3063 70.267 90.571 70.174 90.8142 70.0595C91.0717 69.9307 91.2863 69.7734 91.458 69.5874C91.644 69.4014 91.737 69.1796 91.737 68.9221Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M106.667 66.9262C106.667 67.1551 106.624 67.3984 106.538 67.6559C106.452 67.8991 106.345 68.1495 106.216 68.407C106.087 68.6646 105.951 68.9149 105.808 69.1582C105.665 69.3871 105.537 69.6017 105.422 69.802C105.136 70.2598 104.85 70.7248 104.564 71.1969C104.292 71.6691 104.013 72.1341 103.727 72.5919C103.855 72.7922 104.034 73.0712 104.263 73.4289C104.492 73.7865 104.714 74.1657 104.929 74.5663C105.157 74.9526 105.351 75.3389 105.508 75.7252C105.665 76.1115 105.744 76.4405 105.744 76.7123C105.744 76.9699 105.644 77.2203 105.444 77.4635C105.243 77.7067 105 77.8283 104.714 77.8283C104.413 77.8283 104.106 77.721 103.791 77.5064C103.491 77.2918 103.19 77.0414 102.89 76.7553C102.604 76.4548 102.339 76.1472 102.096 75.8325C101.852 75.5034 101.645 75.2316 101.473 75.017C101.287 75.2173 101.044 75.4891 100.744 75.8325C100.458 76.1758 100.143 76.5121 99.7994 76.8411C99.4703 77.1702 99.1413 77.4563 98.8122 77.6995C98.4831 77.9285 98.1898 78.0429 97.9323 78.0429C97.6319 78.0429 97.3958 77.9356 97.2241 77.721C97.0524 77.5064 96.9666 77.256 96.9666 76.9699C96.9666 76.6837 97.0596 76.3189 97.2456 75.8754C97.4459 75.4319 97.6748 74.974 97.9323 74.5019C98.2041 74.0298 98.4688 73.5791 98.7263 73.1499C98.9982 72.7206 99.2056 72.3844 99.3487 72.1412C99.2056 71.8837 99.0268 71.5475 98.8122 71.1325C98.5976 70.7033 98.3901 70.2598 98.1898 69.802C98.0038 69.3298 97.8393 68.872 97.6962 68.4285C97.5675 67.9707 97.5031 67.5915 97.5031 67.2911C97.5031 66.962 97.6032 66.6973 97.8035 66.497C98.0038 66.2967 98.2685 66.1966 98.5976 66.1966C98.9553 66.1966 99.2915 66.3396 99.6062 66.6258C99.921 66.8976 100.214 67.2338 100.486 67.6344C100.758 68.0207 100.994 68.4285 101.194 68.8577C101.409 69.2726 101.581 69.616 101.709 69.8878C101.881 69.6303 102.117 69.2798 102.418 68.8362C102.732 68.3927 103.083 67.9564 103.469 67.5271C103.855 67.0979 104.256 66.7259 104.671 66.4112C105.086 66.0964 105.479 65.939 105.851 65.939C106.095 65.939 106.288 66.0463 106.431 66.2609C106.588 66.4612 106.667 66.683 106.667 66.9262Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M118.678 71.6047C118.678 72.2342 118.606 72.9281 118.463 73.6864C118.335 74.4304 118.106 75.1243 117.777 75.7681C117.462 76.4119 117.04 76.9484 116.51 77.3776C115.995 77.8069 115.344 78.0215 114.558 78.0215C114.357 78.0215 114.15 78.0072 113.935 77.9785C113.721 77.9499 113.513 77.8999 113.313 77.8283C113.127 77.7568 112.955 77.6638 112.798 77.5493C112.64 77.4206 112.519 77.256 112.433 77.0557L112.24 80.1461C112.225 80.4751 112.211 80.8686 112.197 81.3264C112.197 81.7843 112.14 82.2206 112.025 82.6355C111.925 83.0504 111.746 83.401 111.489 83.6871C111.245 83.9876 110.888 84.1378 110.416 84.1378C110.144 84.1378 109.915 83.9947 109.729 83.7086C109.543 83.4367 109.393 83.0862 109.278 82.657C109.178 82.2278 109.099 81.7485 109.042 81.2191C108.985 80.6898 108.949 80.1818 108.935 79.6954C108.921 79.209 108.913 78.7654 108.913 78.3648C108.913 77.9642 108.913 77.6709 108.913 77.4849C108.913 76.5264 108.906 75.5749 108.892 74.6307C108.878 73.6721 108.87 72.7135 108.87 71.7549C108.87 71.5832 108.87 71.3185 108.87 70.9609C108.87 70.5889 108.885 70.1883 108.913 69.7591C108.942 69.3298 108.985 68.8863 109.042 68.4285C109.114 67.9707 109.214 67.5557 109.343 67.1838C109.471 66.7975 109.636 66.4899 109.836 66.2609C110.036 66.0177 110.28 65.8961 110.566 65.8961C110.752 65.8961 110.916 65.9533 111.059 66.0678C111.217 66.168 111.346 66.3039 111.446 66.4756C111.56 66.6329 111.653 66.8046 111.725 66.9906C111.796 67.1766 111.853 67.3483 111.896 67.5057C112.34 67.0049 112.848 66.6258 113.42 66.3683C114.007 66.1107 114.629 65.982 115.287 65.982C115.974 65.982 116.532 66.1751 116.961 66.5614C117.405 66.9477 117.748 67.427 117.991 67.9993C118.249 68.5716 118.428 69.1868 118.528 69.8449C118.628 70.4887 118.678 71.0753 118.678 71.6047ZM115.609 71.433C115.609 71.2184 115.588 71.0038 115.545 70.7892C115.516 70.5603 115.452 70.3528 115.352 70.1668C115.266 69.9665 115.137 69.8091 114.965 69.6947C114.794 69.5659 114.579 69.5015 114.321 69.5015C113.978 69.5015 113.613 69.616 113.227 69.8449C112.855 70.0595 112.576 70.3099 112.39 70.596C112.318 70.7105 112.276 70.8965 112.261 71.154C112.247 71.4115 112.24 71.6047 112.24 71.7335C112.24 71.8336 112.24 71.9695 112.24 72.1412C112.254 72.2986 112.268 72.4631 112.283 72.6348C112.297 72.8065 112.311 72.971 112.326 73.1284C112.354 73.2858 112.39 73.4074 112.433 73.4932C112.476 73.622 112.569 73.7436 112.712 73.8581C112.855 73.9582 113.012 74.0512 113.184 74.1371C113.356 74.2229 113.527 74.2873 113.699 74.3302C113.885 74.3731 114.042 74.3946 114.171 74.3946C114.472 74.3946 114.715 74.2801 114.901 74.0512C115.087 73.8223 115.23 73.5505 115.33 73.2357C115.445 72.9209 115.516 72.599 115.545 72.27C115.588 71.9266 115.609 71.6476 115.609 71.433Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M125.539 64.9948C125.539 65.7673 125.503 66.5471 125.431 67.334C125.374 68.1066 125.345 68.8863 125.345 69.6732C125.345 70.689 125.374 71.7048 125.431 72.7206C125.503 73.7365 125.539 74.7594 125.539 75.7895C125.539 76.0471 125.524 76.3404 125.496 76.6694C125.467 76.9842 125.396 77.2775 125.281 77.5493C125.181 77.8212 125.024 78.0501 124.809 78.2361C124.594 78.4221 124.308 78.5151 123.951 78.5151C123.607 78.5151 123.307 78.3434 123.049 78C122.806 77.6709 122.598 77.2489 122.427 76.7338C122.269 76.2044 122.133 75.6179 122.019 74.974C121.919 74.3302 121.84 73.7078 121.783 73.1069C121.74 72.4917 121.704 71.9338 121.676 71.433C121.661 70.9179 121.654 70.5388 121.654 70.2956C121.654 70.0237 121.661 69.6303 121.676 69.1152C121.704 68.6002 121.754 68.0422 121.826 67.4413C121.897 66.8404 121.99 66.2323 122.105 65.6171C122.234 64.9876 122.398 64.4225 122.598 63.9217C122.799 63.4067 123.035 62.9918 123.307 62.677C123.593 62.3479 123.929 62.1834 124.315 62.1834C124.63 62.1834 124.866 62.2907 125.024 62.5053C125.195 62.7056 125.317 62.956 125.388 63.2564C125.46 63.5426 125.503 63.8502 125.517 64.1793C125.531 64.494 125.539 64.7658 125.539 64.9948Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M132.785 78.6224C132.056 78.6224 131.419 78.4292 130.875 78.0429C130.332 77.6566 129.874 77.163 129.502 76.5621C129.13 75.9612 128.851 75.2959 128.665 74.5663C128.479 73.8223 128.386 73.0926 128.386 72.3773C128.386 71.619 128.479 70.8393 128.665 70.038C128.851 69.2225 129.137 68.4857 129.523 67.8276C129.91 67.1551 130.403 66.6115 131.004 66.1966C131.605 65.7673 132.32 65.5527 133.15 65.5527C133.952 65.5527 134.631 65.7745 135.189 66.218C135.761 66.6472 136.219 67.1909 136.563 67.849C136.906 68.4929 137.149 69.2011 137.292 69.9737C137.435 70.7463 137.485 71.4759 137.442 72.1627C137.4 72.9209 137.278 73.6864 137.078 74.459C136.892 75.2316 136.613 75.9255 136.241 76.5407C135.869 77.1559 135.397 77.6566 134.824 78.0429C134.252 78.4292 133.572 78.6224 132.785 78.6224ZM133 68.9221C132.785 68.9221 132.592 69.0365 132.421 69.2655C132.263 69.4944 132.127 69.7734 132.013 70.1024C131.913 70.4315 131.834 70.782 131.777 71.154C131.72 71.5117 131.691 71.8264 131.691 72.0983C131.691 72.4417 131.72 72.8136 131.777 73.2142C131.848 73.6148 131.941 73.9868 132.056 74.3302C132.17 74.6593 132.306 74.9383 132.464 75.1672C132.635 75.3818 132.828 75.4891 133.043 75.4891C133.272 75.4891 133.465 75.3818 133.622 75.1672C133.794 74.9526 133.93 74.6807 134.03 74.3517C134.13 74.0226 134.202 73.6649 134.245 73.2786C134.288 72.878 134.309 72.506 134.309 72.1627C134.309 71.8479 134.281 71.5045 134.223 71.1325C134.166 70.7463 134.08 70.3886 133.966 70.0595C133.866 69.7304 133.73 69.4586 133.558 69.244C133.401 69.0294 133.215 68.9221 133 68.9221Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M147.522 69.9737C147.322 69.988 147.15 69.9737 147.007 69.9307C146.864 69.8735 146.721 69.8163 146.578 69.7591C146.449 69.7018 146.32 69.6518 146.192 69.6088C146.063 69.5516 145.92 69.5301 145.762 69.5444C145.476 69.5588 145.219 69.6374 144.99 69.7805C144.775 69.9236 144.575 70.1024 144.389 70.317C144.217 70.5316 144.067 70.7749 143.938 71.0467C143.809 71.3042 143.709 71.5618 143.638 71.8193C143.595 71.991 143.559 72.2557 143.53 72.6133C143.516 72.9567 143.509 73.3287 143.509 73.7293C143.495 74.1442 143.488 74.5377 143.488 74.9096C143.488 75.2816 143.473 75.5749 143.445 75.7895C143.43 76.0185 143.395 76.2903 143.337 76.605C143.28 76.9055 143.187 77.1916 143.058 77.4635C142.944 77.7353 142.786 77.9642 142.586 78.1502C142.386 78.3362 142.128 78.4292 141.814 78.4292C141.57 78.4292 141.356 78.3577 141.17 78.2146C140.998 78.0715 140.848 77.8855 140.719 77.6566C140.605 77.4134 140.504 77.1344 140.419 76.8197C140.347 76.5049 140.29 76.183 140.247 75.8539C140.204 75.5105 140.168 75.1672 140.14 74.8238C140.125 74.4804 140.111 74.1585 140.097 73.8581C140.097 73.5433 140.097 73.2572 140.097 72.9996C140.111 72.7421 140.118 72.5347 140.118 72.3773C140.104 71.8765 140.075 71.3758 140.032 70.875C140.004 70.36 139.989 69.8521 139.989 69.3513C139.989 69.0365 140.004 68.686 140.032 68.2997C140.061 67.9134 140.14 67.5557 140.268 67.2267C140.397 66.8833 140.583 66.5972 140.826 66.3683C141.084 66.1393 141.434 66.0249 141.878 66.0249C142.121 66.0249 142.329 66.1036 142.5 66.2609C142.672 66.4183 142.808 66.6115 142.908 66.8404C143.023 67.0693 143.108 67.3125 143.166 67.5701C143.223 67.8276 143.259 68.0637 143.273 68.2783C143.616 67.7203 144.003 67.2696 144.432 66.9262C144.861 66.5686 145.419 66.3754 146.106 66.3468C146.449 66.3325 146.785 66.3683 147.114 66.4541C147.458 66.5256 147.765 66.6544 148.037 66.8404C148.323 67.0121 148.552 67.241 148.724 67.5271C148.91 67.8133 149.01 68.1495 149.024 68.5358C149.053 68.9936 148.917 69.3441 148.617 69.5874C148.316 69.8306 147.951 69.9594 147.522 69.9737Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M159.877 74.18C159.877 74.6664 159.719 75.1457 159.405 75.6179C159.104 76.0757 158.718 76.4906 158.246 76.8626C157.788 77.2203 157.294 77.5136 156.765 77.7425C156.236 77.9571 155.749 78.0644 155.306 78.0644C154.547 78.0644 153.868 77.8784 153.267 77.5064C152.68 77.1201 152.187 76.6337 151.786 76.0471C151.385 75.4605 151.078 74.8167 150.863 74.1156C150.663 73.4002 150.563 72.7063 150.563 72.0339C150.563 71.3185 150.663 70.5531 150.863 69.7376C151.063 68.9221 151.364 68.171 151.765 67.4842C152.179 66.7975 152.695 66.2252 153.31 65.7673C153.939 65.3095 154.683 65.0806 155.542 65.0806C156.028 65.0806 156.493 65.1664 156.937 65.3381C157.38 65.4955 157.766 65.7244 158.095 66.0249C158.425 66.3253 158.689 66.683 158.89 67.0979C159.09 67.5128 159.19 67.9778 159.19 68.4929C159.19 69.1653 159.047 69.7948 158.761 70.3814C158.475 70.968 158.095 71.4759 157.623 71.9051C157.151 72.3344 156.608 72.6849 155.992 72.9567C155.377 73.2142 154.748 73.3573 154.104 73.3859C154.161 73.8008 154.326 74.1013 154.597 74.2873C154.884 74.4733 155.22 74.5663 155.606 74.5663C155.892 74.5663 156.171 74.4947 156.443 74.3517C156.715 74.2086 156.98 74.0512 157.237 73.8795C157.495 73.6935 157.745 73.529 157.988 73.3859C158.246 73.2429 158.503 73.1713 158.761 73.1713C159.047 73.1713 159.304 73.2643 159.533 73.4503C159.762 73.6363 159.877 73.8795 159.877 74.18ZM156.4 68.9221C156.4 68.7361 156.35 68.5429 156.25 68.3426C156.15 68.1423 155.992 68.0422 155.778 68.0422C155.463 68.0422 155.198 68.128 154.984 68.2997C154.769 68.4571 154.59 68.6646 154.447 68.9221C154.304 69.1653 154.19 69.43 154.104 69.7161C154.032 70.0023 153.989 70.267 153.975 70.5102C154.175 70.4673 154.411 70.41 154.683 70.3385C154.969 70.267 155.234 70.174 155.477 70.0595C155.735 69.9307 155.949 69.7734 156.121 69.5874C156.307 69.4014 156.4 69.1796 156.4 68.9221Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M171.909 75.9827C171.909 76.2688 171.788 76.5192 171.545 76.7338C171.316 76.9484 171.015 77.1416 170.643 77.3133C170.285 77.4849 169.871 77.628 169.398 77.7425C168.941 77.8569 168.483 77.9499 168.025 78.0215C167.581 78.093 167.159 78.1431 166.759 78.1717C166.358 78.2146 166.036 78.2361 165.793 78.2361C165.55 78.2361 165.206 78.2289 164.763 78.2146C164.334 78.2003 163.904 78.1431 163.475 78.0429C163.046 77.9571 162.674 77.814 162.359 77.6137C162.045 77.3991 161.887 77.1058 161.887 76.7338C161.887 76.4477 161.987 76.0971 162.188 75.6822C162.388 75.2673 162.645 74.8167 162.96 74.3302C163.275 73.8438 163.625 73.3502 164.012 72.8494C164.398 72.3344 164.777 71.8408 165.149 71.3686C165.521 70.8965 165.872 70.4673 166.201 70.081C166.53 69.6804 166.787 69.3513 166.973 69.0938C166.773 69.1367 166.516 69.2011 166.201 69.2869C165.9 69.3585 165.586 69.43 165.257 69.5015C164.927 69.5731 164.606 69.6374 164.291 69.6947C163.99 69.7376 163.733 69.7591 163.518 69.7591C163.347 69.7591 163.153 69.7304 162.939 69.6732C162.724 69.6017 162.517 69.5087 162.316 69.3942C162.13 69.2798 161.966 69.1438 161.823 68.9865C161.694 68.8291 161.63 68.6503 161.63 68.45C161.63 68.1924 161.744 67.9564 161.973 67.7417C162.202 67.5128 162.502 67.3125 162.874 67.1408C163.246 66.9548 163.661 66.7975 164.119 66.6687C164.577 66.5256 165.028 66.4112 165.471 66.3253C165.915 66.2252 166.337 66.1536 166.737 66.1107C167.138 66.0678 167.46 66.0463 167.703 66.0463C167.975 66.0463 168.304 66.075 168.69 66.1322C169.077 66.1894 169.449 66.2896 169.806 66.4326C170.178 66.5757 170.493 66.7689 170.75 67.0121C171.008 67.2553 171.137 67.5629 171.137 67.9349C171.137 68.0493 171.122 68.1567 171.094 68.2568C171.08 68.3426 171.058 68.4428 171.029 68.5573C171.001 68.6574 170.872 68.8863 170.643 69.244C170.429 69.5874 170.157 70.0023 169.828 70.4887C169.513 70.9609 169.162 71.4759 168.776 72.0339C168.404 72.5776 168.046 73.0926 167.703 73.5791C167.36 74.0655 167.059 74.4947 166.802 74.8667C166.544 75.2387 166.372 75.4891 166.287 75.6179C166.873 75.4605 167.467 75.3317 168.068 75.2316C168.683 75.1171 169.291 75.0599 169.892 75.0599C170.035 75.0599 170.221 75.067 170.45 75.0813C170.679 75.0956 170.901 75.1386 171.115 75.2101C171.33 75.2673 171.516 75.3603 171.673 75.4891C171.831 75.6035 171.909 75.7681 171.909 75.9827Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M176.967 76.8626C176.967 77.0915 176.903 77.3848 176.774 77.7425C176.66 78.1001 176.509 78.4507 176.323 78.7941C176.152 79.1374 175.951 79.4307 175.723 79.6739C175.494 79.9172 175.272 80.0388 175.057 80.0388C174.771 80.0388 174.628 79.8957 174.628 79.6096C174.628 79.4379 174.664 79.2733 174.735 79.116C174.807 78.9586 174.886 78.8012 174.971 78.6438C175.057 78.5007 175.136 78.3505 175.207 78.1931C175.279 78.0501 175.315 77.907 175.315 77.7639C175.1 77.907 174.871 77.9785 174.628 77.9785C174.299 77.9785 174.02 77.8498 173.791 77.5922C173.562 77.3347 173.448 77.0486 173.448 76.7338C173.448 76.276 173.598 75.9111 173.898 75.6393C174.199 75.3532 174.578 75.2101 175.036 75.2101C175.551 75.2101 176.002 75.346 176.388 75.6179C176.774 75.8897 176.967 76.3046 176.967 76.8626Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M195.903 71.6047C195.903 72.2342 195.832 72.9281 195.689 73.6864C195.56 74.4304 195.331 75.1243 195.002 75.7681C194.687 76.4119 194.265 76.9484 193.736 77.3776C193.221 77.8069 192.57 78.0215 191.783 78.0215C191.583 78.0215 191.375 78.0072 191.161 77.9785C190.946 77.9499 190.738 77.8999 190.538 77.8283C190.352 77.7568 190.18 77.6638 190.023 77.5493C189.866 77.4206 189.744 77.256 189.658 77.0557L189.465 80.1461C189.451 80.4751 189.437 80.8686 189.422 81.3264C189.422 81.7843 189.365 82.2206 189.251 82.6355C189.15 83.0504 188.972 83.401 188.714 83.6871C188.471 83.9876 188.113 84.1378 187.641 84.1378C187.369 84.1378 187.14 83.9947 186.954 83.7086C186.768 83.4367 186.618 83.0862 186.504 82.657C186.403 82.2278 186.325 81.7485 186.267 81.2191C186.21 80.6898 186.174 80.1818 186.16 79.6954C186.146 79.209 186.139 78.7654 186.139 78.3648C186.139 77.9642 186.139 77.6709 186.139 77.4849C186.139 76.5264 186.132 75.5749 186.117 74.6307C186.103 73.6721 186.096 72.7135 186.096 71.7549C186.096 71.5832 186.096 71.3185 186.096 70.9609C186.096 70.5889 186.11 70.1883 186.139 69.7591C186.167 69.3298 186.21 68.8863 186.267 68.4285C186.339 67.9707 186.439 67.5557 186.568 67.1838C186.697 66.7975 186.861 66.4899 187.062 66.2609C187.262 66.0177 187.505 65.8961 187.791 65.8961C187.977 65.8961 188.142 65.9533 188.285 66.0678C188.442 66.168 188.571 66.3039 188.671 66.4756C188.786 66.6329 188.879 66.8046 188.95 66.9906C189.022 67.1766 189.079 67.3483 189.122 67.5057C189.565 67.0049 190.073 66.6258 190.645 66.3683C191.232 66.1107 191.854 65.982 192.513 65.982C193.199 65.982 193.757 66.1751 194.187 66.5614C194.63 66.9477 194.973 67.427 195.217 67.9993C195.474 68.5716 195.653 69.1868 195.753 69.8449C195.853 70.4887 195.903 71.0753 195.903 71.6047ZM192.834 71.433C192.834 71.2184 192.813 71.0038 192.77 70.7892C192.741 70.5603 192.677 70.3528 192.577 70.1668C192.491 69.9665 192.362 69.8091 192.191 69.6947C192.019 69.5659 191.804 69.5015 191.547 69.5015C191.203 69.5015 190.839 69.616 190.452 69.8449C190.08 70.0595 189.801 70.3099 189.615 70.596C189.544 70.7105 189.501 70.8965 189.487 71.154C189.472 71.4115 189.465 71.6047 189.465 71.7335C189.465 71.8336 189.465 71.9695 189.465 72.1412C189.479 72.2986 189.494 72.4631 189.508 72.6348C189.522 72.8065 189.537 72.971 189.551 73.1284C189.58 73.2858 189.615 73.4074 189.658 73.4932C189.701 73.622 189.794 73.7436 189.937 73.8581C190.08 73.9582 190.238 74.0512 190.409 74.1371C190.581 74.2229 190.753 74.2873 190.924 74.3302C191.11 74.3731 191.268 74.3946 191.397 74.3946C191.697 74.3946 191.94 74.2801 192.126 74.0512C192.312 73.8223 192.455 73.5505 192.555 73.2357C192.67 72.9209 192.741 72.599 192.77 72.27C192.813 71.9266 192.834 71.6476 192.834 71.433Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M207.872 74.974C207.872 75.2316 207.857 75.5678 207.829 75.9827C207.814 76.3976 207.757 76.8053 207.657 77.2059C207.557 77.5922 207.399 77.9285 207.185 78.2146C206.97 78.5008 206.67 78.6438 206.284 78.6438C205.754 78.6438 205.346 78.4721 205.06 78.1288C204.774 77.7854 204.638 77.3562 204.653 76.8411C204.195 77.2417 203.672 77.5565 203.086 77.7854C202.514 78.0143 201.927 78.1288 201.326 78.1288C200.911 78.1288 200.518 78.0286 200.146 77.8283C199.774 77.628 199.445 77.3705 199.159 77.0557C198.872 76.741 198.643 76.3904 198.472 76.0042C198.3 75.6035 198.214 75.2101 198.214 74.8238C198.214 74.1371 198.422 73.5362 198.837 73.0211C199.266 72.506 199.788 72.0697 200.403 71.712C201.018 71.34 201.669 71.0467 202.356 70.8321C203.057 70.6175 203.68 70.4744 204.223 70.4029C204.223 70.3313 204.223 70.267 204.223 70.2097C204.238 70.1525 204.245 70.0881 204.245 70.0166C204.245 69.5731 204.123 69.2154 203.88 68.9436C203.637 68.6717 203.293 68.5358 202.85 68.5358C202.492 68.5358 202.185 68.6002 201.927 68.7289C201.669 68.8434 201.426 68.9793 201.197 69.1367C200.968 69.2798 200.739 69.4157 200.511 69.5444C200.282 69.6589 200.024 69.7161 199.738 69.7161C199.423 69.7161 199.151 69.616 198.922 69.4157C198.708 69.2154 198.601 68.9579 198.601 68.6431C198.601 68.171 198.736 67.7417 199.008 67.3554C199.294 66.9692 199.645 66.6472 200.06 66.3897C200.489 66.1179 200.947 65.9104 201.433 65.7673C201.934 65.61 202.392 65.5313 202.807 65.5313C203.193 65.5313 203.579 65.5814 203.966 65.6815C204.352 65.7674 204.717 65.9104 205.06 66.1107C205.404 66.2967 205.711 66.5328 205.983 66.8189C206.269 67.0908 206.498 67.4127 206.67 67.7847C206.927 68.314 207.135 68.8792 207.292 69.4801C207.45 70.0667 207.571 70.6747 207.657 71.3042C207.743 71.9194 207.8 72.5418 207.829 73.1713C207.857 73.7865 207.872 74.3874 207.872 74.974ZM204.438 74.2873L204.374 72.8279C204.345 72.8279 204.316 72.8279 204.288 72.8279C204.259 72.8136 204.23 72.8065 204.202 72.8065C204.016 72.8065 203.78 72.8566 203.494 72.9567C203.222 73.0426 202.957 73.1713 202.7 73.343C202.442 73.5004 202.22 73.6792 202.034 73.8795C201.863 74.0798 201.777 74.2873 201.777 74.5019C201.777 74.7022 201.848 74.8381 201.991 74.9096C202.134 74.9812 202.299 75.017 202.485 75.017C202.8 75.017 203.136 74.9383 203.494 74.7809C203.851 74.6092 204.166 74.4447 204.438 74.2873Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M218.144 69.9737C217.944 69.988 217.772 69.9737 217.629 69.9307C217.486 69.8735 217.343 69.8163 217.2 69.7591C217.071 69.7018 216.943 69.6518 216.814 69.6088C216.685 69.5516 216.542 69.5301 216.385 69.5444C216.099 69.5588 215.841 69.6374 215.612 69.7805C215.397 69.9236 215.197 70.1024 215.011 70.317C214.84 70.5316 214.689 70.7749 214.561 71.0467C214.432 71.3042 214.332 71.5618 214.26 71.8193C214.217 71.991 214.181 72.2557 214.153 72.6133C214.138 72.9567 214.131 73.3287 214.131 73.7293C214.117 74.1442 214.11 74.5377 214.11 74.9096C214.11 75.2816 214.096 75.5749 214.067 75.7895C214.053 76.0185 214.017 76.2903 213.96 76.605C213.902 76.9055 213.809 77.1916 213.681 77.4635C213.566 77.7353 213.409 77.9642 213.208 78.1502C213.008 78.3362 212.751 78.4292 212.436 78.4292C212.193 78.4292 211.978 78.3577 211.792 78.2146C211.62 78.0715 211.47 77.8855 211.341 77.6566C211.227 77.4134 211.127 77.1344 211.041 76.8197C210.969 76.5049 210.912 76.183 210.869 75.8539C210.826 75.5105 210.791 75.1672 210.762 74.8238C210.748 74.4804 210.733 74.1585 210.719 73.8581C210.719 73.5433 210.719 73.2572 210.719 72.9996C210.733 72.7421 210.741 72.5347 210.741 72.3773C210.726 71.8765 210.698 71.3758 210.655 70.875C210.626 70.36 210.612 69.8521 210.612 69.3513C210.612 69.0365 210.626 68.686 210.655 68.2997C210.683 67.9134 210.762 67.5557 210.891 67.2267C211.019 66.8833 211.205 66.5972 211.449 66.3683C211.706 66.1393 212.057 66.0249 212.5 66.0249C212.744 66.0249 212.951 66.1036 213.123 66.2609C213.294 66.4183 213.43 66.6115 213.53 66.8404C213.645 67.0693 213.731 67.3125 213.788 67.5701C213.845 67.8276 213.881 68.0637 213.895 68.2783C214.239 67.7203 214.625 67.2696 215.054 66.9262C215.483 66.5686 216.041 66.3754 216.728 66.3468C217.071 66.3325 217.408 66.3683 217.737 66.4541C218.08 66.5256 218.388 66.6544 218.66 66.8404C218.946 67.0121 219.175 67.241 219.346 67.5271C219.532 67.8133 219.632 68.1495 219.647 68.5358C219.675 68.9936 219.539 69.3441 219.239 69.5874C218.939 69.8306 218.574 69.9594 218.144 69.9737Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M226.507 78.7726C225.491 78.7726 224.697 78.6367 224.125 78.3648C223.567 78.1073 223.145 77.7353 222.859 77.2489C222.587 76.7624 222.423 76.1758 222.365 75.4891C222.308 74.8023 222.28 74.0369 222.28 73.1928C222.28 72.5203 222.301 71.8479 222.344 71.1755C222.387 70.4887 222.451 69.7591 222.537 68.9865C222.337 68.9865 222.179 68.9936 222.065 69.0079C221.95 69.0079 221.857 69.0079 221.786 69.0079C221.328 69.0079 220.935 68.9078 220.606 68.7075C220.262 68.5072 220.091 68.1996 220.091 67.7847C220.091 67.5271 220.191 67.2982 220.391 67.0979C220.577 66.8976 220.82 66.7259 221.121 66.5829C221.421 66.4398 221.743 66.3253 222.086 66.2395C222.444 66.1536 222.78 66.0964 223.095 66.0678C223.095 65.6672 223.124 65.2237 223.181 64.7372C223.238 64.2508 223.338 63.8001 223.481 63.3852C223.639 62.956 223.846 62.5983 224.104 62.3122C224.361 62.026 224.69 61.8829 225.091 61.8829C225.32 61.8829 225.52 61.9545 225.692 62.0976C225.878 62.2263 226.028 62.398 226.142 62.6126C226.257 62.8129 226.343 63.0418 226.4 63.2994C226.457 63.5569 226.486 63.8073 226.486 64.0505C226.486 64.3366 226.464 64.6299 226.421 64.9304C226.379 65.2308 226.3 65.6028 226.185 66.0463C226.429 66.0177 226.593 66.0034 226.679 66.0034C226.765 65.9891 226.844 65.982 226.915 65.982C227.158 65.982 227.409 66.0034 227.666 66.0463C227.938 66.0893 228.181 66.1608 228.396 66.2609C228.625 66.3611 228.811 66.497 228.954 66.6687C229.097 66.8261 229.168 67.0192 229.168 67.2481C229.168 67.5057 229.061 67.7346 228.847 67.9349C228.646 68.1352 228.389 68.3069 228.074 68.45C227.759 68.593 227.423 68.7075 227.065 68.7933C226.708 68.8649 226.371 68.9149 226.057 68.9436C225.971 69.5301 225.906 70.0738 225.863 70.5746C225.835 71.061 225.799 71.5546 225.756 72.0554C225.728 72.2986 225.699 72.549 225.67 72.8065C225.656 73.0497 225.649 73.3001 225.649 73.5576C225.649 73.7436 225.656 73.9654 225.67 74.2229C225.685 74.4661 225.735 74.7022 225.821 74.9311C225.906 75.16 226.042 75.3603 226.228 75.532C226.414 75.6894 226.672 75.7681 227.001 75.7681C227.201 75.7681 227.409 75.7538 227.623 75.7252C227.838 75.6822 228.052 75.6608 228.267 75.6608C228.639 75.6608 228.904 75.7895 229.061 76.0471C229.233 76.3046 229.319 76.6337 229.319 77.0343C229.319 77.3347 229.226 77.5994 229.04 77.8283C228.868 78.0429 228.646 78.2146 228.374 78.3434C228.103 78.4864 227.795 78.5937 227.452 78.6653C227.123 78.7368 226.808 78.7726 226.507 78.7726Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M240.407 74.974C240.407 75.2316 240.393 75.5678 240.364 75.9827C240.35 76.3976 240.293 76.8053 240.192 77.2059C240.092 77.5922 239.935 77.9285 239.72 78.2146C239.506 78.5008 239.205 78.6438 238.819 78.6438C238.29 78.6438 237.882 78.4721 237.596 78.1288C237.31 77.7854 237.174 77.3562 237.188 76.8411C236.73 77.2417 236.208 77.5565 235.621 77.7854C235.049 78.0143 234.462 78.1288 233.861 78.1288C233.447 78.1288 233.053 78.0286 232.681 77.8283C232.309 77.628 231.98 77.3705 231.694 77.0557C231.408 76.741 231.179 76.3904 231.007 76.0042C230.836 75.6035 230.75 75.2101 230.75 74.8238C230.75 74.1371 230.957 73.5362 231.372 73.0211C231.801 72.506 232.323 72.0697 232.939 71.712C233.554 71.34 234.205 71.0467 234.892 70.8321C235.593 70.6175 236.215 70.4744 236.759 70.4029C236.759 70.3313 236.759 70.267 236.759 70.2097C236.773 70.1525 236.78 70.0881 236.78 70.0166C236.78 69.5731 236.659 69.2154 236.415 68.9436C236.172 68.6717 235.829 68.5358 235.385 68.5358C235.028 68.5358 234.72 68.6002 234.462 68.7289C234.205 68.8434 233.962 68.9793 233.733 69.1367C233.504 69.2798 233.275 69.4157 233.046 69.5444C232.817 69.6589 232.56 69.7161 232.273 69.7161C231.959 69.7161 231.687 69.616 231.458 69.4157C231.243 69.2154 231.136 68.9579 231.136 68.6431C231.136 68.171 231.272 67.7417 231.544 67.3554C231.83 66.9692 232.18 66.6472 232.595 66.3897C233.025 66.1179 233.482 65.9104 233.969 65.7673C234.47 65.61 234.927 65.5313 235.342 65.5313C235.729 65.5313 236.115 65.5814 236.501 65.6815C236.887 65.7674 237.252 65.9104 237.596 66.1107C237.939 66.2967 238.247 66.5328 238.518 66.8189C238.805 67.0908 239.034 67.4127 239.205 67.7847C239.463 68.314 239.67 68.8792 239.828 69.4801C239.985 70.0667 240.107 70.6747 240.192 71.3042C240.278 71.9194 240.336 72.5418 240.364 73.1713C240.393 73.7865 240.407 74.3874 240.407 74.974ZM236.973 74.2873L236.909 72.8279C236.88 72.8279 236.852 72.8279 236.823 72.8279C236.794 72.8136 236.766 72.8065 236.737 72.8065C236.551 72.8065 236.315 72.8566 236.029 72.9567C235.757 73.0426 235.493 73.1713 235.235 73.343C234.977 73.5004 234.756 73.6792 234.57 73.8795C234.398 74.0798 234.312 74.2873 234.312 74.5019C234.312 74.7022 234.384 74.8381 234.527 74.9096C234.67 74.9812 234.834 75.017 235.02 75.017C235.335 75.017 235.671 74.9383 236.029 74.7809C236.387 74.6092 236.701 74.4447 236.973 74.2873Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M252.955 70.6819C252.955 71.4115 252.94 72.1412 252.912 72.8709C252.897 73.6005 252.862 74.3302 252.805 75.0599C252.762 75.6894 252.704 76.3618 252.633 77.0772C252.561 77.7925 252.447 78.5008 252.289 79.2018C252.132 79.9172 251.925 80.5968 251.667 81.2406C251.41 81.8987 251.066 82.4782 250.637 82.9789C250.222 83.4797 249.714 83.8803 249.113 84.1807C248.512 84.4812 247.797 84.6314 246.967 84.6314C246.581 84.6314 246.145 84.567 245.658 84.4382C245.186 84.3238 244.735 84.1521 244.306 83.9232C243.891 83.6943 243.533 83.4081 243.233 83.0647C242.947 82.7357 242.804 82.3494 242.804 81.9059C242.804 81.5768 242.918 81.2692 243.147 80.983C243.39 80.7112 243.698 80.5753 244.07 80.5753C244.299 80.5753 244.513 80.6111 244.714 80.6826C244.928 80.7684 245.136 80.8614 245.336 80.9616C245.551 81.0617 245.751 81.1476 245.937 81.2191C246.137 81.305 246.338 81.3479 246.538 81.3479C247.067 81.3479 247.511 81.212 247.869 80.9401C248.226 80.6826 248.512 80.3464 248.727 79.9315C248.942 79.5309 249.099 79.0873 249.199 78.6009C249.314 78.1288 249.392 77.6781 249.435 77.2489C249.149 77.5779 248.813 77.8069 248.427 77.9356C248.055 78.0501 247.661 78.1073 247.246 78.1073C246.488 78.1073 245.844 77.9785 245.315 77.721C244.785 77.4492 244.356 77.0843 244.027 76.6265C243.698 76.1544 243.455 75.6107 243.297 74.9955C243.14 74.3803 243.061 73.715 243.061 72.9996C243.061 72.5561 243.104 72.0554 243.19 71.4974C243.29 70.9394 243.433 70.3743 243.619 69.802C243.805 69.2297 244.034 68.6717 244.306 68.128C244.592 67.5844 244.921 67.1051 245.293 66.6902C245.665 66.2753 246.08 65.939 246.538 65.6815C247.01 65.424 247.525 65.2952 248.083 65.2952C248.627 65.2952 249.106 65.4526 249.521 65.7673C249.95 66.0821 250.201 66.5256 250.272 67.0979C250.43 66.7975 250.637 66.5042 250.895 66.218C251.152 65.9176 251.467 65.7673 251.839 65.7673C252.039 65.7673 252.204 65.8675 252.332 66.0678C252.475 66.2681 252.583 66.5328 252.654 66.8619C252.74 67.1766 252.805 67.5271 252.847 67.9134C252.89 68.2854 252.919 68.6574 252.933 69.0294C252.948 69.3871 252.955 69.7161 252.955 70.0166C252.955 70.317 252.955 70.5388 252.955 70.6819ZM249.693 72.0768C249.693 71.8622 249.657 71.5832 249.585 71.2399C249.528 70.8965 249.435 70.5674 249.306 70.2527C249.192 69.9379 249.042 69.6661 248.856 69.4371C248.67 69.2082 248.448 69.0938 248.19 69.0938C247.861 69.0938 247.568 69.2082 247.311 69.4371C247.067 69.6661 246.86 69.9451 246.688 70.2741C246.517 70.5889 246.381 70.9323 246.28 71.3042C246.195 71.6619 246.152 71.9695 246.152 72.2271C246.152 72.413 246.166 72.6634 246.195 72.9782C246.223 73.2929 246.28 73.6005 246.366 73.901C246.466 74.2014 246.595 74.459 246.753 74.6736C246.91 74.8882 247.117 74.9955 247.375 74.9955C247.761 74.9955 248.097 74.9025 248.384 74.7165C248.67 74.5305 248.906 74.2944 249.092 74.0083C249.292 73.7221 249.442 73.4074 249.542 73.064C249.643 72.7206 249.693 72.3916 249.693 72.0768Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M265.009 74.18C265.009 74.6664 264.851 75.1457 264.537 75.6179C264.236 76.0757 263.85 76.4906 263.378 76.8626C262.92 77.2203 262.426 77.5136 261.897 77.7425C261.368 77.9571 260.881 78.0644 260.438 78.0644C259.679 78.0644 259 77.8784 258.399 77.5064C257.812 77.1201 257.319 76.6337 256.918 76.0471C256.518 75.4605 256.21 74.8167 255.995 74.1156C255.795 73.4002 255.695 72.7063 255.695 72.0339C255.695 71.3185 255.795 70.5531 255.995 69.7376C256.196 68.9221 256.496 68.171 256.897 67.4842C257.312 66.7975 257.827 66.2252 258.442 65.7673C259.071 65.3095 259.815 65.0806 260.674 65.0806C261.16 65.0806 261.625 65.1664 262.069 65.3381C262.512 65.4955 262.899 65.7244 263.228 66.0249C263.557 66.3253 263.821 66.683 264.022 67.0979C264.222 67.5128 264.322 67.9778 264.322 68.4929C264.322 69.1653 264.179 69.7948 263.893 70.3814C263.607 70.968 263.228 71.4759 262.755 71.9051C262.283 72.3344 261.74 72.6849 261.124 72.9567C260.509 73.2142 259.88 73.3573 259.236 73.3859C259.293 73.8008 259.458 74.1013 259.729 74.2873C260.016 74.4733 260.352 74.5663 260.738 74.5663C261.024 74.5663 261.303 74.4947 261.575 74.3517C261.847 74.2086 262.112 74.0512 262.369 73.8795C262.627 73.6935 262.877 73.529 263.12 73.3859C263.378 73.2429 263.635 73.1713 263.893 73.1713C264.179 73.1713 264.437 73.2643 264.665 73.4503C264.894 73.6363 265.009 73.8795 265.009 74.18ZM261.532 68.9221C261.532 68.7361 261.482 68.5429 261.382 68.3426C261.282 68.1423 261.124 68.0422 260.91 68.0422C260.595 68.0422 260.33 68.128 260.116 68.2997C259.901 68.4571 259.722 68.6646 259.579 68.9221C259.436 69.1653 259.322 69.43 259.236 69.7161C259.164 70.0023 259.121 70.267 259.107 70.5102C259.307 70.4673 259.544 70.41 259.815 70.3385C260.101 70.267 260.366 70.174 260.609 70.0595C260.867 69.9307 261.082 69.7734 261.253 69.5874C261.439 69.4014 261.532 69.1796 261.532 68.9221Z"
                                        fill="#008E21"/>
                                    <path
                                        d="M277.041 75.9827C277.041 76.2688 276.92 76.5192 276.677 76.7338C276.448 76.9484 276.147 77.1416 275.775 77.3133C275.418 77.4849 275.003 77.628 274.531 77.7425C274.073 77.8569 273.615 77.9499 273.157 78.0215C272.714 78.093 272.291 78.1431 271.891 78.1717C271.49 78.2146 271.168 78.2361 270.925 78.2361C270.682 78.2361 270.339 78.2289 269.895 78.2146C269.466 78.2003 269.037 78.1431 268.607 78.0429C268.178 77.9571 267.806 77.814 267.491 77.6137C267.177 77.3991 267.019 77.1058 267.019 76.7338C267.019 76.4477 267.119 76.0971 267.32 75.6822C267.52 75.2673 267.778 74.8167 268.092 74.3302C268.407 73.8438 268.758 73.3502 269.144 72.8494C269.53 72.3344 269.909 71.8408 270.281 71.3686C270.653 70.8965 271.004 70.4673 271.333 70.081C271.662 69.6804 271.92 69.3513 272.105 69.0938C271.905 69.1367 271.648 69.2011 271.333 69.2869C271.032 69.3585 270.718 69.43 270.389 69.5015C270.06 69.5731 269.738 69.6374 269.423 69.6947C269.122 69.7376 268.865 69.7591 268.65 69.7591C268.479 69.7591 268.285 69.7304 268.071 69.6732C267.856 69.6017 267.649 69.5087 267.448 69.3942C267.262 69.2798 267.098 69.1438 266.955 68.9865C266.826 68.8291 266.762 68.6503 266.762 68.45C266.762 68.1924 266.876 67.9564 267.105 67.7417C267.334 67.5128 267.634 67.3125 268.006 67.1408C268.378 66.9548 268.793 66.7975 269.251 66.6687C269.709 66.5256 270.16 66.4112 270.603 66.3253C271.047 66.2252 271.469 66.1536 271.869 66.1107C272.27 66.0678 272.592 66.0463 272.835 66.0463C273.107 66.0463 273.436 66.075 273.822 66.1322C274.209 66.1894 274.581 66.2896 274.938 66.4326C275.31 66.5757 275.625 66.7689 275.883 67.0121C276.14 67.2553 276.269 67.5629 276.269 67.9349C276.269 68.0493 276.255 68.1567 276.226 68.2568C276.212 68.3426 276.19 68.4428 276.162 68.5573C276.133 68.6574 276.004 68.8863 275.775 69.244C275.561 69.5874 275.289 70.0023 274.96 70.4887C274.645 70.9609 274.294 71.4759 273.908 72.0339C273.536 72.5776 273.179 73.0926 272.835 73.5791C272.492 74.0655 272.191 74.4947 271.934 74.8667C271.676 75.2387 271.505 75.4891 271.419 75.6179C272.005 75.4605 272.599 75.3317 273.2 75.2316C273.815 75.1171 274.423 75.0599 275.024 75.0599C275.167 75.0599 275.353 75.067 275.582 75.0813C275.811 75.0956 276.033 75.1386 276.247 75.2101C276.462 75.2673 276.648 75.3603 276.805 75.4891C276.963 75.6035 277.041 75.7681 277.041 75.9827Z"
                                        fill="#008E21"/>
                                </svg>

                            </div>
                            <div>
                                <h3 className={"text-2xl font-extrabold"}>Moove</h3>
                                <span className={" font-light text-secondary "}>Mars 2024</span>
                            </div>
                        </div>
                        <div className={"w-full flex flex-col  justify-center"}>
                            <div
                                className={"w-full h-[330px] bg-gray-100  flex items-center justify-center rounded-xl border-1 border-transparent gap-1 bg-amber-500 bg-opacity-10 mb-2"}>
                                <svg width="132" height="126" viewBox="0 0 132 126" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1242_676)">
                                        <path
                                            d="M3.93067 23.4619C-6.38955 54.4188 4.15025 91.4585 29.1823 109.707C38.5144 117.419 51.7989 123.61 62.8877 126C62.6681 125.348 62.1191 124.479 61.4604 123.502C60.3625 121.981 59.594 121.112 58.7157 119.808C58.2765 119.265 57.6178 118.614 55.6416 115.355C51.5793 108.838 49.7129 105.471 47.7367 101.669C41.0395 89.0688 39.3927 78.3154 39.3927 68.8654C39.3927 57.7861 39.6123 54.7447 37.8556 47.3585C36.099 40.5154 30.7193 38.0171 23.4732 33.1292C16.0075 28.2412 9.09078 25.3085 3.93067 23.4619Z"
                                            fill="url(#paint0_linear_1242_676)"/>
                                        <path
                                            d="M71.2312 125.131C69.255 116.332 67.6082 102.537 71.2312 86.6788C74.0858 74.4047 78.9165 65.9323 80.1242 63.8685C81.1123 62.2392 85.3941 55.1788 93.0794 47.4668C95.1654 45.403 98.5688 42.0357 103.509 38.5599C113.39 31.4995 131.506 25.5254 131.506 25.5254C131.506 25.5254 132.604 31.4995 131.506 47.2495C130.408 62.3478 130.188 71.1461 125.797 81.6823C124.589 84.5064 121.295 92.1099 114.598 100.256C108.121 108.077 101.753 112.639 100.216 113.617C99.1178 114.377 95.9339 116.441 91.5423 118.722C87.0409 120.786 80.1242 123.61 71.2312 125.131Z"
                                            fill="url(#paint1_linear_1242_676)"/>
                                        <path
                                            d="M67.9378 0C63.7658 4.23621 58.0568 11.0793 53.226 20.5293C44.0037 38.4517 43.6743 54.7448 43.6743 61.8052C43.6743 68.1052 44.1135 80.5966 49.3834 95.369C54.3239 109.164 61.3504 119.157 66.4008 125.24C64.3148 115.681 63.9854 107.534 64.205 101.669C64.3148 96.9983 64.6441 89.069 67.6084 79.2931C68.9259 75.0569 70.7923 69.0828 74.9643 62.3483C82.1007 50.9431 85.5041 51.9207 86.9314 45.4035C88.7978 37.2569 84.516 28.5672 80.6734 20.7466C79.2461 17.9224 77.9287 15.5328 76.9406 14.0121L67.9378 0Z"
                                            fill="url(#paint2_linear_1242_676)"/>
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_1242_676" x1="0.000200537" y1="74.7309"
                                                        x2="62.7998" y2="74.7309" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FFEF26"/>
                                            <stop offset="0.04" stopColor="#FEE921"/>
                                            <stop offset="0.2" stopColor="#FDD70E"/>
                                            <stop offset="0.37" stopColor="#FDCB03"/>
                                            <stop offset="0.56" stopColor="#FDC800"/>
                                            <stop offset="0.87" stopColor="#F18F34"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_1242_676" x1="69.0903" y1="75.328" x2="132"
                                                        y2="75.328" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.08" stopColor="#F18F34"/>
                                            <stop offset="0.61" stopColor="#E95F32"/>
                                            <stop offset="1" stopColor="#E3312D"/>
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_1242_676" x1="43.5645" y1="62.6198"
                                                        x2="87.3267"
                                                        y2="62.6198" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.04" stopColor="#FDC800"/>
                                            <stop offset="0.48" stopColor="#F18F34"/>
                                            <stop offset="0.92" stopColor="#E95F32"/>
                                        </linearGradient>
                                        <clipPath id="clip0_1242_676">
                                            <rect width="132" height="126" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <h3 className={"text-2xl font-extrabold"}>perf'N Zen</h3>
                                <span className={" font-light text-secondary "}>2022 - 2023</span>
                            </div>
                        </div>
                        <div className={"w-full flex flex-col  justify-center"}>
                            <div
                                className={"w-full h-[330px] bg-gray-100  flex items-center justify-center rounded-xl border-1 border-transparent gap-1 bg-blue-500 bg-opacity-30 mb-2"}>
                                <svg width="176" height="90" viewBox="0 0 176 90" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M35.93 0.229492C44.0875 0.229492 51.0335 3.40184 56.768 9.74653C62.5833 16.0912 65.4909 23.7955 65.4909 32.8593C65.4909 42.088 62.5833 49.8334 56.768 56.0957C51.1143 62.358 44.1683 65.4892 35.93 65.4892C27.4494 65.4892 20.9073 62.4816 16.3035 56.4665V73.5458H0.675003V1.95986H16.3035V9.25214C20.9073 3.23704 27.4494 0.229492 35.93 0.229492ZM21.0284 45.4663C24.1783 48.6799 28.1763 50.2866 33.0224 50.2866C37.8684 50.2866 41.8664 48.6799 45.0164 45.4663C48.2471 42.1704 49.8624 37.968 49.8624 32.8593C49.8624 27.7506 48.2471 23.5895 45.0164 20.3759C41.8664 17.08 37.8684 15.432 33.0224 15.432C28.1763 15.432 24.1783 17.08 21.0284 20.3759C17.8785 23.5895 16.3035 27.7506 16.3035 32.8593C16.3035 37.968 17.8785 42.1704 21.0284 45.4663Z"
                                        fill="#17222F"/>
                                    <path
                                        d="M129.505 40.028L139.803 1.95986H156.401L137.138 63.7588H122.236L111.09 26.3086L99.9446 63.7588H85.043L65.7799 1.95986H82.3777L92.6755 39.9044L103.7 1.95986H118.481L129.505 40.028Z"
                                        fill="#17222F"/>
                                    <path
                                        d="M174.268 60.7925C174.268 63.6764 173.259 66.1484 171.239 68.2083C169.22 70.2683 166.797 71.2983 163.97 71.2983C161.143 71.2983 158.72 70.2683 156.701 68.2083C154.682 66.1484 153.672 63.6764 153.672 60.7925C153.672 57.9085 154.682 55.4365 156.701 53.3766C158.72 51.3166 161.143 50.2866 163.97 50.2866C166.797 50.2866 169.22 51.3166 171.239 53.3766C173.259 55.4365 174.268 57.9085 174.268 60.7925Z"
                                        fill="#2181FA"/>
                                    <path
                                        d="M5.46297 79.5937C7.23478 79.5937 8.69552 81.1491 8.69552 83.1644C8.69552 85.1797 7.23478 86.7351 5.46297 86.7351C4.55677 86.7351 3.89403 86.424 3.4477 85.91V89.2508H1.4189V79.7831H3.4477V80.4188C3.89403 79.9048 4.55677 79.5937 5.46297 79.5937ZM5.05721 84.8145C5.99045 84.8145 6.66672 84.1788 6.66672 83.1644C6.66672 82.15 5.99045 81.5143 5.05721 81.5143C4.12396 81.5143 3.4477 82.15 3.4477 83.1644C3.4477 84.1788 4.12396 84.8145 5.05721 84.8145Z"
                                        fill="black"/>
                                    <path
                                        d="M11.6582 83.9759C11.9152 84.6792 12.5373 84.9227 13.2812 84.9227C13.8358 84.9227 14.3092 84.7063 14.5797 84.4087L16.2027 85.342C15.54 86.2617 14.5391 86.7351 13.2542 86.7351C10.9414 86.7351 9.50767 85.1797 9.50767 83.1644C9.50767 81.1491 10.9684 79.5937 13.1054 79.5937C15.0801 79.5937 16.5408 81.1221 16.5408 83.1644C16.5408 83.4484 16.5138 83.7189 16.4597 83.9759H11.6582ZM11.6176 82.4611H14.5256C14.3092 81.6766 13.7005 81.3926 13.0919 81.3926C12.3209 81.3926 11.807 81.7713 11.6176 82.4611Z"
                                        fill="black"/>
                                    <path
                                        d="M19.7203 80.9868C19.9908 80.0806 20.897 79.6478 21.7491 79.6478V81.9471C20.9106 81.8119 19.7203 82.15 19.7203 83.489V86.5457H17.6915V79.7831H19.7203V80.9868Z"
                                        fill="black"/>
                                    <path
                                        d="M26.4169 78.8363C25.6595 78.7687 25.1591 78.9986 25.1591 79.7831H26.4169V81.7307H25.1591V86.5457H23.1303V81.7307H22.2241V79.7831H23.1303C23.1303 77.8895 24.1717 76.7534 26.4169 76.8887V78.8363Z"
                                        fill="black"/>
                                    <path
                                        d="M30.2098 86.7351C28.2216 86.7351 26.6256 85.1797 26.6256 83.1644C26.6256 81.1491 28.2216 79.5937 30.2098 79.5937C32.1981 79.5937 33.794 81.1491 33.794 83.1644C33.794 85.1797 32.1981 86.7351 30.2098 86.7351ZM30.2098 84.7604C31.089 84.7604 31.7653 84.1247 31.7653 83.1644C31.7653 82.2041 31.089 81.5684 30.2098 81.5684C29.3307 81.5684 28.6544 82.2041 28.6544 83.1644C28.6544 84.1247 29.3307 84.7604 30.2098 84.7604Z"
                                        fill="black"/>
                                    <path
                                        d="M36.9704 80.9868C37.2409 80.0806 38.1471 79.6478 38.9992 79.6478V81.9471C38.1606 81.8119 36.9704 82.15 36.9704 83.489V86.5457H34.9416V79.7831H36.9704V80.9868Z"
                                        fill="black"/>
                                    <path
                                        d="M47.5217 79.5937C49.0771 79.5937 50.0915 80.7028 50.0915 82.3935V86.5457H48.0627V82.5693C48.0627 81.893 47.7381 81.4602 47.0889 81.4602C46.4126 81.4602 46.0339 81.9336 46.0339 82.7316V86.5457H44.0051V82.5693C44.0051 81.893 43.6805 81.4602 43.0313 81.4602C42.355 81.4602 41.9763 81.9336 41.9763 82.7316V86.5457H39.9475V79.7831H41.9763V80.4053C42.2874 79.9454 42.8825 79.5937 43.7887 79.5937C44.5867 79.5937 45.1818 79.9183 45.5605 80.4864C45.9392 79.9454 46.5614 79.5937 47.5217 79.5937Z"
                                        fill="black"/>
                                    <path
                                        d="M56.3881 79.7831H58.4169V86.5457H56.3881V85.91C55.9417 86.424 55.279 86.7351 54.3728 86.7351C52.601 86.7351 51.1403 85.1797 51.1403 83.1644C51.1403 81.1491 52.601 79.5937 54.3728 79.5937C55.279 79.5937 55.9417 79.9048 56.3881 80.4188V79.7831ZM54.7786 84.8145C55.7118 84.8145 56.3881 84.1788 56.3881 83.1644C56.3881 82.15 55.7118 81.5143 54.7786 81.5143C53.8453 81.5143 53.1691 82.15 53.1691 83.1644C53.1691 84.1788 53.8453 84.8145 54.7786 84.8145Z"
                                        fill="black"/>
                                    <path
                                        d="M63.8682 79.5937C65.2343 79.5937 66.3974 80.5676 66.3974 82.3935V86.5457H64.3686V82.691C64.3686 81.8525 63.8412 81.4602 63.1919 81.4602C62.448 81.4602 61.9341 81.893 61.9341 82.8533V86.5457H59.9053V79.7831H61.9341V80.4188C62.2993 79.9183 62.9755 79.5937 63.8682 79.5937Z"
                                        fill="black"/>
                                    <path
                                        d="M71.0367 86.7351C68.9809 86.7351 67.4525 85.1797 67.4525 83.1644C67.4525 81.1491 68.9809 79.5937 71.0367 79.5937C72.3487 79.5937 73.5119 80.2835 74.0934 81.325L72.3216 82.3529C72.0917 81.8795 71.6048 81.5955 71.0097 81.5955C70.1305 81.5955 69.4813 82.2312 69.4813 83.1644C69.4813 84.0977 70.1305 84.7334 71.0097 84.7334C71.6048 84.7334 72.1052 84.4493 72.3216 83.9759L74.0934 84.9903C73.5119 86.0453 72.3622 86.7351 71.0367 86.7351Z"
                                        fill="black"/>
                                    <path
                                        d="M76.5902 83.9759C76.8472 84.6792 77.4694 84.9227 78.2133 84.9227C78.7678 84.9227 79.2412 84.7063 79.5117 84.4087L81.1347 85.342C80.472 86.2617 79.4711 86.7351 78.1862 86.7351C75.8734 86.7351 74.4397 85.1797 74.4397 83.1644C74.4397 81.1491 75.9004 79.5937 78.0374 79.5937C80.0121 79.5937 81.4729 81.1221 81.4729 83.1644C81.4729 83.4484 81.4458 83.7189 81.3917 83.9759H76.5902ZM76.5497 82.4611H79.4576C79.2412 81.6766 78.6326 81.3926 78.0239 81.3926C77.253 81.3926 76.739 81.7713 76.5497 82.4611Z"
                                        fill="black"/>
                                    <path
                                        d="M93.4438 79.7831H95.6079L93.4438 86.5457H91.5503L90.4683 82.9345L89.3862 86.5457H87.4927L85.3286 79.7831H87.4927L88.4665 83.4079L89.5215 79.7831H91.415L92.47 83.4079L93.4438 79.7831Z"
                                        fill="black"/>
                                    <path
                                        d="M97.9613 83.9759C98.2183 84.6792 98.8404 84.9227 99.5843 84.9227C100.139 84.9227 100.612 84.7063 100.883 84.4087L102.506 85.342C101.843 86.2617 100.842 86.7351 99.5573 86.7351C97.2444 86.7351 95.8108 85.1797 95.8108 83.1644C95.8108 81.1491 97.2715 79.5937 99.4085 79.5937C101.383 79.5937 102.844 81.1221 102.844 83.1644C102.844 83.4484 102.817 83.7189 102.763 83.9759H97.9613ZM97.9207 82.4611H100.829C100.612 81.6766 100.004 81.3926 99.395 81.3926C98.624 81.3926 98.1101 81.7713 97.9207 82.4611Z"
                                        fill="black"/>
                                    <path
                                        d="M108.039 79.5937C109.811 79.5937 111.271 81.1491 111.271 83.1644C111.271 85.1797 109.811 86.7351 108.039 86.7351C107.132 86.7351 106.47 86.424 106.023 85.91V86.5457H103.995V77.078H106.023V80.4188C106.47 79.9048 107.132 79.5937 108.039 79.5937ZM107.633 84.8145C108.566 84.8145 109.242 84.1788 109.242 83.1644C109.242 82.15 108.566 81.5143 107.633 81.5143C106.7 81.5143 106.023 82.15 106.023 83.1644C106.023 84.1788 106.7 84.8145 107.633 84.8145Z"
                                        fill="black"/>
                                    <path
                                        d="M119.996 79.5937C121.551 79.5937 122.566 80.7028 122.566 82.3935V86.5457H120.537V82.5693C120.537 81.893 120.212 81.4602 119.563 81.4602C118.887 81.4602 118.508 81.9336 118.508 82.7316V86.5457H116.479V82.5693C116.479 81.893 116.155 81.4602 115.505 81.4602C114.829 81.4602 114.45 81.9336 114.45 82.7316V86.5457H112.422V79.7831H114.45V80.4053C114.761 79.9454 115.357 79.5937 116.263 79.5937C117.061 79.5937 117.656 79.9183 118.035 80.4864C118.413 79.9454 119.035 79.5937 119.996 79.5937Z"
                                        fill="black"/>
                                    <path
                                        d="M128.862 79.7831H130.891V86.5457H128.862V85.91C128.416 86.424 127.753 86.7351 126.847 86.7351C125.075 86.7351 123.614 85.1797 123.614 83.1644C123.614 81.1491 125.075 79.5937 126.847 79.5937C127.753 79.5937 128.416 79.9048 128.862 80.4188V79.7831ZM127.253 84.8145C128.186 84.8145 128.862 84.1788 128.862 83.1644C128.862 82.15 128.186 81.5143 127.253 81.5143C126.319 81.5143 125.643 82.15 125.643 83.1644C125.643 84.1788 126.319 84.8145 127.253 84.8145Z"
                                        fill="black"/>
                                    <path
                                        d="M134.408 80.9868C134.679 80.0806 135.585 79.6478 136.437 79.6478V81.9471C135.598 81.8119 134.408 82.15 134.408 83.489V86.5457H132.379V79.7831H134.408V80.9868Z"
                                        fill="black"/>
                                    <path
                                        d="M143.877 86.5457H141.578L139.414 83.5566V86.5457H137.385V77.078H139.414V82.7451L141.443 79.7831H143.81L141.348 83.1644L143.877 86.5457Z"
                                        fill="black"/>
                                    <path
                                        d="M146.026 83.9759C146.283 84.6792 146.905 84.9227 147.649 84.9227C148.204 84.9227 148.677 84.7063 148.948 84.4087L150.571 85.342C149.908 86.2617 148.907 86.7351 147.622 86.7351C145.309 86.7351 143.876 85.1797 143.876 83.1644C143.876 81.1491 145.337 79.5937 147.474 79.5937C149.448 79.5937 150.909 81.1221 150.909 83.1644C150.909 83.4484 150.882 83.7189 150.828 83.9759H146.026ZM145.986 82.4611H148.894C148.677 81.6766 148.069 81.3926 147.46 81.3926C146.689 81.3926 146.175 81.7713 145.986 82.4611Z"
                                        fill="black"/>
                                    <path
                                        d="M155.824 81.7307H154.431V84.1247C154.431 84.7063 154.932 84.7604 155.824 84.7063V86.5457C153.173 86.8162 152.403 86.0183 152.403 84.1247V81.7307H151.321V79.7831H152.403V78.4982L154.431 77.8895V79.7831H155.824V81.7307Z"
                                        fill="black"/>
                                    <path
                                        d="M157.988 79.188C157.325 79.188 156.77 78.6334 156.77 77.9707C156.77 77.308 157.325 76.7534 157.988 76.7534C158.65 76.7534 159.205 77.308 159.205 77.9707C159.205 78.6334 158.65 79.188 157.988 79.188ZM156.973 86.5457V79.7831H159.002V86.5457H156.973Z"
                                        fill="black"/>
                                    <path
                                        d="M164.449 79.5937C165.816 79.5937 166.979 80.5676 166.979 82.3935V86.5457H164.95V82.691C164.95 81.8525 164.422 81.4602 163.773 81.4602C163.029 81.4602 162.515 81.893 162.515 82.8533V86.5457H160.487V79.7831H162.515V80.4188C162.881 79.9183 163.557 79.5937 164.449 79.5937Z"
                                        fill="black"/>
                                    <path
                                        d="M173.336 79.7831H175.31V86.2076C175.31 88.4799 173.539 89.4402 171.74 89.4402C170.333 89.4402 169.156 88.9127 168.534 87.8036L170.265 86.8027C170.522 87.2761 170.915 87.6548 171.807 87.6548C172.754 87.6548 173.336 87.1679 173.336 86.2076V85.5854C172.889 86.14 172.24 86.4646 171.361 86.4646C169.44 86.4646 168.034 84.8957 168.034 83.0292C168.034 81.1627 169.44 79.5937 171.361 79.5937C172.24 79.5937 172.889 79.9183 173.336 80.4729V79.7831ZM171.699 84.5981C172.659 84.5981 173.336 83.9624 173.336 83.0292C173.336 82.0959 172.659 81.4602 171.699 81.4602C170.739 81.4602 170.063 82.0959 170.063 83.0292C170.063 83.9624 170.739 84.5981 171.699 84.5981Z"
                                        fill="black"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className={"text-2xl font-extrabold"}>Performance Webarketing</h3>
                                <span className={" font-light text-secondary "}>2022 - 2023</span>
                            </div>
                        </div>
                        <div className={"w-full flex flex-col  justify-center"}>
                            <div
                                className={"w-full h-[330px] bg-gray-100  flex items-center justify-center rounded-xl border-1 border-transparent gap-1 bg-gray-500 bg-opacity-10 mb-2"}>
                                <svg width="158" height="152" viewBox="0 0 158 152" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_916_858)">
                                        <path
                                            d="M0.5 34.2939L49.7516 76.1988L0.5 117.704V102.297L31.511 76.1539L0.5 49.7763V34.2939Z"
                                            fill="#1E1E1E"/>
                                        <path
                                            d="M144.407 100.557C134.971 121.097 114.18 135.345 90.0501 135.345C65.92 135.345 45.2303 121.154 35.7615 100.692L22.678 111.826C35.5802 135.74 60.916 152.002 90.0501 152.002C119.184 152.002 144.612 135.688 157.498 111.698L144.407 100.559V100.557Z"
                                            fill="#1E1E1E"/>
                                        <path
                                            d="M35.7709 51.443C45.2068 30.9032 65.9977 16.6551 90.1279 16.6551C114.258 16.6551 134.948 30.8464 144.417 51.3082L157.5 40.1741C144.598 16.2602 119.262 0 90.1279 0C60.9937 0 35.5661 16.3146 22.678 40.3041L35.7686 51.443H35.7709Z"
                                            fill="#1E1E1E"/>
                                        <path
                                            d="M90.2268 54.3467L96.0268 59.3947V121.059L90.1608 126.048L84.2949 121.059V59.3947L90.2268 54.3467Z"
                                            fill="#1E1E1E"/>
                                        <path
                                            d="M117.486 53.7836C117.486 38.6252 105.258 26.3467 90.1609 26.3467C75.0639 26.3467 62.8352 38.6252 62.8352 53.7836C62.8352 64.563 69.0379 73.8907 78.0475 78.3855V67.1355C74.4493 63.8301 72.1816 59.0728 72.1816 53.8001C72.1816 43.8269 80.2281 35.75 90.1585 35.75C100.089 35.75 108.135 43.8293 108.135 53.8001C108.135 59.2785 105.708 64.1705 101.874 67.4878V78.5912C111.105 74.1555 117.482 64.7262 117.482 53.7836H117.486Z"
                                            fill="#1E1E1E"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_916_858">
                                            <rect width="157" height="152" fill="white" transform="translate(0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <h3 className={"text-2xl font-extrabold"}>clevgaurd</h3>
                                <span className={" font-light text-secondary "}>2019 - 2020</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>

        </>
    ;
    return div;
}

export default App;
