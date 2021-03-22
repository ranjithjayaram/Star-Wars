 const API_CONSTANTS= {
    STARWAR_API:{
        API_NAME:'StarWarApis',
        PATHS:{
            Allpeople:(num)=>`/people/?page=${num}`,
            AllPlanets:(num)=>`/planets/?page=${num}`,
            AllSpecies:(num)=>`/species/?page=${num}`,
            AllShips:(num)=>`/starships/?page=${num}`,
            AllVehicle:(num)=>`/vehicles/?page=${num}`
        }
    }
}
export default API_CONSTANTS;