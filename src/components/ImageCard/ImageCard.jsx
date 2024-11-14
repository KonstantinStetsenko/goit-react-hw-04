import ImageGallery from "../ImageGallery/ImageGallery";

// ImageCard.js
export default function ImageCard({ small, alt_description, large, openModal }) {
  return (
    <div onClick={() => openModal(large)}> {/* Передаем URL большого изображения */}
      <img src={small} alt={alt_description} />
    
    </div>
  );
}
