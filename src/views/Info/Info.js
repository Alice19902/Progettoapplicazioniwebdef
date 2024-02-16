import React from "react";
import imgRMInfo from "../../assets/images/RickandMortyInfo.png";

function Info() {

    return (
            <div className="container">
                <div className="row gx-5">
                    <h1 style={{marginBottom:'30px'}}>Rick and Morty: The series</h1>
                    <div className="col-12"> <p style={{fontFamily:"'Single Day',Lucida Sans",fontSize:'30px', color:'#78c850'}}> Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon, revolving around the interdimensional adventures of a cynical, alcoholic mad scientist, Rick Sanchez, and his not-so-bright nephew Morty Smith. Through dimensional portals they are able to travel through an infinite number of realities, planets and dimensions encountering characters of various natures: robots, humanoids, aliens and multiple versions of all the characters as they embark on dangerous missions, often to suit Rick's selfish plans.
                        The original idea for the series came from an animated short parody of "Back to the Future" created by Justin Roiland for a short film festival co-founded by Dan Harmon.
                        Since the first episodes, the series has received praise for its script: original, creative and full of cynical humor.
                        It was nominated for three "Primetime Emmy Awards" for Outstanding Animated Program, winning it in 2018 and 2020. The series also received two "Annie Awards".
                    </p></div>
                </div>

                <div className="row gx-5">
                    <h1 style={{marginTop:'50px'}}>Why this site?</h1>
                    <div className="col-6 justify-content-center align-content-center"><img src={imgRMInfo} alt={"Rick and Morty"} loading="lazy"/></div>
                    <div className="col-6"><p style={{fontFamily:"'Single Day',Lucida Sans",fontSize:'30px', color:'#78c850',marginTop:'30px'}}>This site was created with Rick and Morty API available from "https://rickandmortyapi.com/". The aim is to provide various information about the characters of this TV series, such as: status, species, last known location,
                        the place of origin where the character first appeared... and obviously whether they are alive or not.
                    </p></div> </div>
        </div>


    )
}

export default Info;
