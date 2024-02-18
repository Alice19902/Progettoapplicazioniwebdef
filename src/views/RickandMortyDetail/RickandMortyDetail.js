import React, { useContext } from 'react';
import { RickandMortyContext } from "../../components/Context/Context";
import { NavLink, useParams } from 'react-router-dom';
import style from "./RickandMortyDetail.module.css";

function RickandMortyDetail() {
    const { id: prevnext } = useParams();
    const id = parseInt(prevnext);
    const {characters} = useContext(RickandMortyContext);
    const character = characters.find(c => c.id === id);

    const next = id + 1 <= characters.length;
    const prev = id - 1 >= 1;

    return (
        <div className="container">
            <div style={{display:'flex',flexDirection:'row',alignItems:'center', width:'100%',height:'60%',marginBottom:'200px', marginTop:'150px', justifyContent:"center"}}>
                <img src={character?.image} alt={character?.name} style={{width:'25%',borderRadius:'20px'}} />
                <div style={{marginLeft:'200px'}}>
                    <h2 style={{fontFamily: 'Rick_and_Morty',color:'#00b5cd',fontSize:'80px',marginBottom:'50px'}}>{character?.name}</h2>
                    <p className={style.p_detail}>Status: {character?.status}</p>
                    <p className={style.p_detail}>Species: {character?.species}</p>
                    <p className={style.p_detail}>Type: {character?.type ? character.type : 'unknown'}</p>
                    <p className={style.p_detail}>Location: {character?.location.name}</p>
                    <p className={style.p_detail}>Origin: {character?.origin.name}</p>
                </div>
            </div>

            <div className={style.nav_detail}>
                {prev ? (
                    <NavLink className="button_home" to={`/character/${id - 1}`}>&lt; Prev</NavLink>
                ) : null}
                {next ? (
                    <NavLink className="button_home" to={`/character/${id + 1}`}>Next &gt;</NavLink>
                ) : null}</div>
        </div>
    );
}

export default RickandMortyDetail;

