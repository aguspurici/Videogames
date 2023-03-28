import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postVideogame } from "../../actions";


export default function postVideogame() {
  const dispatch = useDispatch();
  const history = useHistory(); 
  const genres = useSelector((state) => state.genres);
  const[ formulario, setFormulario ] = useState({
    name: "",
    description: "",
    rating: "",
    image: "",
    released: "",
    genres: [],
    platforms: [],
  });

  useEffect( () => {
    dispatch(getGenres());
  } , []);


  return(
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
                    <label>Nombre</label>
                    <input type="text" value={formulario.name} name="name" onChange={(e) =>handleChange(e)}/>
                    {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}

                    <label>Descripcion</label>
                    <input type="text" value={formulario.description}  name="description" onChange={(e) =>handleChange(e)}/>
                    {errors.description && <p style={{color: 'red'}}>{errors.description}</p>}

                    <label>Rating</label>
                    <input type="number" value={formulario.rating}  name="rating" onChange={(e) =>handleChange(e)}/>
                    {errors.rating && <p style={{color: 'red'}}>{errors.rating}</p>}   

                    <label >Imagen</label>
                    <input type="text" value={formulario.image}  name="image" onChange={(e) =>handleChange(e)}/>
                    <br />

                    <label>Fecha de lanzamiento</label>
                    <input type="date" value={formulario.released}  name="released" onChange={(e) =>handleChange(e)}/>


                    <label>Generos:</label>
                      
                        <select onChange={(e) => handleSelect(e)}>
                          {genres &&
                            genres.map((genre) => (
                              <option key={genre.id} name='genre' value={genre.name}>
                                {genre.name}
                               </option>
                          ))}
                        </select>
                      

                      
                      <label>Plataformas:</label>
                        <select onChange={(e) => handleSelect(e)}>
                          {platforms &&
                            platforms.map((platform, id) => (
                              <option key={id} value={platform.name}>
                                {platform.name}
                              </option>
                            ))}
                         </select>
                      

                      <button type="submit" disabled={errorBoton ? true : false}> Crear </button>
          </div>

        </form>
      </div>
    </div>
  )
}



