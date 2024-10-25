import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacterDetails } from "../actions/characterActions";
import "./characterDetailsPage.css"

const CharacterDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const character = useSelector(state => state.characters.selectedCharacter);

    useEffect(() => {
        dispatch(fetchCharacterDetails(id));
    }, [dispatch, id]);

    return character ? (
        <div className="character-details">
            <img src={character.image} alt={character.name} />
            <div className="details-info">
                <h3>{character.name}</h3>
                <p><strong>Status:</strong> {character.status}</p>
                <p><strong>Species:</strong> {character.species}</p>
                <p><strong>Gender:</strong> {character.gender}</p>
                <p><strong>Origin:</strong> {character.origin.name}</p>
                <p><strong>Location:</strong> {character.location.name}</p>
            </div>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default CharacterDetailsPage;