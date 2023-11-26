import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import data from "./data.js";


/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {

    const cards = data.map(card => {
        return <Card
            key={card.id}
            {...card}
        />
    })

    return (
        <div>
          <Navbar />
          <Hero />
          <section className="cards-list">
           {cards}
            </section>
        </div>
    )
}