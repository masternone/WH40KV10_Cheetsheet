import { stratagems } from "../../data/stratagems.ts";
import { Factions } from "../../data/utilityTypes.ts";
import React from "react";

export interface StratagemsProps {
  faction: Factions;
}

const Stratagems = ({ faction }: StratagemsProps) => {
  const factionStratagems = stratagems[faction];
  return (
    <>
      <h3 className="text-10 font-bold">{faction}</h3>
      <div className="grid grid-cols-stratagems gap-5">
        <div className="">Name</div>
        <div className="">Cost</div>
        <div className="">When</div>
        <div className="">Target</div>
        <div className="">Effect</div>
        <div className="">Restriction</div>
      </div>
      {factionStratagems.map((stratagem, index) => (
        <div className="grid grid-cols-stratagems gap-5 border-t py-1"
             key={index}>
          <div className="">{stratagem.name}</div>
          <div className="text-center">{stratagem.cost}</div>
          <div className="flex gap-2 ">{stratagem.when.map((when, index) =>
            <React.Fragment key={index}>
              <span>{when}</span></React.Fragment>)}</div>
          <div className="">{stratagem.target}</div>
          <div className="">{stratagem.effect}</div>
          <div className="">{stratagem.restriction || ''}</div>
        </div>
      ))}
    </>
  )
}

export default Stratagems;