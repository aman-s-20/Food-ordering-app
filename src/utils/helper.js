export function filterData(searchText, restaurants) {
    // 8 restraunt list = > filtered  rest with "King"
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  
    return filterData;
  }