import Button from "components/atoms/button";
import Logos from "components/atoms/logos";

const date = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="mx-auto max-w-5xl px-4 xl:max-w-7xl xl:px-0 flex flex-col-reverse sm:flex-row justify-between  mt-32 mb-2">
                <div className={"flex flex-col font space-y-2 lg:w-2/5"}>
                    <Logos.Damchap className={"w-10 h-10"}/>
                    <span className={"font-black text-xl m-0"}>Damien Chapart</span>
                    <span className={"font-bold uppercase text-secondary"}>developper full stack</span>
                    <div className={"flex w-full gap-2 "}>
                        <Button outline={true}
                                className={"flex bg-transparent hover:bg-secondary text-secondary hover:text-white border-gray-200 hover:border-secondary border-2 text-lg leading-6 font-semibold py-2 px-2 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
                            <div className={"uppercase tracking-wide font-bold text-xs flex flex-grow space-x-2"}>
                                <Logos.Github
                                    className="w-4 h-4 "/>
                                <span>github</span>
                            </div>
                        </Button>
                        <Button outline={true}
                                className={"flex items-center justify-center bg-transparent hover:bg-secondary text-secondary hover:text-white border-gray-200 hover:border-secondary border-2 text-lg leading-6 font-semibold py-2 px-2 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
                            <div className={"uppercase tracking-wide font-bold text-xs flex flex-grow space-x-2"}>
                                <Logos.Linkedin
                                    className="w-4 h-4 "/>
                            </div>
                        </Button>
                        <Button outline={true}
                                className={"flex items-center justify-center bg-transparent hover:bg-secondary text-secondary hover:text-white border-gray-200 hover:border-secondary border-2 text-lg leading-6 font-semibold py-2 px-2 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
                            <div className={"uppercase tracking-wide font-bold text-xs flex flex-grow space-x-2"}>
                                <Logos.LogoDev
                                    className="w-4 h-4 "/>
                            </div>
                        </Button>
                        <Button outline={true}
                                className={" flex items-center justify-center bg-transparent hover:bg-secondary text-secondary hover:text-white border-gray-200 hover:border-secondary border-2 text-lg leading-6 font-semibold py-2 px-2 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
                            <div className={"uppercase tracking-wide font-bold text-xs flex flex-grow space-x-2"}>
                                <Logos.Instagram
                                    className="w-4 h-4 "/>
                            </div>
                        </Button>
                        <Button outline={true}
                                className={"flex items-center justify-center bg-transparent hover:bg-secondary text-secondary hover:text-white border-gray-200 hover:border-secondary border-2 text-lg font-semibold py-2 px-2 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary focus:outline-none transition-colors duration-200"}>
                            <div className={"uppercase tracking-wide font-bold text-xs flex flex-grow space-x-2"}>
                                <Logos.Twitter
                                    className="w-4 h-4 "/>
                            </div>
                        </Button>
                    </div>
                    <hr className={"border-gray-200 border-1"}></hr>
                    <span className={"text-secondary text-secondary"}>© {date} developed whith <span
                        className={"text-red-600"}>❤</span>  by Damien Chapart</span>
                    <div className={"flex flex-row space-x-1 items-center"}>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.899 8.31261L16.8506 8.8834C16.9093 8.91854 16.9578 8.9683 16.9916 9.02783C17.0253 9.08735 17.0431 9.1546 17.0431 9.22302C17.0431 9.29144 17.0253 9.3587 16.9916 9.41822C16.9578 9.47774 16.9093 9.5275 16.8506 9.56265L9.49993 13.973L2.1493 9.56265C2.0906 9.5275 2.042 9.47774 2.00826 9.41822C1.97452 9.3587 1.95679 9.29144 1.95679 9.22302C1.95679 9.1546 1.97452 9.08735 2.00826 9.02783C2.042 8.9683 2.0906 8.91854 2.1493 8.8834L3.10088 8.31261L9.49993 12.1522L15.899 8.31261ZM15.899 12.0334L16.8506 12.6042C16.9093 12.6394 16.9578 12.6891 16.9916 12.7487C17.0253 12.8082 17.0431 12.8754 17.0431 12.9439C17.0431 13.0123 17.0253 13.0795 16.9916 13.1391C16.9578 13.1986 16.9093 13.2483 16.8506 13.2835L9.90763 17.4492C9.78451 17.5232 9.64357 17.5623 9.49993 17.5623C9.35628 17.5623 9.21535 17.5232 9.09222 17.4492L2.1493 13.2835C2.0906 13.2483 2.042 13.1986 2.00826 13.1391C1.97452 13.0795 1.95679 13.0123 1.95679 12.9439C1.95679 12.8754 1.97452 12.8082 2.00826 12.7487C2.042 12.6891 2.0906 12.6394 2.1493 12.6042L3.10088 12.0334L9.49993 15.873L15.899 12.0334ZM9.90684 1.0364L16.8506 5.20215C16.9093 5.23729 16.9578 5.28705 16.9916 5.34658C17.0253 5.4061 17.0431 5.47335 17.0431 5.54177C17.0431 5.61019 17.0253 5.67745 16.9916 5.73697C16.9578 5.79649 16.9093 5.84625 16.8506 5.8814L9.49993 10.2918L2.1493 5.8814C2.0906 5.84625 2.042 5.79649 2.00826 5.73697C1.97452 5.67745 1.95679 5.61019 1.95679 5.54177C1.95679 5.47335 1.97452 5.4061 2.00826 5.34658C2.042 5.28705 2.0906 5.23729 2.1493 5.20215L9.09222 1.0364C9.21535 0.962422 9.35628 0.92334 9.49993 0.92334C9.64357 0.92334 9.78451 0.962422 9.90763 1.0364H9.90684Z"
                            />
                        </svg>

                        <span className={"text-secondary text-center text-secondary"}>Stack utilisé : React, typescript, Tailwind</span>
                    </div>


                </div>
                <div className={"flex flex-row justify-between items-center lg:w-1/3"}>
                    <div className={"flex flex-col  items-center"}>
                        <span className={"font-black text-xl m-0 pb-4"}>Navigation</span>
                        <div className={"flex flex-col space-y-2 text-center text-secondary"}>
                            <span>Home</span>
                            <span>About</span>
                            <span>Portfolio</span>
                            <span>Contact</span>
                        </div>
                    </div>
                    <div className={"flex flex-col items-end"}>
                        <span className={"font-black text-xl m-0 pb-4 "}>Legal</span>
                        <div className={"flex flex-col space-y-2 text-end text-secondary"}>
                            <span>Privacy</span>
                            <span>Terms</span>
                            <span>Accessibility</span>
                            <span>Site map</span>
                        </div>
                    </div>
                </div>

            </footer>
    );
};

export default Footer;