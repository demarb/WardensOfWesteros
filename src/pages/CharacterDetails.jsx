import { useEffect, useState, useContext } from "react";
import Nav from "../components/Nav";
import CharacterContext from "../components/CharacterContext";
import { useParams } from "react-router-dom";

export default function CharacterDetails(){
    
    //useContexts
    const {charactersData, setCharactersData} = useContext(CharacterContext)

    const {id} = useParams()

    //
    const selectedCharacter = charactersData.find((character)=>character.id == id)
    console.log(selectedCharacter)
    

    return (
        <>
            <Nav/>
            <section className="character">
                <h1>CHARACTER DETAILS</h1>
                <h2>ID : {id}</h2>
                <img src={selectedCharacter.imageUrl}></img>
            </section>
            

            
        </>
        
    )
}