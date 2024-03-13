import { require } from 'nodejs';
import PhotoAlbum from "react-photo-album";
import { photos } from "./photos";

const photoList = photos.map((photo) => ({
  src: require(`./photos/${photo}`),
  alt: photo,
}));

<PhotoAlbum layout="masonry" photos={photoList} />
