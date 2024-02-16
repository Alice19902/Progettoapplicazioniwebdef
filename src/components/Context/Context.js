import React,{createContext,useState,useEffect} from 'react';

export const RickandMortyContext = createContext();

export const RMProvider = (props) => {
    const RickandMortyChildren = props.children;
    const [characters, setCharacters] = useState([]);

    const fetchChar = async () => {
        let allChar = [];
        let Url = 'https://rickandmortyapi.com/api/character';

        while (Url) {
            const response = await fetch(Url);
            const data = await response.json();
            allChar = allChar.concat(data.results);
            Url = data.info.next;}
        setCharacters(allChar);
    };
    useEffect(() => {
        fetchChar().catch((error) => console.log("Error" + error));
    }, []);

    return (
        <RickandMortyContext.Provider value={{characters}}>
            {RickandMortyChildren}
        </RickandMortyContext.Provider>
    );
};