import { useEffect, useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessager from "./components/ErrorMessage/ErrorMessage";
import RotatingLinesLoader from "./components/Loader/Loader";
import { fetchGallery, per_page } from "./gallery-api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Modal from "react-modal";
import ImageModal from "./components/ImageModal/ImageModal";
import toast from "react-hot-toast";
import { BsFillEmojiFrownFill } from "react-icons/bs";

// Модальное окно
Modal.setAppElement("#root");

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [totalPage, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState(null);
  const [altDescription, setAltDescription] = useState("");

  const openModal = (imageUrl, description) => {
    setLargeImageUrl(imageUrl); // Устанавливаем URL большого изображения
    setAltDescription(description);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setLargeImageUrl(null); // Сбрасываем URL большого изображения
  };

  const handleClick = () => setPage((prev) => prev + 1);

  function handleSearch(search) {
    if (!search.trim()) {
      setSearchTerm("");
      setPage(1);
      setPhotos([]);
      setTotalItems(0);
      toast.error("Поле поиска не должно быть пустым");
      return;
    }
    setSearchTerm(search);
    setPage(1);
  }

  useEffect(() => {
    if (totalPage === page) {
      toast.success("Изображений больше нет");
    }
    
  }, [page,totalPage]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const { data, totalItems: fetchedTotalItems } = await fetchGallery(
          searchTerm,
          page
        );

        setPhotos((prevPhotos) =>
          page === 1 ? data : [...prevPhotos, ...data]
        );
        setTotalItems(fetchedTotalItems);

        setTotalPages(Math.ceil(fetchedTotalItems / per_page));
        setError(false);
        console.log(`Общее количество элементов: ${fetchedTotalItems}`);
      } catch (error) {
        console.error("Ошибка запроса:", error);
        setStatus(error.response ? error.response.status : "No response");
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) fetchPhotos();
  }, [page, searchTerm]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessager status={status} error={error} />}{" "}
      {loading ? (
        <RotatingLinesLoader />
      ) : !error && photos.length > 0 ? (
        <ImageGallery
          photos={photos}
          openModal={(largeImageUrl, altDescription) =>
            openModal(largeImageUrl, altDescription)
          }
        />
      ) : (
        !error &&
        searchTerm && (
          <p className="messege">
            <span className="text">
              Извините, по вашему запросу ничего не найдено.
            </span>
            <BsFillEmojiFrownFill size={60} />
          </p>
        )
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        largeImageUrl={largeImageUrl} // Передаем изображение в модальное окно
        large={largeImageUrl}
        alt_description={altDescription}
      />
      {page < totalPage && <LoadMoreBtn onClick={handleClick} />}
    </>
  );
}

export default App;
