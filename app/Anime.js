import Lottie from "lottie-react";

import light from "../public/anime/light.json";
import dark from "../public/anime/dark.json";

const Anime = ({ theme }) => {
  return (
    <div className="w-[200px] m-auto">
      <Lottie animationData={theme === "dark" ? dark : light} />
    </div>
  );
};

export default Anime;
