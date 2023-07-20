import './App.css'
import Stratagems from "./components/Stratagems/Stratagems.tsx";
import Detachments from "./components/Detachments/Detachments.tsx";
import Units from "./components/Units/Units.tsx";

function App () {

  return (
    <>
      <main className="">
        <section>
          <h2 className="text-12 font-bold">Stratagems</h2>
          <Stratagems {...{ faction: 'Core' }} />
          <Stratagems {...{ faction: 'Thousand Sons' }} />
        </section>
        <section>
          <h2 className="text-12 font-bold">Army Rule</h2>
          <Stratagems {...{ faction: 'Cabal of Sorcerers' }} />
        </section>
        <section>
          <h2 className="text-12 font-bold">Detachment</h2>
          <Detachments {...{ detachment: 'Cult of Magic' }} />
        </section>
        <section>
          <h2 className="text-12 font-bold">Units</h2>
          <Units {...{faction: 'Thousand Sons'}} />
        </section>
      </main>
    </>
  )
}

export default App
