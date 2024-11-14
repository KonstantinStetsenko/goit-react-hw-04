import axios from "axios";

const API_KEY = "raLFzrHm_qCJkpZwZMAVi26Er4KW4PemxmIVKtzBpLY";
const BASE_URL = "https://api.unsplash.com";
const ENDPOINT = "/search/photos/";

export const search = "dog";
export const page = 1;
export const per_page = 20;

export async function fetchGallery(search, page) {
  const response = await axios({
    baseURL: BASE_URL,
    url: ENDPOINT,
    params: {
      client_id: API_KEY,
      page: page,
      per_page: per_page,
      query: search,
      orientation: "landscape",
    },
  });
  // Извлечение общего количества элементов из данных ответа
  const totalItems = response.data.total_pages; // Поле total содержит общее количество элементов
  const itemsPerPage = response.data.results; // Количество элементов на странице

  console.log("Общее количество элементов:", totalItems, itemsPerPage);

  return {
    data: response.data.results,
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
  };
}

export default fetchGallery;
