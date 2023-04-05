import { useEffect,useState } from "react";
const useRestaurant = (resId)=>{
    const [restaurant,setRestaurant] = useState(null);

   useEffect(()=>{
      getRestaurantInfo();
   },[])

   async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json.data.cards[0].card.card.info);
    setRestaurant(json.data); 
  }

  return restaurant;
}

export default useRestaurant;