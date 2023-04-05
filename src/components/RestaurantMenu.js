import { useEffect,useState } from "react";
import {  useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import useRestaurant from "./utils/useRestaurant";


const RestaurantMenu = ()=>{
const {resId}= useParams();
const restaurant = useRestaurant(resId);



    return (
        <div>
            <h1>Restaurant id : {restaurant?.cards[0]?.card?.card?.info?.id}</h1>
            <h1>Name :{restaurant?.cards[0]?.card?.card?.info?.name} </h1>
            <h1>City :{restaurant?.cards[0]?.card?.card?.info?.city}</h1>
            <h1>Name :{restaurant?.cards[0]?.card?.card?.info?.slugs?.restaurant}</h1>
            <h1>Restaurant city :{restaurant?.cards[0]?.card?.card?.info?.slugs?.city}</h1>
            <h1>{console.log(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)}</h1>
            <h1></h1>
        </div>
    )
}

export default RestaurantMenu;