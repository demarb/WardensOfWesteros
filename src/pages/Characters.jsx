import { useEffect, useState, useContext } from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import CharacterContext from "../components/CharacterContext";

export default function Characters(){

    
    //Navigates
    const navigate = useNavigate()

    //useContexts
    const {charactersData, setCharactersData} = useContext(CharacterContext)


    //Functions
        function clickCharacter(id){
            console.log(`ID CLICKED WAS ${id}`)
            
            navigate(`/characters/${id}`)
        }

        

    //Renders
    const charactersRender = charactersData.map((character)=>{
        return (
            <div key={character.id} className="characters-grid-item" onClick={()=>clickCharacter(character.id)}>
                {/* <img onClick={clickCharacter} src={character.imageUrl}></img> */}
                <img  src={character.imageUrl}></img>
                {/* <button>More</button> */}
            </div>
        )
    })

    

    return (
        <>
            <Nav/>
            <section className="characters-section">
                {charactersRender}
            </section>
            
        </>
        
    )
}