import { useState } from "react";
import usFlag from "../../public/images/flag_of_the_United_States.png";
import geoFlag from "../../public/images/flag_of_Georgia.svg.png";
import Flag from "./Flag";

const Flags = () => {
  const [selectedFlag, setSelectedFlag] = useState("geo");

  const handleFlagClick = (flag) => {
    setSelectedFlag(flag);
  };

  return (
    <div className="flex space-x-3">
      <Flag
        src={geoFlag}
        alt="Georgian-flag"
        isSelected={selectedFlag === "geo"}
        onClick={() => handleFlagClick("geo")}
      />
      <Flag
        src={usFlag}
        alt="US-flag"
        isSelected={selectedFlag === "us"}
        onClick={() => handleFlagClick("us")}
      />
      {/* <img
        className={`w-6 rounded-sm ${
          selectedFlag === "geo" ? "outline outline-outlineColor-primary" : ""
        }`}
        src={geoFlag}
        alt="Georgian-flag"
        onClick={() => handleFlagClick("geo")}
      />

      <img
        className={`w-6 rounded-sm ${
          selectedFlag === "us" ? "outline outline-outlineColor-primary" : ""
        }`}
        src={usFlag}
        alt="US-flag"
        onClick={() => handleFlagClick("us")}
      /> */}
    </div>
  );
};

export default Flags;
