"use client";

import React, { useState, useRef } from "react";

import ScrollIcon from "../inputs/ScrollIcon";
import AmazingViews from "/public/Amazing_views.jpg";
import LakeFront from "/public/LakeFronts.jpg";
import Rooms from "/public/rooms.jpg";
import TreeHouse from "/public/treehouse.jpg";
import AmazingPools from "/public/AmazingPools.jpg";
import Farms from "/public/Farms.jpg";
import Omg from "/public/omg.jpg";
import BeachFront from "/public/Beachfront.jpg";
import Cabins from "/public/Cabins.jpg";
import Countryside from "/public/CcountrySide.jpg";
import TinyHomes from "/public/TinyHomes.jpg";
import Tropical from "/public/Tropical.jpg";
import Design from "/public/Design.jpg";
import Trending from "/public/Trending.jpg";
import BedAndBreakfast from "/public/BedBreakfest.jpg";
import Luxe from "/public/Luxe.jpg";
import EarthHomes from "/public/EarthHomes.jpg";
import NationalPark from "/public/NationalPark.jpg";
import Camping from "/public/Camping.jpg";
import Castels from "/public/Castels.jpg";
import HistoricalHomes from "/public/historicalholmes.jpg";
import Skiing from "/public/Skiing.jpg";
import TopOfTheWorld from "/public/topoftheworld.jpg";
import Islands from "/public/islands.jpg";
import Arctic from "/public/arctic.jpg";
import IconicCities from "/public/iconiccirties.jpg";
import Vineyards from "/public/vineyards.jpg";
import Caves from "/public/caves.jpg";
import Boats from "/public/boats.jpg";
import Mansions from "/public/mansions.jpg";
import OffTheGrid from "/public/offthegrid.jpg";
import Aframes from "/public/aframes.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const iconData = [
  { icon: AmazingViews, text: "Amazing Views" },
  { icon: LakeFront, text: "Lake Front" },
  { icon: Rooms, text: "Rooms" },
  { icon: TreeHouse, text: "Tree House" },
  { icon: AmazingPools, text: "Amazing Pools" },
  { icon: Farms, text: "Farms" },
  { icon: Omg, text: "OMG" },
  { icon: BeachFront, text: "Beach Front" },
  { icon: Cabins, text: "Cabins" },
  { icon: Countryside, text: "Countryside" },
  { icon: TinyHomes, text: "Tiny Homes" },
  { icon: Tropical, text: "Tropical" },
  { icon: Design, text: "Design" },
  { icon: Trending, text: "Trending" },
  { icon: BedAndBreakfast, text: "Bed & Breakfast" },
  { icon: Luxe, text: "Luxe" },
  { icon: EarthHomes, text: "Earth Homes" },
  { icon: NationalPark, text: "National Park" },
  { icon: Camping, text: "Camping" },
  { icon: Castels, text: "Castels" },
  { icon: HistoricalHomes, text: "Historical Homes" },
  { icon: Skiing, text: "Skiing" },
  { icon: TopOfTheWorld, text: "Top of the World" },
  { icon: Islands, text: "Islands" },
  { icon: Arctic, text: "Arctic" },
  { icon: IconicCities, text: "Iconic Cities" },
  { icon: Vineyards, text: "Vineyards" },
  { icon: Caves, text: "Caves" },
  { icon: Boats, text: "Boats" },
  { icon: Mansions, text: "Mansions" },
  { icon: OffTheGrid, text: "Off the Grid" },
  { icon: Aframes, text: "A-Frames" },
];

const NavbarScroll = () => {
 
    const scrollContainerRef = useRef<HTMLDivElement | null>(null); // Specify the type here
    const [scrollPosition, setScrollPosition] = useState(0);
    const iconWidth = 75;
    const containerWidth = iconData.length * iconWidth;

    const scrollLeft = () => {
      if (scrollPosition > 0 && scrollContainerRef.current) {
        setScrollPosition(scrollPosition - iconWidth);
        scrollContainerRef.current.scrollBy({
          left: -iconWidth,
          behavior: "smooth",
        });
      }
    };

    const scrollRight = () => {
      if (
        scrollPosition < containerWidth - iconWidth &&
        scrollContainerRef.current
      ) {
        setScrollPosition(scrollPosition + iconWidth);
        scrollContainerRef.current.scrollBy({
          left: iconWidth,
          behavior: "smooth",
        });
      }
    };

    return (
      <div className="px-[25px] md:p-0 relative w-full bg-white">
        <div className="flex items-center gap-[10px]">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll  "
            style={{ width: `${containerWidth}px`, scrollBehavior: "smooth" }}
          >
            {iconData.map((data, index) => (
              <ScrollIcon key={index} icon={data.icon} text={data.text} />
            ))}
          </div>
        </div>
        <div className="fixed  w-full flex justify-between bottom-[70px] px-[1px]">
          <div className="p-[5px] shadow-lg rounded-full cursor-pointer bg-white">
            <BiChevronLeft size={25} />
          </div>

          <div className="p-[5px] shadow-lg rounded-full cursor-pointer bg-white">
            <BiChevronRight size={25} />
          </div>
        </div>
      </div>
    );
  
};

export default NavbarScroll;
