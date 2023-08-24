import "./Gallery.css";
import getFirebase from "../../firebase/firebase";
import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import useMediaQuery from "../../components/mediaQuery/Mediaquery";
import "firebase/compat/storage";

const BookList = (props) => {
  return (
    <ul className="imageList">
      {props.currentBooks &&
        props.currentBooks.map((book) => {
          return (
            <li key={book.image_url} clssName="bookImage">
              <img src={book.image_url} className="bookListImage" />
            </li>
          );
        })}
    </ul>
  );
};

const Gallery = () => {
  const [books, setBooks] = useState([]);
  const storage = getFirebase().storage();
  const storageRef = storage.ref("gallery/image");

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

  const getBookURLs = async (storageRef) => {
    const all = await storageRef.listAll();
    const itemNames = all.items.map((item) => item.name);
    return await Promise.all(
      itemNames.map(async (name) => await getBookURL(storageRef, name)),
    );
  };

  const getBookURL = async (storageRef, itemName) => {
    return await storageRef.child(itemName).getDownloadURL();
  };

  const isDesktop = useMediaQuery('(min-width: 601px)');
  
  const [startOffset, setStartOffset] = useState(0);
  const PER_PAGE = isDesktop ? 8 : 2
  const endStartOffset = startOffset + PER_PAGE;
  const currentBooks = books.slice(startOffset, endStartOffset);
  const pageCount = Math.ceil(books.length / PER_PAGE);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * PER_PAGE) % books.length;
    setStartOffset(newOffset);
  };

  return (
    <>
      <BookList currentBooks={currentBooks} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
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
