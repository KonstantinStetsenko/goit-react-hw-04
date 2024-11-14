import axios from "axios";
import { useEffect } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { useState, useId } from "react";
import css from "./ImageGallery.module.css";

export let ArrPhoto = [];

export default function ImageGallery({ photos, openModal }) {
  return (
    <ul className={css.containerGallery}>
      {photos.map((photo) => (
        <li className={css.listGallery} key={photo.id} onClick={() => openModal(photo.urls.regular, photo.alt_description)}>
          <ImageCard 
            small={photo.urls.small}
            alt_description={photo.alt_description}
            large={photo.urls.regular} // URL большого изображения
            openModal={openModal}
          />
          <div className={css.text}><p className={css.textName}>likes: </p> {photo.likes}</div>
          <div className={css.text}><p className={css.textName}>Author: </p> {photo.user.name}</div>
         
        </li>
      ))}
    </ul>
  );
}