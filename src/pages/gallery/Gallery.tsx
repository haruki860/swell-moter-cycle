import "./Gallery.css";
import getFirebase from "../../firebase/firebase";
import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import useMediaQuery from "../../components/hooks/useMediaquery";
import "firebase/compat/storage";
import firebase from "firebase/compat/app";
import { ComponentProps } from "react";

type Photo = {
  image_url: string;
};

type Props = {
  currentPhotos: Photo[];
};

const PhotoList: React.FC<Props> = (props: Props) => {
  return (
    <ul className="photoList">
      {props.currentPhotos &&
        props.currentPhotos.map((photo) => {
          return (
            <li key={photo.image_url} className="photoImage">
              <img src={photo.image_url} className="photoListImage" />
            </li>
          );
        })}
    </ul>
  );
};

type StorageRef = firebase.storage.Reference;
const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const storage = getFirebase().storage();
  const storageRef = storage.ref("gallery/image");

  useEffect(() => {
    const fetchURLs = async () => {
      const urls = await getPhotoURLs(storageRef);
      setPhotos(
        urls.map((url) => {
          return { image_url: url };
        })
      );
    };
    fetchURLs();
  }, []);

  const getPhotoURLs = async (storageRef: StorageRef) => {
    const all = await storageRef.listAll();
    const itemNames = all.items.map((item) => item.name);
    return await Promise.all(
      itemNames.map(async (name: string) => await getPhotoURL(storageRef, name))
    );
  };

  const getPhotoURL = async (storageRef: StorageRef, itemName: string) => {
    return await storageRef.child(itemName).getDownloadURL();
  };

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [startOffset, setStartOffset] = useState(0);
  const PC_PER_PAGE = 8;
  const SP_PER_PAGE = 2;
  const perPage = isDesktop ? PC_PER_PAGE : SP_PER_PAGE;
  const endStartOffset = startOffset + perPage;
  const currentPhotos = photos.slice(startOffset, endStartOffset);
  const pageCount = Math.ceil(photos.length / perPage);

  const handlePageClick = (
    selectedItem: Parameters<
      NonNullable<ComponentProps<typeof ReactPaginate>["onPageChange"]>
    >[0]
  ) => {
    const newOffset = (selectedItem.selected * perPage) % photos.length;
    setStartOffset(newOffset);
  };

  return (
    <>
      <PhotoList currentPhotos={currentPhotos} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        breakClassName="page-item"
        containerClassName="pagination"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Gallery;
