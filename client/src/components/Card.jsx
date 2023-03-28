import React from "react";

export default function Card({ image, name, genre, id, rating }) {
    return name ? (
      <div>
        
          <div >
            <h3>{name}</h3>
          </div>
          <div >
            <img src={image} alt='img not found' width='209px' height='210px' />
          </div>
          <div >
            <h3>
              {" "}
              <div>{rating}</div>
            </h3>
          </div>
          <div>
          {genre?.map((elm) => (
            <h5>{elm}ㅤ</h5>
          ))}
        </div>        
      
      </div>
    ) : null;
  }
  
