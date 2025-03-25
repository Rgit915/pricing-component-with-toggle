
import planData from "../../data";
import PricingCard from "./PricingCard";
const PricingSection = ({ isAnnually }) => {
  return (
    <section className="card-container w-full flex flex-col md:flex-row md:gap-0 md:w-[95vw] lg:w-full gap-6 justify-center">
      {planData.map((plan) => (
        <PricingCard key={plan.name} plan={plan} isAnnually={isAnnually} />
      ))}
    </section>
  );
};

export default PricingSection;