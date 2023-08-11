import "./Gallery.css";
import getFirebase from "../../firebase/firebase";
import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import { listAll } from "firebase/compat/storage";

const BookList = (props) => {
    return (
        <ul className="imageList">
            {props.currentBooks &&
                props.currentBooks.map((book) => {
                    return<li><img src={book.image_url} className="bookListImage"/></li>
                })}
        </ul>
    );
};

const Gallery = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchImage = async () => {
            const storage = getFirebase().storage();
            const storageRef = storage.ref('gallery/image');
            let books = [];
        
            await storageRef.listAll()
                .then((res) => {
                    res.items.forEach(async (item) => {
                        await storageRef.child(item.name).getDownloadURL().then((url) => {
                            books.push({
                                'image_url': url
                            });
                        });
                    });
                }).catch((error) => {
            });
            console.log(books);
            setBooks(books);
        };
        fetchImage();
    }, [])
    
    const [startOffset, setStartOffset] = useState(0);
    const perPage = 8;
    const endStartOffset = startOffset + perPage;
    const currentBooks = books.slice(startOffset, endStartOffset);
    const pageCount = Math.ceil(books.length / perPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * perPage) % books.length;
        setStartOffset(newOffset);
    };
    return (
        <>
            <BookList currentBooks={currentBooks} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
};

export default Gallery;