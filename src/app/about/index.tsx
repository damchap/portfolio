import Logos from "components/atoms/logos";
import Button from "components/atoms/button";
import Navbar from "components/organisms/navbar";

function AboutPage() {
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
                        <Button outline={true}
                                className={"w-full sm:w-auto flex items-center justify-center bg-transparent hover:bg-primary text-primary hover:text-white border-primary border-2 text-lg leading-6 font-semibold py-3 px-6 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
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
    </>;
    return div;
}

export default AboutPage;