// import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";


const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {user,setUser} = useContext(userContext);
  // empty dependency array => once after render
  // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
  useEffect(() => {
    // API CALL
    console.log("get api in useEffect")
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  
   const isOnline = useOnline();
   
  if(!isOnline)return <h1>😑 seems to be offline </h1>;
   



  // not render component (Early return)
  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0)
  //   return <h1>No Restraunt match your Filter!!</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-pink-200 p-3 my-4">
        <input
          type="text"
          className="rounded-md py-2 px-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <input value = {user.name} onChange={
          (e)=>setUser({
          name : e.target.value,
          email : "new email"
        })}></input>
        <button 
          className="bg-purple-900 hover:bg-purple-300 rounded-md text-white py-2 px-2"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {/* You have to write logic for NO restraunt fount here */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
