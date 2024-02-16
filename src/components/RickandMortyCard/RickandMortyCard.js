import React, {useContext} from "react";
import { RickandMortyContext } from "../Context/Context";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import style from "./RickandMortyCard.module.css";
import {NavLink} from "react-router-dom";

function RickandMortyCard(props) {
    const { name, id, image, species } = props;


    return (
        <NavLink to={`/character/${id}`}>
            <Card className={style.card}>
                <CardImg loading="lazy" className={style.img_card} top width="100%" src={image} alt={name}/>
                <CardBody className="text-center">
                    <CardTitle tag="h5" className={style.title_card}>{name}</CardTitle>
                    <CardText className={style.species_card}>
                        {species}
                    </CardText>
                </CardBody>
            </Card>
        </NavLink>
    );
}

export default RickandMortyCard;