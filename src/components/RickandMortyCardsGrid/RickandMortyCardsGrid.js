import React, { useContext, useState } from "react";
import RickandMortyCard from "../RickandMortyCard/RickandMortyCard";
import { RickandMortyContext } from "../Context/Context";
import style from "./RickandMortyCardsGrid.css"

function RickandMortyCardsGrid(props) {
    const {col,characters: propChar, SearchBar = true }= props;
    const {characters:contextChar} = useContext(RickandMortyContext);
    const [text,setText] = useState("");

    const characters = propChar || contextChar;

    const filteredChar = characters.filter(character =>
        character.name.toLowerCase().includes(text.toLowerCase())
    );

    const characterCards = filteredChar.map((character) => {
        return (
            <div key={character.id} className={`col mb-4`}>
                <RickandMortyCard
                    id={character.id}
                    name={character.name}
                    image={character.image}
                    species={character.species}
                />
            </div>
        );});

    return (
        <div className="container">
            {SearchBar ? (
                <div className="searchbar">
                    <input type="text"
                           placeholder="Search Character"
                           className="text"
                           onChange={event => setText(event.target.value)}
                           value={text}/>
                </div>
            ): null}

            <div className={`row 
                row-cols-${col.xs} 
                row-cols-sm-${col.sm} 
                row-cols-md-${col.md} 
                row-cols-lg-${col.lg} 
                row-cols-xl-${col.xl}`}>
                {characterCards}
            </div>
        </div>
    );
}

export default RickandMortyCardsGrid;

