import { useState } from "react";

import planData from "../data";
const App = () => {
  // State to track if the toggle is on 'Annually' or 'Monthly'
  const [isAnnually, setIsAnnually] = useState(true);

  return (
    <>
      <main className="relative w-full flex flex-col justify-center items-center gap-8 p-4 mt-12">
        <h1 className="text-4xl font-bold text-neutral-dark-grayish-blue">
          Our Pricing
        </h1>

        <div className="toggle-container flex items-center gap-4">
          <span className="text-[15px] font-bold opacity-50 leading-7">
            Annually
          </span>

          {/* Hidden Checkbox */}
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isAnnually}
            onChange={() => setIsAnnually(!isAnnually)}
          />

          {/* Toggle Switch */}
          <label
            htmlFor="toggle"
            className="relative w-14 h-7 bg-gradient-to-r from-primary-moderate-blue to-primary-vibrant-blue rounded-full cursor-pointer flex items-center hover:opacity-50"
          >
            {/* Sliding Ball */}
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                isAnnually ? "translate-x-1" : "translate-x-7"
              }`}
            />
          </label>

          <span className="text-[15px] font-bold opacity-50 leading-7">
            Monthly
          </span>
        </div>
        <section className="card-container w-full flex flex-col md:flex-row md:gap-0  md:w-[95vw] lg:w-full gap-6 justify-center">
          {planData.map((plan, index) => (
            <div
              key={plan.name}
              className={`card p-6 rounded-lg shadow-md text-center w-full md:w-1/3 transition-all duration-300 ${
                index === 1
                  ? "md:scale-110 md:z-10 md:mx-0"
                  : "md:scale-100 md:mx-0"
              } ${
                plan.name === "Professional"
                  ? "bg-gradient-to-r from-primary-moderate-blue to-primary-vibrant-blue text-white"
                  : "bg-white text-neutral-slate-grayish-blue"
              }`}
            >
              <h2 className="plan-name text-lg relative pb-4 w-full flex justify-center">
                {plan.name}
              </h2>

              <p className="price text-5xl lg:text-6xl min-w-[6ch] relative pb-4 w-full flex justify-center">
                {isAnnually ? plan.priceYearly : plan.priceMonthly}
                {plan.name === "Professional" ? (
                  <span className="absolute bottom-0 left-1/2 w-4/5 h-px bg-white opacity-25 transform -translate-x-1/2" />
                ) : (
                  <span className="absolute bottom-0 left-1/2 w-4/5 h-px bg-neutral-slate-grayish-blue opacity-25 transform -translate-x-1/2" />
                )}
              </p>

              <p className="relative pb-4 w-full flex justify-center">
                {plan.storageLimit}
                {plan.name === "Professional" ? (
                  <span className="absolute bottom-0 left-1/2 w-4/5 h-px bg-white opacity-25 transform -translate-x-1/2" />
                ) : (
                  <span className="absolute bottom-0 left-1/2 w-4/5 h-px bg-neutral-slate-grayish-blue opacity-25 transform -translate-x-1/2" />
                )}
              </p>

              <p className="users relative pb-4 w-full flex justify-center">
                {plan.usersAllowed}
                {plan.name === "Professional" ? (
                  <span className="absolute bottom-0 left-1/2 w-4/5 h-px bg-white opacity-25 transform -translate-x-1/2" />
                ) : (
                  <span className="absolute bottom-0 left-1/2 w-4/5 h-px bg-neutral-slate-grayish-blue opacity-25 transform -translate-x-1/2" />
                )}
              </p>

              <p className="send-up relative pb-4 w-full flex justify-center">
                {plan.sendUp}
                {plan.name === "Professional" ? (
                  <span className="absolute bottom-0 left-1/2 w-4/5 h-px bg-white opacity-25 transform -translate-x-1/2" />
                ) : (
                  <span className="absolute bottom-0 left-1/2 w-4/5 h-px bg-neutral-slate-grayish-blue opacity-25 transform -translate-x-1/2" />
                )}
              </p>

              <button
                className={`mt-4 py-2 px-4 rounded-md font-bold transition-all border
    ${
      plan.name === "Basic" || plan.name === "Master"
        ? "bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] text-white border-transparent hover:bg-none hover:bg-transparent hover:text-[hsl(237,63%,64%)] hover:border-[hsl(237,63%,64%)]"
        : "bg-white text-[hsl(237,63%,64%)] border-[hsl(237,63%,64%)]"
    }
    ${
      plan.name === "Professional"
        ? "bg-white text-[hsl(237,63%,64%)] border-transparent hover:bg-transparent hover:text-white hover:border-white md:mt-0 md:mb-2"
        : "md:mt-5"
    }`}
              >
                Learn More
              </button>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default App;
