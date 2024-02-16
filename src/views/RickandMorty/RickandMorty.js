import React, {useState} from 'react';
import RickandMortyTable from "../../components/RickandMortyTable/RickandMortyTable";
import RickandMortyCardsGrid from "../../components/RickandMortyCardsGrid/RickandMortyCardsGrid";
import style from "./RickandMorty.module.css";
import clsx from 'clsx';

function RickandMorty() {
    const [displayGrid, setDisplayGrid] = useState("true");

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <div className={style.switch}>
                        <div className={clsx(style.button_tablegrid, {[style.active]: displayGrid})}
                             onClick={() => setDisplayGrid(true)}>
                            Grid
                        </div>

                        <div className={clsx(style.button_tablegrid, {[style.active]: !displayGrid})}
                             onClick={() => setDisplayGrid(false)}>
                            Table
                        </div>

                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col">
                    {
                        displayGrid ?
                            <RickandMortyCardsGrid
                                col={{xs:1, sm:2, md:3, lg:4, xl:5}}
                            /> :
                            <RickandMortyTable/>
                    }

                </div>
            </div>

        </div>

    )

}

export default RickandMorty;

