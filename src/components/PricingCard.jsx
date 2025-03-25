const PricingCard = ({ plan, isAnnually }) => {
  return (
    <div
      className={`card p-6 rounded-lg shadow-md text-center w-full md:w-1/3 transition-all duration-300 ${
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
              ? "bg-white text-[hsl(237,63%,64%)] border-transparent hover:bg-transparent hover:text-white hover:border-white"
              : ""
          }`}
      >
        Learn More
      </button>
    </div>
  );
};

export default PricingCard;
