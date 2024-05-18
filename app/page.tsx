'use client'

import React, { useState } from "react";
import Image from "next/image";
import FilterButton from "./components/FilterButton";
import cross from "../public/cross.svg";
import CheckLabel from "./components/CheckLabel";
import FerryOperator from "./components/FerryOperator";
import globe from '../public/globe.svg'

export default function Home() {
  const [showFilters, setShowFilters] = useState(true); // State to manage visibility of filters

  const toggleFilters = () => {
    setShowFilters(!showFilters); // Toggle visibility of filters
  };

  return (
    <main className="mx-10 my-10 max-w-full overflow-none">
      <div className="flex flex-row justify-between mb-5">
        <div className="flex flex-col items-start">
          <div className="mb-8">
            <h1 className="font-semibold mb-1 text-3xl">Ferry Operators</h1>
            <p className="text-sm">
              <span className="opacity-70">Discover the</span>
              <span className="font-medium opacity-100"> 57 ferry operators </span>
              <span className="opacity-70">we work with</span>
            </p>
          </div>
          <div className="flex flex-row gap-3">
          <FilterButton toggleFilter={toggleFilters} buttonText="Filters" imageSrc="/filter.svg" />
          <FilterButton buttonText="Sort by: Review Number (high first)" imageSrc="/sort.svg" />
          <FilterButton buttonText="Search" imageSrc="/search.svg" />

          </div>
        </div> 

        <div className="flex flex-col items-end justify-between">
          <button className="rounded-lg border-2 border-amber-400 px-12 py-2 bg-[#00AFD4] text-white font-medium">
            &gt;&nbsp;&nbsp;&nbsp;Book your tickets
          </button>

          <button className="text-[#00AFD4] text-sm flex flex-row gap-2 border-2 border-opacity-70 rounded-lg px-4 py-2">
            <Image
              src={globe}
              alt="map-icon"
              width={20}
              height={20}
            />
            Live Map View
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[25%_75%] gap-5 max-h-40">
        <div>
          {showFilters && (
            <div className=" py-2 px-3 border-2 border-opacity-80 rounded-lg">
              <div>
                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg">Filters</h3>
                  <Image
                    src={cross}
                    alt="map-icon"
                    width={25}
                    height={20}
                    onClick={toggleFilters} // Toggle visibility of filters
                    className="cursor-pointer"
                  />
                </div>
                <h3 className="text-sm font-semibold mb-2">Operating in</h3>
                <FilterButton buttonText="Select a Country" imageSrc="/location.svg"/>
              </div>
              <div className="border-t-2 flex flex-col justify-between items-start py-2 mt-3">
                <h3 className="text-sm font-semibold mb-2">Ferry types</h3>
                <div>
                  <CheckLabel />
                  <CheckLabel />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="overflow-y-auto">
          <FerryOperator />
          <FerryOperator />
          <FerryOperator />
          <FerryOperator />
        </div>
      </div>
    </main>
  );
}
