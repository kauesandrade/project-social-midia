import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const API_URL = "http://localhost:8080"

const fetchApi = async () => {

    await axios.get(API_URL + "/profile/1").then((response) => {
        return response.data
    })
    
}

export default fetchApi;

// export default function useProfileData() {
//     const query = useQuery('profile-data', fetchApi)

//     return query.data
// }