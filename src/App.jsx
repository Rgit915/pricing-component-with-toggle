import { useState } from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import PricingSection from "./components/PricingSection";
const App = () => {
  const [isAnnually, setIsAnnually] = useState(true);

  return (
    <main className="relative w-full flex flex-col justify-center items-center gap-8 p-4 mt-12">
      <h1 className="text-4xl font-bold text-neutral-dark-grayish-blue">Our Pricing</h1>
      <ToggleSwitch isAnnually={isAnnually} setIsAnnually={setIsAnnually} />
      <PricingSection isAnnually={isAnnually} />
    </main>
  );
};

export default App;