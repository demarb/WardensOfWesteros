import { Link } from "react-router-dom"

export default function Home(){


    return (
        <section className="home">
            <div className="overlay">
                <h1>Wardens of Westeros</h1>
                <h2>Find Game of Thrones Characters</h2>
                <button><Link to="/characters"> See Characters </Link></button>
                {/* <Link to="/characters"><button> See Characters </button></Link> */}
            </div>
            
        </section>
    )
}