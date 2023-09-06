import "./Gallery.css";
import getFirebase from "../../firebase/firebase";
import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import useMediaQuery from "../../components/hooks/useMediaquery";
import "firebase/compat/storage";
import firebase from "firebase/compat/app";
import {ComponentProps} from "react" 

type Book = {
  image_url : string
}

type Props = {
  currentBooks:Book[]
}

const BookList:React.FC<Props> = (props:Props) => {
  return (
    <ul className="imageList">
      {props.currentBooks &&
        props.currentBooks.map((book) => {
          return (
            <li key={book.image_url} className="bookImage">
              <img src={book.image_url} className="bookListImage" />
            </li>
          );
        })}
    </ul>
  );
};

const Gallery = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const storage = getFirebase().storage();
  const storageRef = storage.ref("gallery/image");
  type StorageRef = firebase.storage.Reference

  useEffect(() => {
    const fetchURLs = async () => {
      const urls = await getBookURLs(storageRef);
      setBooks(
        urls.map((url) => {
          return { image_url: url };
        }),
      );
    };
    fetchURLs();
  }, []);

  const getBookURLs = async (storageRef:StorageRef) => {
    const all = await storageRef.listAll();
    const itemNames = all.items.map((item) => item.name);
    return await Promise.all(
      itemNames.map(async (name:string) => await getBookURL(storageRef, name)),
    );
  };

  const getBookURL = async (storageRef:StorageRef, itemName:string) => {
    return await storageRef.child(itemName).getDownloadURL();
  };

  const isDesktop = useMediaQuery('(min-width: 768px)');
  
  const [startOffset, setStartOffset] = useState(0);
  const PC_PER_PAGE = 8;
  const SP_PER_PAGE = 2;
  const perPage = isDesktop ? PC_PER_PAGE : SP_PER_PAGE
  const endStartOffset = startOffset + perPage;
  const currentBooks = books.slice(startOffset, endStartOffset);
  const pageCount = Math.ceil(books.length / perPage);


  const handlePageClick =  (selectedItem: Parameters<NonNullable<ComponentProps<typeof ReactPaginate>['onPageChange']>>[0]) =>  {
    const newOffset = (selectedItem.selected * perPage) % books.length;
    setStartOffset(newOffset);
  };

  return (
    <>
      <BookList currentBooks={currentBooks} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        pageLinkClassName='page-link'
        previousLinkClassName='page-link'
        nextLinkClassName='page-link'
        previousClassName='page-item' 
        nextClassName='page-item' 
        breakClassName='page-item'
        containerClassName='pagination'
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
