import React from "react";
import CardHeader from "./CardHeader";
import Tile from "./Tile";
import TileInfo from "./TileInfo";
import PremiumTile from "./PremiumTile";
import JerseyTile from "./JerseyTile";
import RCBLogo from "../assets/rcb_logo.png";

export default function PlayerCard({ player, onClose }) {
  const statsArray = Object.entries(player.stats).map(([key, value]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
    value,
  }));

  return (
    <div className="absolute inset-0 bg-white/30 backdrop-blur-lg  flex items-center justify-center">
      <div
        className="relative flex flex-col items-center w-80 h-[500px] text-white rounded-4xl"
        style={{
          background: `linear-gradient(135deg, #a3170a, #0d0606)`, // RCB red to dark gradient
        }}
      >

        <CardHeader SportName="Cricket" onClose={onClose} />

        <div className="flex w-full justify-center mt-4">
          <div className="ml-2 stats-container mt-[25px] w-1/5 flex flex-col items-center">
            {statsArray.slice(0, 3).map((stat, index) => (
              <React.Fragment key={index}>
                <Tile TileData={stat.label} flavour="light" />
                <TileInfo TileInfoData={stat.value} />
              </React.Fragment>
            ))}
          </div>
          <div className="pic-container w-3/5 flex flex-col items-center ml-4 mt-6">
            <img
              src={player.image || "https://via.placeholder.com/200"} 
              alt={player.name}
              height={200}
              width={200}
              className="rounded-full"
            />

          </div>

          
          <div className="w-1/5 flex mt-[25px] flex-col items-center">
            <h1 className="text-3xl">{player.country}</h1>
            <img
              src={RCBLogo}
              alt="RCB Logo"
              width={50}
              height={50}
              className="mt-20"
            />
          </div>
        </div>

        <PremiumTile name={player.name} />

        <div className="flex justify-between  w-full mt-4">
          <div className="p-2 flex flex-col w-2/3 ml-2">
            <div className="w-24 rounded-full mb-1 text-center text-xs p-1 bg-black text-white border border-white uppercase">
              height
            </div>
            <TileInfo TileInfoData={player.height} />
            <div className="w-24 rounded-full mb-1 text-center text-xs p-1 bg-black text-white border border-white uppercase">
              role
            </div>
            <TileInfo TileInfoData={player.role} />
          </div>

          <JerseyTile JerseyNumber={player.jersey_number} />
        </div>
      </div>
    </div>
  );
}