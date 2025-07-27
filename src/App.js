import React, { useState } from 'react';
import menus from './data';
import Categories from './Components/Categories';
import Menu from './Components/Menu';
import "./App.css"

const headMenu = ['all', ...new Set(menus.map(rr => rr.category))]


function App() {

  const [thing , setThing] = useState(menus)

  const filtermenu = (category)=>{
    if (category === 'all') {
      setThing(menus)
      return
    }

    let filterHead = menus.filter( rr => rr.category == category)
    setThing(filterHead)
  }
  
  console.log(headMenu);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories exportcat={headMenu} funFilter={filtermenu}/>
        <Menu exthing={thing}/>
      </section>
    </main>
  );
}

export default App;
