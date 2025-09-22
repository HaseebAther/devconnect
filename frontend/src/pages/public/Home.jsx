import Navbutton from "../../components/public/Navbutton";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-200 via-pink-300 to-purple-300 py-32 relative overflow-hidden  ">
        <div className="flex flex-col items-center z-10 text-center max-w-4xl mx-auto px-6">
          <p className="text-sm w-fit p-1 bg-amber-50/10 rounded-3xl tracking-wide text-white/80">
            ✨ Join 10,000+ developers building together ✨
          </p>
          <h1 className="font-heading text-6xl md:text-7xl font-extrabold text-white leading-tight mt-4">
            Where Developers <br /> Connect & Create
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            Showcase your projects, find collaborators, and build meaningful
            relationships in the developer community. Your next breakthrough
            starts here.
          </p>
          <div className="flex justify-center gap-5 mt-10">
            <Navbutton
              to="auth/register"
              icon="➔"
              text="Start Building Together"
              classes="bg-pink-600 text-white text-lg px-8 py-4 rounded-lg hover:opacity-90 font-bold shadow-lg hover:scale-105 transition"
            />
            <Navbutton
              to="auth/login"
              text="Login"
              classes="bg-white/20 text-white border border-white/40 text-lg px-7 py-4 rounded-lg font-bold hover:bg-white/30 hover:scale-105 transition"
            />
          </div>
        </div>
      </section>

      {/* Why DevConnect */}
      <section className="py-24 bg-white w-full">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-heading font-extrabold text-gray-900 mb-16">
            Why DevConnect?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-pink-600 mb-3">
                🚀 Showcase Projects
              </h3>
              <p className="text-gray-600">
                Put your work in the spotlight and inspire others in the dev
                community.
              </p>
            </div>
            <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-pink-600 mb-3">
                🤝 Find Collaborators
              </h3>
              <p className="text-gray-600">
                Connect with developers who share your vision and skills.
              </p>
            </div>
            <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-pink-600 mb-3">
                🌐 Build Together
              </h3>
              <p className="text-gray-600">
                Turn ideas into impactful projects through collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white relative">
        <div className="absolute "></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading text-pink-600 font-extrabold mb-14">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-pink-600 text-white font-bold shadow-lg text-lg">
                1
              </span>
              <h3 className="text-xl font-bold mt-5">Create Profile</h3>
              <p className="mt-2 text-white/90">
                Introduce yourself and showcase your skills.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-pink-600 text-white font-bold shadow-lg text-lg">
                2
              </span>
              <h3 className="text-xl font-bold mt-5">Post Projects</h3>
              <p className="mt-2 text-white/90">
                Share what you're building and roles you need.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-pink-600 text-white font-bold shadow-lg text-lg">
                3
              </span>
              <h3 className="text-xl font-bold mt-5">Collaborate</h3>
              <p className="mt-2 text-white/90">
                Work with passionate devs and bring ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pink-50">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl px-10 py-16 text-center">
          <h2 className="text-4xl font-heading font-extrabold text-gray-900 mb-6">
            Ready to Build Together?
          </h2>
          <p className="text-gray-600 mb-8">
            Join a community of developers turning ideas into reality.
          </p>
          <Navbutton
            to="auth/register"
            text="Join Now"
            classes="bg-pink-600 text-white px-10 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-pink-700 hover:scale-105 transition"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
