const HowitWorks = () => {
 const steps = [
    {
      step: "1",
      title: "Create Your Profile",
      desc: "Sign up and showcase your skills, projects, and passions. Let others know what you’re building.",
    },
    {
      step: "2",
      title: "Discover Projects",
      desc: "Browse projects from developers around the world. Find exciting opportunities to learn and collaborate.",
    },
    {
      step: "3",
      title: "Connect & Collaborate",
      desc: "Join forces with like-minded developers. Work together, share ideas, and build better projects.",
    },
    {
      step: "4",
      title: "Grow Together",
      desc: "Share your progress, get feedback, and expand your network in the global DevConnect community.",
    },
  ];
  return (
    <>
    <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 min-h-screen py-16 px-6">
      <h1 className="text-5xl font-extrabold text-center text-pink-700 mb-4">
        How DevConnect Works
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        Simple steps to start building, connecting, and growing as a developer.
      </p>

      <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto ">
        {steps.map((step) => (
          <div
            key={step.step}
            className="flex flex-col items-start p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-pink-600/20  transition"
          >
            <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl font-bold mb-4  ">
              {step.step}
            </div>
            <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default HowitWorks;