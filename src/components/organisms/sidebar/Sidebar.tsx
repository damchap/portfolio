import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className='lg:col-span-2 '>
        <aside className="hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4">
            <div className='relative'>
                <div className="space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0">
                    <a className="flex items-center gap-1.5 lg:gap-2 group text-primary font-semibold" href="/docs/getting-started">
                        <div className="rounded-md p-1 inline-flex ring-inset ring-1 bg-primary ring-primary text-background">
                            <span className="iconify i-ph:rocket-launch-duotone w-4 h-4 flex-shrink-0" aria-hidden="true"></span>
                        </div>
                        <span className="text-sm/6 relative">Get Started</span>
                    </a>
                    <a className="flex items-center gap-1.5 lg:gap-2 group text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium" href="/docs/guide">
                        <div className="rounded-md p-1 inline-flex ring-inset ring-1 bg-gray-100/50 dark:bg-gray-800/50 ring-gray-300 dark:ring-gray-700 group-hover:bg-primary group-hover:ring-primary group-hover:text-background">
                            <span className="iconify i-ph:book-open-duotone w-4 h-4 flex-shrink-0" aria-hidden="true"></span>
                        </div>
                        <span className="text-sm/6 relative">Guide</span>
                    </a>
                    <a className="flex items-center gap-1.5 lg:gap-2 group text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium" href="/docs/api">
                        <div className="rounded-md p-1 inline-flex ring-inset ring-1 bg-gray-100/50 dark:bg-gray-800/50 ring-gray-300 dark:ring-gray-700 group-hover:bg-primary group-hover:ring-primary group-hover:text-background">
                            <span className="iconify i-ph:code w-4 h-4 flex-shrink-0" aria-hidden="true"></span>
                        </div>
                        <span className="text-sm/6 relative">API</span>
                    </a>
                    <a className="flex items-center gap-1.5 lg:gap-2 group text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium" href="/docs/examples">
                        <div className="rounded-md p-1 inline-flex ring-inset ring-1 bg-gray-100/50 dark:bg-gray-800/50 ring-gray-300 dark:ring-gray-700 group-hover:bg-primary group-hover:ring-primary group-hover:text-background">
                            <span className="iconify i-ph:app-window-duotone w-4 h-4 flex-shrink-0" aria-hidden="true"></span>
                        </div>
                        <span className="text-sm/6 relative">Examples</span>
                    </a>
                    <a className="flex items-center gap-1.5 lg:gap-2 group text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium" href="/docs/community">
                        <div className="rounded-md p-1 inline-flex ring-inset ring-1 bg-gray-100/50 dark:bg-gray-800/50 ring-gray-300 dark:ring-gray-700 group-hover:bg-primary group-hover:ring-primary group-hover:text-background">
                            <span className="iconify i-ph:chats-teardrop-duotone w-4 h-4 flex-shrink-0" aria-hidden="true"></span>
                        </div>
                        <span className="text-sm/6 relative">Community</span>
                    </a>
                </div>
                <div className="flex items-center align-center text-center w-full flex-row mb-6">
                    <div className="flex border-gray-200 dark:border-gray-800 w-full border-t border-dashed"></div>
                </div>
                <nav className="space-y-3">
                    <div className="space-y-3">
                        <a className="flex items-center gap-1.5 group text-primary font-medium border-current" href="/docs/getting-started/introduction">
                            <span className="iconify i-ph:info-duotone w-5 h-5 flex-shrink-0" aria-hidden="true"></span><span className="text-sm/6 truncate">Introduction</span>
                        </a>
                        <a className="flex items-center gap-1.5 group text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-500 dark:hover:border-gray-400" href="/docs/getting-started/installation">
                            <span className="iconify i-ph:play-duotone w-5 h-5 flex-shrink-0" aria-hidden="true"></span>
                            <span className="text-sm/6 truncate">Installation</span>
                        </a>
                    </div>
                </nav>
            </div>
            <h3 className="text-lg font-semibold mb-4">Filtres</h3>
            <ul>
                <li className="mb-2"><button className="text-blue-500">Tous</button></li>
                <li className="mb-2"><button className="text-gray-700">Cas écoles</button></li>
                <li className="mb-2"><button className="text-gray-700">Cas entreprise</button></li>
                <li className="mb-2"><button className="text-gray-700">Perso</button></li>
            </ul>
        </aside>
    </div>
    
  );
};

export default Sidebar;