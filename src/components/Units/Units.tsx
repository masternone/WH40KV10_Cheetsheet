import { Factions } from "../../data/utilityTypes.ts";
import { units } from "../../data/units.ts";
import Weapons from "../Weapons/Weapons.tsx";

export interface UnitsProps {
  faction: Factions;
}

const Units = ({ faction }: UnitsProps) => {
  const unitsDictionary = units[faction];
  return (
    <>
      <h3 className="text-10 font-bold">{faction}</h3>
      {Object.entries(unitsDictionary!).map(([name, unitValues], index) => (
        <div className="should-this-print" key={index}>
          <input type="checkbox" />
          <h4 className="text-8 font-bold">{name}</h4>
          <div className="grid grid-cols-units gap-5 border-t py-1">
            <div className="flex flex-wrap flex-col">{unitValues.abilities.map((ability, index) =>
              <div key={index}>{ability}</div>)}</div>
            <div>{Object.entries(unitValues.composition).map(([count, cost], index) => (
              <div className="flex justify-evenly gap-x-4" key={index}>
                <span>{count}</span>
                <span>{cost}</span>
              </div>
            ))}</div>
            <div>
              <div className="grid grid-cols-6 gap-5 py-1">
                <div>M</div>
                <div>T</div>
                <div>Sv</div>
                <div>W</div>
                <div>LD</div>
                <div>OC</div>
              </div>
              <div className="grid grid-cols-6 gap-5 py-1">
                <div>{unitValues.stats.move}</div>
                <div>{unitValues.stats.toughness}</div>
                <div>{unitValues.stats.save}</div>
                <div>{unitValues.stats.wounds}</div>
                <div>{unitValues.stats.leadership}</div>
                <div>{unitValues.stats.objectiveControl}</div>
              </div>
            </div>
            <div className="col-span-3">{unitValues.weapons.map((name, index) => (
              <Weapons {...{ showHeader: index === 0, name }} key={index} />
            ))}</div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Units;