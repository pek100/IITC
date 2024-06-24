import "../styles/Card.css";
import { useState } from 'react';
import tshirt from '../assets/tshirt1.png'


export function Card(){

    const [likeIcon, setLikeIcon] = useState("fa-regular fa-heart");
    const [orderBtnVisible, setOrderBtnVisible] = useState("");

    function like(){
        setLikeIcon(likeIcon == "fa-regular fa-heart"?"is-liked fa-solid fa-heart":"fa-regular fa-heart");
        setOrderBtnVisible(likeIcon == "fa-regular fa-heart"?"order-visible":"");
    }


    return <div className="card">
        <img onClick={like} className="merchImg" src={tshirt} alt="t-shirt image" />
        <a className={orderBtnVisible + " orderBtn"}><h2>Order</h2></a>
        <a onClick={like} className="likeBtn"><h2><i className={likeIcon}></i></h2></a>

    </div>
    
    
}