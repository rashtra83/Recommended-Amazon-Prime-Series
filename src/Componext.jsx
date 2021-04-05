import React from 'react';
import './Component.css';

const Component = (props) =>{
    return(
        <div className="cards">
        <div className="card">
            <img  className="card_img" src ={props.imgsrc} alt = "Poster"/>
            <div className="card_info">
                <h3 className="card_title">{props.sname}</h3>
                <a href={props.link} target="_blank" rel="noreferrer">
                    <button className="button"> Watch Now</button>
                </a>
            </div>
        </div>
        </div>
    )
}
export default Component;