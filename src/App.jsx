import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessager from "./components/ErrorMessage/ErrorMessage";
import RotatingLinesLoader from "./components/Loader/Loader";
import { fetchGallery } from "./gallery-api";

// const API_KEY = "raLFzrHm_qCJkpZwZMAVi26Er4KW4PemxmIVKtzBpLY";
// const BASE_URL = "https://api.unsplash.com";
// const ENDPOINT = "/photos/random/";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  
  const handleSearch = async (topic) => {
    try {
      setPhotos([]);
      setError(false);
      setLoading(true);
      const data = await fetchGallery(topic);
       setPhotos(data);
    } catch (error) {
      setStatus(error.response ? error.response.status : "No response");
      setError(true);
    } finally {
      setLoading(false);
    }
  }


  // useEffect(() => {
  // async function fetchGalleryPhotos() {
  //     try {
  //       setLoading(true);
  //       const data = await fetchGallery("car");
  //       console.log("Данный с функции",data)
  //       console.log("Полученные изображения:", data);
  //       setPhotos(data);
  //       setStatus(error.response.status);
  //     } catch (error) {
  //       setError(true);
  //       setStatus(error.response ? error.response.status : "No response");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchGalleryPhotos() ; // Вызов функции fetchArticles при монтировании компонента
  // }, []);

  return (
    <>
      <SearchBar onSearch={ handleSearch} />
      {error && <ErrorMessager status={status} error={error} />}
      {loading ? <RotatingLinesLoader /> : <ImageGallery photos={photos} />}
    </>
  );
}

export default App;
