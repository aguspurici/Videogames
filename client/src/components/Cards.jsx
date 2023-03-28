import React, { useEffect, useState } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { getVideogames, getGenres } from "../redux/actions/actions"; 
import { Link } from "react-router-dom"


export default function Cards() {
    const allVideogames = useSelector((state) => state.videogames);
    const dispatch = useDispatch();
    const [videogamesPerPage] = useState(15);
    const [currentPage] = useState(1);
    const indexOfLastVideogame = currentPage * videogamesPerPage;
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
    const currentVideogames = allVideogames.slice(
      indexOfFirstVideogame,
      indexOfLastVideogame
    );

        useEffect(()=>{
            dispatch(getVideogames());
            dispatch(getGenres());
        }, [dispatch]);
        
    return allVideogames.length ? (
        <>
        <div>

        {currentVideogames &&
          currentVideogames.map((elm) => {
              return (
                <div key={elm.id}> 

                <Link key={elm.id} to={`/videogame/${elm.id}`}>
                  <Card
                    
                    id={elm.id}
                    image={elm.image}
                    name={elm.name}
                    genre={elm.genre}
                  />
                </Link>
                </div>
                  );
                })}
      </div>
        </>
        

    ) : (
        <h4>Cargando</h4>
    )

};



