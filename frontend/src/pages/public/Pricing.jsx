const Pricing = () => {

  return (
    <>
               <div className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-5xl font-heading font-extrabold text-pink-600">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose the plan that fits your journey. No hidden fees.
        </p>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Free Plan */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-gray-800">Starter</h3>
            <p className="mt-2 text-gray-500">Perfect for trying things out</p>
            <p className="mt-6 text-4xl font-extrabold text-gray-900">$0</p>
            <p className="text-gray-500">per month</p>
            <ul className="mt-6 space-y-3 text-gray-600 text-left">
              <li>✅ Create up to 3 projects</li>
              <li>✅ Basic collaboration requests</li>
              <li>✅ Community access</li>
            </ul>
            <button  className="mt-8 w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-pink-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition bg-white relative">
            <span className="absolute top-0 right-0 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl">
              Popular
            </span>
            <h3 className="text-2xl font-bold text-gray-800">Pro</h3>
            <p className="mt-2 text-gray-500">For serious builders</p>
            <p className="mt-6 text-4xl font-extrabold text-gray-900">$9</p>
            <p className="text-gray-500">per month</p>
            <ul className="mt-6 space-y-3 text-gray-600 text-left">
              <li>✅ Unlimited projects</li>
              <li>✅ Advanced collaboration tools</li>
              <li>✅ Highlighted profile</li>
              <li>✅ Priority support</li>
            </ul>
            <button className="mt-8 w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
              Upgrade to Pro
            </button>
          </div>

          {/* Team Plan */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-gray-800">Team</h3>
            <p className="mt-2 text-gray-500">For dev teams & startups</p>
            <p className="mt-6 text-4xl font-extrabold text-gray-900">$29</p>
            <p className="text-gray-500">per month</p>
            <ul className="mt-6 space-y-3 text-gray-600 text-left">
              <li>✅ Team dashboard</li>
              <li>✅ Unlimited collaborators</li>
              <li>✅ Analytics & insights</li>
              <li>✅ Dedicated support</li>
            </ul>
            <button className="mt-8 w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
              Start Team Plan
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Pricing;