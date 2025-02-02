import { UserButton } from "@clerk/nextjs";
import React from "react";
import SearchSection from "./components/Home/SearchSection";
import GoogleMapSection from "./components/Home/GoogleMapSection";

const Home = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div>
        <SearchSection />
      </div>
      <div className="col-span-2">
        <GoogleMapSection />
      </div>
    </div>
  );
};

export default Home;
