import { useContext } from "react";
import Nav from "../components/Nav";
import CharacterContext from "../components/CharacterContext";
import { useParams } from "react-router-dom";

export default function CharacterDetails(){
    
    //useContexts
    const {charactersData, setCharactersData} = useContext(CharacterContext)

    const {id} = useParams()

    //Functions
    const selectedCharacter = charactersData.find((character)=>character.id == id)
    

    return (
        <>
            <Nav/>

            { selectedCharacter ?

                <section className="character">

                    <img src={selectedCharacter.imageUrl}></img>
                    <div className="character-about">
                        <h1 className="character-name">Full Name : {selectedCharacter.fullName}</h1>
                        <h2 className="character-title">Title : {selectedCharacter.title}</h2>
                        <h2 className="character-family">Family : {selectedCharacter.family}</h2>

                    </div>
                    
                    
                </section>

                :

                <section className="character">
                    <h1>CHARACTER DOES NOT EXIST</h1>
                </section>

            }

        </>
        
    )
}