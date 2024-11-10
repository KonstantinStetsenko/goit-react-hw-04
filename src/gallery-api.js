import axios from "axios";

const API_KEY = "raLFzrHm_qCJkpZwZMAVi26Er4KW4PemxmIVKtzBpLY";
const BASE_URL = "https://api.unsplash.com";
const ENDPOINT = "/photos/random/";

const search = "car";
export async function fetchGallery() {
  const response = await axios({
    baseURL: BASE_URL,
    url: ENDPOINT,
    params: {
      client_id: API_KEY,
      per_page: 20,
      count: 20,
      query: search,
      orientation: "landscape",
    },
  });
  return response.data;
}

export default fetchGallery;
