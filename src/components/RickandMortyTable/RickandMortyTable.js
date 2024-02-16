import React, { useContext } from "react";
import style from "./RickandMortyTable.module.css";
import {NavLink} from "react-router-dom";
import { RickandMortyContext } from "../Context/Context";

function RickandMortyTable() {
    const {characters} = useContext(RickandMortyContext);

    return (
            <table style={{backgroundColor: '#010612', justifyContent:'center', alignContent:"center",width:'100%'}}>
            <thead style={{fontFamily:"'Rick_and_Morty','Lucida Sans'", fontSize:'50px', color:'#78c850'}}>
            <tr style={{ marginBottom:'30px',borderBottom:'2px solid #00b5cd'}}>
                <th>Image</th>
                <th style={{ paddingLeft:'70px'}}>Name</th>
                <th style={{ paddingLeft:'-20px'}}>Species</th>
                <th></th>
            </tr>
            </thead>
            <tbody style={{fontFamily:"'Single Day','Lucida Sans'", fontSize:'30px', color:'#78c850'}}>
            {characters.map((character, index) => (
                <tr key={character.id}>
                    <td><img src={character.image} alt={character.name} style={{width: '100px', height: '100px', borderRadius:'20px', marginBottom:'20px', marginTop:'30px'}}/></td>
                    <td style={{ paddingLeft:'70px'}}>{character.name}</td>
                    <td style={{ paddingLeft:'-40px'}}>{character.species}</td>
                    <td style={{ paddingLeft:'30px'}}><NavLink to={`/character/${character.id}`}>Card</NavLink></td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default RickandMortyTable;


