import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacterDetails } from "../actions/characterActions";
import "./characterDetailsPage.css"

const CharacterDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const characterDetails = useSelector(state => state.characters.characterDetails);

    useEffect(() => {
        dispatch(fetchCharacterDetails(id));
    }, [dispatch, id]);

    if (!characterDetails) return <p>Loading...</p>;

    return (
        <div>
            <img src={characterDetails.image} alt={characterDetails.name} />
            <h2>{characterDetails.name}</h2>
            <p>Species: {characterDetails.species}</p>
            <p>Gender: {characterDetails.gender}</p>
            <p>Origin: {characterDetails.origin?.name}</p>
            <p>Location: {characterDetails.location?.name}</p>
        </div>
    );
};

export default CharacterDetailsPage;

