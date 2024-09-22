import axios from "axios";

const parameters = {
    headers: {
        Authorization: "bearer " + import.meta.env.VITE_STRAPI_API_KEY,
    },
};

//Making A Function For FetchingData From Strapi : 
export async function fetchDataFromAPI(url) {
    try {
        const response = await axios.get(import.meta.env.VITE_DEV_URL + url, parameters);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}