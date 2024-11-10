import axios from "axios";
import { useEffect } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { useState } from "react";
import css from "./ImageGalleryr.module.css";



export let ArrPhoto = [];

export default function ImageGallery({photos}) {


  return (
    <ul className={css.containerGallery}>
      {photos.map((photo) => (
        <li className={css.listGallery} key={photo.id}>
          <ImageCard
            small={photo.urls.small}
            alt_description={photo.alt_description}
            regular={photo.urls.regular}
          />
        </li>
      ))}
    </ul>
  );
}
