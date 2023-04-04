import { useEffect,useState } from "react";
import {  useParams } from "react-router-dom";

const RestaurantMenu = ()=>{
const {resId}= useParams();

   useEffect(()=>{
      getRestaurantInfo();
   },[])

   async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.915389606436783&lng=80.94339955598116&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json.data);
    // setRestauraunt(json.data); 
  }

    return (
        <div>
            <h1>Restaurant id : {resId}</h1>
        </div>
    )
}

export default RestaurantMenu;