import { useState } from "react";

import planData from "../data";
const App = () => {
  // State to track if the toggle is on 'Annually' or 'Monthly'
  const [isAnnually, setIsAnnually] = useState(false);

  // Toggle function
  const togglePlan = () => {
    setIsAnnually(!isAnnually);
  };

  return (
    <>
      <main className="container flex flex-col w-full h-full justify-center items-center gap-8 p-4 mt-12">
        <h1 className="text-4xl font-bold text-neutral-dark-grayish-blue">
          Our Pricing
        </h1>

        <div className="toggle-button flex items-center gap-4">
          <label htmlFor="annually">Annually</label>

          {/* Single toggle icon */}
          <i
            onClick={togglePlan}
            className={`fa-solid fa-toggle-on text-transparent bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] bg-clip-text cursor-pointer transform transition-all duration-300 ${
              isAnnually ? "rotate-0" : "rotate-180"
            }`}
          ></i>

          <label htmlFor="monthly font-[15px]">Monthly</label>
        </div>
        <section className="card-container flex flex-col md:flex-row">
          <div className="card-item flex flex-col items-center justify-center gap-4">
            {planData.map((plan) => (
              <div
                key={plan.name}
                className={`card ${plan.name.toLowerCase()} p-6 rounded-lg shadow-md text-center ${
                  plan.name === "Professional"
                    ? "bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] text-white "
                    : "bg-white text-neutral-slate-grayish-blue"
                }`}
              >
                <h2 className="plan-name text-lg">{plan.name}</h2>
                <p className="price text-7xl">
                  {isAnnually ? plan.priceYearly : plan.priceMonthly}
                </p>
                <p className="storage-limit">{plan.storageLimit}</p>
                <p className="users">{plan.usersAllowed}</p>
                <p className="send-up">{plan.sendUp}</p>
                <button
                  className={`mt-4 py-2 px-4 rounded-md font-bold transition-all ${
                    plan.name === "Basic" || plan.name === "Master"
                      ? "bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] text-white hover:opacity-90"
                      : "bg-white text-[hsl(237,63%,64%)]"

                  }`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
