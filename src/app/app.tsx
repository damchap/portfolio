import Logos from "components/atoms/logos";
import NavButton from "components/atoms/navButton";
import Button from "components/atoms/button";

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
                    <h1 className="text-xl font-bold text-primary">Hello! 👋 I'm </h1>
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
                        <Button outline={true}>
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
        {/*projet*/}
        <main className="mx-auto max-w-5xl px-4 xl:max-w-7xl xl:px-0 flex flex-col space-y-64">
            <section className="flex flex-col justify-center items-center">
                <div className={"w-full"}>
                    <h1 className="text-4xl font-black pb-8">🚀 Mes projets</h1>
                </div>
                <div className={"flex flex-grow  space-x-12 max-w-6xl"}>
                    <div className={"w-1/3"}>
                        <img
                            className="w-96 h-96 object-cover object-top"
                            src="/public/damien_chapart.png" alt="Damien Chapart"/>
                    </div>
                    <div className={"w-2/3 flex flex-col justify-center"}>
                        <div className={""}>
                            <span className={"text-4xl font-extrabold"}>Damien Chapart</span>
                            <h2 className={"text-xl font-bold tracking-wide pb-6"}>Etudiant en licence pro et
                                développeur full stack</h2>
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

            <section className="flex flex-col justify-center items-center">
                <div className={"w-full"}>
                    <h1 className="text-4xl font-black pb-8">🤖 Qui suis-je</h1>
                </div>
                <div className={"flex flex-grow  space-x-12 max-w-6xl"}>
                    <div className={"w-1/3"}>
                        <img
                            className="w-96 h-96 object-cover object-top"
                            src="/public/damien_chapart.png" alt="Damien Chapart"/>
                    </div>
                    <div className={"w-2/3 flex flex-col justify-center"}>
                        <div className={""}>
                            <span className={"text-4xl font-extrabold"}>Damien Chapart</span>
                            <h2 className={"text-xl font-bold tracking-wide pb-6"}>Etudiant en licence pro et
                                développeur full stack</h2>
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
        </main>
    </>
;
return div;
}

export default App;
