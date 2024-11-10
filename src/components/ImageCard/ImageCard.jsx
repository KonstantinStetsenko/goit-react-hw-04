import { ArrPhoto } from "../ImageGallery/ImageGallery";

export default function ImageCard({ small, alt_description, regular }) {
  return (
    <div>
      <img src={small} alt={alt_description} />
    </div>
  );
}
