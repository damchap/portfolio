import Logos from "components/atoms/logos";
import NavButton from "components/atoms/navButton";
import Button from "components/atoms/button";
import Figure from "components/atoms/figure";

const namePage = "";
function App() {
    const div = <>
        <div className="flex items-center">
            {/*  notif */}
        </div>
        <header className="flex flex-col justify-between mx-auto max-w-5xl px-4 landscape xl:max-w-screen-2xl  ">
            <nav className="flex items-center justify-between py-10">
                <div className="flex items-center justify-between py-4">
                    <a aria-label="Portfolio" href="/" className="font-black ">@damchap/ {namePage}</a>
                </div>
                <div className="flex items-center justify-between  space-x-2">

                    <div className="hidden lg:block">
                        <a aria-label="About" href="/about"
                           className="link-underline rounded-t py-1 px-2 text-gray-900 hover:bg-gray-200   sm:py-2 sm:px-3">about</a>
                        <a aria-label="Projects" href="/projects"
                           className="link-underline rounded-t py-1 px-2 text-gray-900 hover:bg-gray-200   sm:py-2 sm:px-3">projects</a>
                        <a aria-label="Contact" href="/contact"
                           className="link-underline rounded-t py-1 px-2 text-gray-900 hover:bg-gray-200   sm:py-2 sm:px-3">contact</a>
                    </div>
                    <NavButton className="py-2"><Logos.Github
                        className="w-6 h-6 group-hover:animate-spin transition-all duration-200 ease-in-out "/></NavButton>
                    <NavButton className="py-2"><Logos.Desktop
                        className="w-6 h-6 group-hover:animate-spin transition-all duration-200 ease-in-out "/></NavButton>
                    <NavButton className="py-2"><Logos.Menu
                        className="w-6 h-6 group-hover transition-all duration-200 ease-in-out "/></NavButton>
                </div>

            </nav>
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
                        <Button outline={true} className={"w-full sm:w-auto flex-none bg-transparent hover:bg-primary text-primary hover:text-white border-primary border-2 text-lg leading-6 font-semibold py-3 px-6 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
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
        <main className="mx-auto max-w-5xl px-4 xl:max-w-7xl xl:px-0 flex flex-col space-y-64">
            <section className="flex flex-col justify-center items-center">
                <div className={"w-full"}>
                    <h2 className="text-4xl font-black pb-8">🤖 Qui suis-je </h2>
                </div>
                <div className={"flex flex-grow  space-x-12 max-w-6xl"}>
                    <div className={"w-1/3"}>
                        <img
                            className="w-96 h-96 object-cover object-top"
                            src="/damien_chapart.png" alt="Damien Chapart"/>
                    </div>
                    <div className={"w-2/3 flex flex-col justify-center"}>
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
                            <Button className={""}>
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
                <div className={"flex flex-grow  space-x-12 max-w-6xl"}>
                    <div className={"w-1/3 flex flex-col justify-center"}>
                        <div className={"w-[414px] h-[230px] bg-gray-100  flex items-center justify-center rounded-xl border-1 border-transparent gap-1"}>
                            <img
                                className=" object-cover object-top "
                                src="/clevguard.svg" alt="Damien Chapart"/>
                        </div>
                    </div>
                    <div className={"w-2/3 flex flex-col justify-center"}>
                        <div className={""}>
                            <div className={"flex items-center pb-8 space-x-10"}>
                                <div>
                                    <h3 className={"text-4xl font-extrabold"}>Assistant Clevguard</h3>
                                    <span className={" font-light text-secondary "}>2019 - 2020</span>
                                </div>
                                <div className={"flex space-x-4 border-1 border-b-gray-200s p-2 rounded-full"}>
                                    <Logos.Cpp className={"w-10 h-10"}/>
                                    <Logos.Arduino className={"w-10 h-10"}/>
                                    <Logos.RaspberryPi className={"w-10 h-10"}/>
                                    <Logos.Php className={"w-10 h-10"}/>
                                    <Logos.Composer className={"w-10 h-10"}/>
                                </div>
                            </div>
                            <p className={"text-secondary pb-8"}>
                                Clevguard est un projet de fin d’année de terminale STI2D (Sciences et Technologies de l’Industrie et du Développement Durable) option SIN (Système d’information et numérique).
                                Le projet Clevguard est divisé en plusieurs composantes, des boîtiers de capteurs divers ainsi qu’une progressive Web App permettant une visualisation des données des capteurs.
                            </p>
                            <a className={"text-primary flex items-center font-black"}>En savoir plus
                                <svg className={"ml-2"} width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.7071 8.20711C21.0976 7.81658 21.0976 7.18342 20.7071 6.79289L14.3431 0.428932C13.9526 0.0384078 13.3195 0.0384078 12.9289 0.428932C12.5384 0.819457 12.5384 1.45262 12.9289 1.84315L18.5858 7.5L12.9289 13.1569C12.5384 13.5474 12.5384 14.1805 12.9289 14.5711C13.3195 14.9616 13.9526 14.9616 14.3431 14.5711L20.7071 8.20711ZM0 8.5H20V6.5H0V8.5Z"
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
                <div >

                    <div className={""}>
                        <span className={" font-light text-secondary "}>19 février 2023</span>

                    </div>
                </div>
                <ul>
                    <a className="group my-4 flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-101 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                       href="/blog/core-web-vitals">
                        <li className="py-4">
                            <article className={"flex flex-grow justify-start space-x-8"}>
                                <div className={"flex flex-col justify-center"}>
                                    <Figure.Comgratulations/>
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
                                                <Button outline={true} className={"w-full sm:w-auto flex-none bg-transparent hover:bg-secondary text-secondary hover:text-white border-secondary border-2 text-lg leading-6 font-semibold py-2 px-4 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
                                                    <div className={"uppercase tracking-wide font-bold text-xs flex flex-grow space-x-2"}>
                                                        <Logos.Github
                                                            className="w-4 h-4 "/>
                                                        <span>Github</span>
                                                    </div>
                                                </Button>
                                                <Button outline={true} className={"w-full sm:w-auto flex-none bg-transparent hover:bg-secondary text-secondary hover:text-white border-secondary border-2 text-lg leading-6 font-semibold py-2 px-4 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
                                                    <div className={"uppercase tracking-wide font-bold text-xs flex flex-grow space-x-2"}>
                                                        <Logos.Pnpm
                                                            className="w-4 h-4 "/>
                                                        <span>pnpm</span>
                                                    </div>
                                                </Button>
                                            </div>

                                            <div
                                                className="text-secondary">pnpm, next.js, react, versel ou bien vue, nuxt3, netlify. Quelle de ce technologie j’utilise aujourd’hui pour développer des projects cumulent une partie front et back avec une api Rest ?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                    </a>
                </ul>
            </section>
        </main>
        <footer className="mx-auto max-w-5xl px-4 xl:max-w-7xl xl:px-0 flex flex-col space-y-64">
            <div>
                <Logos.Damchap className={"w-10 h-10"}/>
                Damien Chapart
                developper full stack
                <Button outline={true} className={"w-full sm:w-auto flex-none bg-transparent hover:bg-secondary text-secondary hover:text-white border-secondary border-2 text-lg leading-6 font-semibold py-2 px-2 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
                    <div className={"uppercase tracking-wide font-bold text-xs flex flex-grow space-x-2"}>
                        <Logos.Github
                            className="w-4 h-4 "/>
                        <span>github</span>
                    </div>
                </Button>
                <Button outline={true} className={"w-full sm:w-auto flex-none bg-transparent hover:bg-secondary text-secondary hover:text-white border-secondary border-2 text-lg leading-6 font-semibold py-2 px-2 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
                    <div className={"uppercase tracking-wide font-bold text-xs flex flex-grow space-x-2"}>
                        <Logos.Github
                            className="w-4 h-4 "/>
                    </div>
                </Button>
            </div>
        </footer>
        </>
    ;
    return div;
}

export default App;
