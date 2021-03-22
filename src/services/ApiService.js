import APIS from './ApiConstants';
import axios from 'axios';
const API_BASE='https://swapi.dev/api';
export default {
    
    getAllPeople:(page)=>{
       return axios.get(API_BASE+APIS.STARWAR_API.PATHS.Allpeople(page)).then(res=>{
            return res.data;
        })
    },
    getAllVehicle:(page)=>{
        return axios.get(API_BASE+APIS.STARWAR_API.PATHS.AllVehicle(page)).then(res=>{
            return res.data;
        })
    },
    getAllShip:(page)=>{
        return axios.get(API_BASE+APIS.STARWAR_API.PATHS.AllShips(page)).then(res=>{
            return res.data;
        })
    },
    getAllSpecies:(page)=>{
        return axios.get(API_BASE+APIS.STARWAR_API.PATHS.AllSpecies(page)).then(res=>{
            return res.data;
        })
    },
    getAllPlanets:(page)=>{
        return axios.get(API_BASE+APIS.STARWAR_API.PATHS.AllPlanets(page)).then(res=>{
            return res.data;
        })
    },
}