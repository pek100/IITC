import "./Card.css";
import { useState } from 'react';


export function Card(){

    const [likeIcon, setLikeIcon] = useState("fa-regular fa-heart");

    function like(){
        setLikeIcon(likeIcon == "fa-regular fa-heart"?"is-liked fa-solid fa-heart":"fa-regular fa-heart");
    }


    return <div className="card">
        <a className="orderBtn"><h2>Order</h2></a>
        <a onClick={like} className="likeBtn"><h2><i className={likeIcon}></i></h2></a>
    </div>
    
    
}