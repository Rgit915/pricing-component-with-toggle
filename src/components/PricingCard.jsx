const PricingCard = ({ plan, isAnnually }) => {
  const isProfessional = plan.name === "Professional";
  const borderColor = isProfessional
    ? "bg-white"
    : "bg-neutral-slate-grayish-blue";
  const textColor = isProfessional
    ? "text-white"
    : "text-neutral-slate-grayish-blue";
  const bgColor = isProfessional
    ? "bg-gradient-to-r from-primary-moderate-blue to-primary-vibrant-blue"
    : "bg-white";

  const renderDivider = () => (
    <span
      className={`absolute bottom-0 left-1/2 w-full h-px ${borderColor} opacity-25 transform -translate-x-1/2`}
    />
  );

  return (
    <div
      className={`card md:w-1/3 transition-all duration-300 ${
        isProfessional ? "md:scale-110 md:z-10" : "md:scale-100"
      }  ${bgColor} ${textColor}`}
    >
      <h2 className={`${plan.name} text-lg relative ${ isProfessional ? "pb-2": "pb-4"} w-full flex justify-center text-center`}>
        {plan.name}
      </h2>

      {/** Reusable Price & Features **/}
      {[
        isAnnually ? plan.priceYearly : plan.priceMonthly,
        plan.storageLimit,
        plan.usersAllowed,
        plan.sendUp,
      ].map((value, index) => (
        <p
          key={index}
          className={`relative pb-4 w-full flex justify-center ${
            index === 0 ? "text-5xl lg:text-6xl min-w-[6ch]" : "text-lg"
          }`}
        >
          {value}
          {renderDivider()}
        </p>
      ))}

      {/** Button with optimized styles **/}
      <button
        className={`py-2 px-4 w-full rounded-md font-bold transition-all border ${
          isProfessional
            ? " bg-white text-primary-vibrant-blue border-transparent hover:bg-transparent hover:text-white hover:border-white"
            : "mt-6 bg-gradient-to-r from-primary-moderate-blue to-primary-vibrant-blue text-white border-transparent hover:bg-none hover:bg-transparent hover:text-primary-vibrant-blue hover:border-primary-vibrant-blue"
        }`}
      >
        Learn More
      </button>
    </div>
  );
};

export default PricingCard;
