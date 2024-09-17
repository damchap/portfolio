import Footer from 'components/organisms/footer';
import Navbar from 'components/organisms/navbar';
import ProjectCard from 'components/organisms/projectCard';
import Sidebar from 'components/organisms/sidebar';

function ProjectsPage() {


    const div = <>
            <div className="flex items-center">
                {/*  notif */}
            </div>
            <header className="flex flex-col justify-between mx-auto max-w-5xl px-4 landscape xl:max-w-screen-2xl  ">
            <Navbar/>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <h2 className="text-sm text-blue-500">MES REFERENCES</h2>
                    <h1 className="text-3xl font-bold mt-2">Portfolio Développeur full stack étudiant</h1>
                    <p className="text-gray-600 mt-2">Rien de mieux qu'un tour d'horizon sur l'ensemble de mes projets</p>
                </div>
            </header>
            <main className="min-h-[calc(100vh-var(--header-height))]">
                <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
                    <div className='flex flex-col lg:grid lg:grid-cols-10 lg:gap-8'>
                        <Sidebar/>
                    </div>
                
                    <div className='lg:col-span-8'>
                        <div className='flex flex-col lg:grid lg:grid-cols-10 lg:gap-8'>
                            <div className='lg:col-span-8'>
                                <article className="mt-8 pb-24 dark:text-gray-300 dark:prose-pre:!bg-gray-800/60 prose prose-primary dark:prose-invert max-w-none"> 
                                    <ProjectCard />
                                </article>
                                
                            </div>
                            {/* <div className='lg:col-span-2 order-first lg:order-last sticky top-[--header-height] bg-background/75 backdrop-blur group -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))] z-10'>
                                <aside className="mt-10">
                                    <h3 className="text-lg font-semibold mb-4">Suivez-moi</h3>
                                    <div className="flex items-center mb-2">
                                    <img src="/path-to-image" alt="Damien chapart" className="w-8 h-8 rounded-full" />
                                    <div className="ml-3">
                                        <p className="text-sm font-semibold">Damien chapart</p>
                                        <p className="text-sm text-gray-500">@damien-chapart</p>
                                    </div>
                                    </div>
                                    <div className="flex items-center">
                                    <img src="/path-to-logo" alt="Logo DC" className="w-8 h-8" />
                                    <div className="ml-3">
                                        <p className="text-sm font-semibold">Damien chapart</p>
                                        <p className="text-sm text-gray-500">@damchap</p>
                                    </div>
                                    </div>
                                </aside>
                            </div> */}
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    ;
    return div;
}

export default ProjectsPage;