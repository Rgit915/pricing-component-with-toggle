const ToggleSwitch = ({ isAnnually, setIsAnnually }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Space") {
      setIsAnnually(!isAnnually);
    }
  };

  return (
    <div className="toggle-container flex items-center gap-4 mb-12">
      <span className="text-[15px] font-bold opacity-50 leading-7">
        Annually
      </span>
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={isAnnually}
        onChange={() => setIsAnnually(!isAnnually)}
      />
      <label
        htmlFor="toggle"
        className="relative w-14 h-7 bg-gradient-to-r from-primary-moderate-blue to-primary-vibrant-blue rounded-full cursor-pointer flex items-center hover:opacity-50"
      >
        <div
          className={`absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
            isAnnually ? "translate-x-1" : "translate-x-7"
          }`}
          tabIndex="0" // Make the label focusable
          role="switch" // Define the role as a switch for accessibility
          aria-checked={isAnnually} // Indicate the current state of the toggle
          onKeyDown={handleKeyDown} // Allow toggling with the keyboard
        />
      </label>
      <span className="text-[15px] font-bold opacity-50 leading-7">
        Monthly
      </span>
    </div>
  );
};

export default ToggleSwitch;
