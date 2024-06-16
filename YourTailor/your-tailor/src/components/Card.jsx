import "./styles/Card.css";
import { useState } from 'react';
import tshirt from './assets/tshirt1.png'


export function Card(){

    const [likeIcon, setLikeIcon] = useState("fa-regular fa-heart");

    function like(){
        setLikeIcon(likeIcon == "fa-regular fa-heart"?"is-liked fa-solid fa-heart":"fa-regular fa-heart");
    }


    return <div className="card">
        <img className="merchImg" src={tshirt} alt="tshirt image" />
        <a className="orderBtn"><h2>Order</h2></a>
        <a onClick={like} className="likeBtn"><h2><i className={likeIcon}></i></h2></a>
    </div>
    
    
}