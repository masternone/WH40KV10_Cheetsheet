import { weapons } from "../../data/weapons.ts";

export interface WeaponsProps {
  showHeader: boolean
  name: string;
}

const Weapons = ({ name, showHeader }: WeaponsProps) => {
  const weapon = weapons[name];
  return (
    <>
      {showHeader && (
        <div className="grid grid-cols-8 gap-5 py-1">
          <div>Name</div>
          <div>Range</div>
          <div>A</div>
          <div>W/BS</div>
          <div>S</div>
          <div>AP</div>
          <div>D</div>
          <div>Key Words</div>
        </div>
      )}
      <div className="should-this-print">
        <input type="checkbox" />
        <div className="grid grid-cols-8 gap-5 border-t py-1">
          <div>{name}</div>
          <div>{weapon?.range}</div>
          <div>{weapon?.attacks}</div>
          <div>{weapon?.skill}</div>
          <div>{weapon?.strength}</div>
          <div>{weapon?.armorPenetration}</div>
          <div>{weapon?.damage}</div>
          <div className="flex flex-col">{weapon?.keyWords?.map((keyWord, index) => (
            <span key={index}>{keyWord}</span>
          ))}</div>
        </div>
      </div>
    </>
  )
}

export default Weapons