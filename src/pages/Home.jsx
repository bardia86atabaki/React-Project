import React from "react";
import Btn from "../Components/btn";
import Command from "../Components/Command";

import userProfile from "../Assets/image 4.png";

function Home() {
  return (
    <div className="flex justify-between items-center">
      <div className="h-full flex flex-col justify-around w-1/2 leading-[80px] relative">
        <h1 className="font-bold text-[4rem]">
          Cooking Made Fun and Easy: Unleash Your Inner Chef
        </h1>
        <p className="leading-[24px] font-light text-custom-gray">
          Discover more than{" "}
          <span className="text-custom-yellow">10,000 recipes </span> in your
          hand with the <br /> best recipe. Help you to find the easiest way to cook.
        </p>
        <Btn width="w-48" height="h-16">
          Explore Recipes
        </Btn>
        <img
          className="absolute left-[60vh] top-[60vh]"
          src="src/Assets/Garlic.png"
          alt="Garlic"
        />
      </div>
      <div className="w-1/2 relative">
        <img src="src/Assets/Tomato.png" alt="Tomato" className="w-[100px]" />
        <img
          src="src/Assets/1.png"
          alt="Dish"
          className="relative w-full z-0"
        />
        <Command
          commandtext="The recipes here are not only delicious but also easy to follow."
          userName="Sarah.M"
          userImage={userProfile}
        />
          <Command
            commandtext="The recipes here are not only delicious but also easy to follow."
            userName="Sarah.M"
            userImage={userProfile}
          />
        <img
          src="src/Assets/Broccoli.png"
          alt="Broccoli"
          className="absolute right-0 w-[100px]"
        />
      </div>
    </div>
  );
}

export default Home;
