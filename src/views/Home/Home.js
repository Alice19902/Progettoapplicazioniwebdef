import React, {useContext} from "react";
import RickandMortyCardsGrid from "../../components/RickandMortyCardsGrid/RickandMortyCardsGrid";
import { RickandMortyContext } from "../../components/Context/Context";
import {NavLink} from "react-router-dom";
import RickMorty from "../../assets/images/Rick_and_Morty.png"


function Home() {
    const { characters } = useContext(RickandMortyContext);
    const RickandMortyHome = characters.filter((character) => character.id === 1 || character.id === 2 );

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-9 justify-content-center my-2 mx-2">
                    <div className="my-5 mt-5 text-center">
                        <img style={{marginBottom:'100px',marginTop:'-20px'}} src={RickMorty} alt={"Rick and Morty"} loading="lazy"/>
                        <RickandMortyCardsGrid
                            characters={RickandMortyHome}
                            col={{xs: 10, sm: 8, md: 6, lg: 4, xl: 2}}
                            SearchBar={false}/>
                        <NavLink className="button_home" to="/characters" onClick={() => window.scrollTo(0, 0)}>Discover all the characters</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;


