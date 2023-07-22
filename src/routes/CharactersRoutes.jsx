import { Routes, Route } from "react-router-dom"
import Characters from "../pages/Characters"
import CharacterDetails from "../pages/CharacterDetails"
import NotFound from "../pages/NotFound"

export function CharactersRoutes(){
    
    return (
        <>
            <Routes>
                <Route index element={ <Characters /> }/>
                <Route path=":id" element={ <CharacterDetails /> }/>
                <Route path="*" element={<NotFound/>} ></Route>
            </Routes>
        </>
        )
}