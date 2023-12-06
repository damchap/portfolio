import Logos from "components/atoms/logos";
import NavButton from "components/atoms/navButton";

const namePage = "";
function App() {
  return (
    <main>
          <nav>
              <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto">
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                      <a aria-label="Portfolio" href="/" className="font- ">@damchap/ {namePage}</a>
                    </div>
                    <div className="flex items-center">
                    {/*  notif */}

                    </div>
                    <div className="flex items-center space-x-4">
                        <a aria-label="About" href="/about" className="">about</a>
                        <a aria-label="Projects" href="/projects" className="">projects</a>
                        <a aria-label="Contact" href="/contact" className="">contact</a>
                        <NavButton ><Logos.Github className="w-6 h-6 group-hover:animate-spin" /></NavButton>
                        <NavButton><Logos.Desktop className="w-6 h-6 group-hover:animate-spin" /></NavButton>
                        <NavButton><Logos.Menu className="w-6 h-6 group-hover" /></NavButton>
                    </div>
                  </div>
              </div>
          </nav>

    </main>
  );
}

export default App;
