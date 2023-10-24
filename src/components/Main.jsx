import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../redux/bookSlice";
import { addToCart } from "../redux/cartSlice";

function BookList() {
  const books = useSelector((state) => state.book.books); // state(callb).name.initialState
  const bookDispatch = useDispatch();
  const carts = useSelector((urun) => urun.cart.carts);
  const cartDispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/books?_limit=10")
      .then((res) => bookDispatch(setBooks(res.data)));
  }, [bookDispatch]); //düzenli olarak dispatch'i güncellesin diye.

  const handleAddToCart = (id) => {
    cartDispatch(addToCart({ id }));
  };

  return (
    <div>
      <div className="container" style={{ marginTop: 50 }}>
        <div className="row">
          {books.map((book) => (
            <div className="col-md-3 my-3">
              <div className="card-sl">
                <div className="card-image">
                  <img src={book.image_url} alt="" style={{ maxWidth: 128 }} />
                </div>

                <div className="card-heading">{book.title}</div>
                <div className="card-text">
                  {book.description.slice(0, 250) + "..."}
                </div>
                <a
                  href="#"
                  className="card-button"
                  onClick={() => handleAddToCart(book.id)}
                >
                  Purchase
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <ul>
        {books.map((book) => (
          <li>
            {book.title}
            <button onClick={() => handleAddToCart(book.id)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default BookList;
