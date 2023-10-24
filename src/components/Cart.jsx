import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../redux/cartSlice";
import axios from "axios";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.carts);

  const [yeniCart, setYeniCart] = useState([]);
  useEffect(() => {
    const ids = cartItems.map((item) => item.id);

    ids.forEach((id) => {
      axios
        .get(`https://example-data.draftbit.com/books/${id}`)
        .then((res) => {
          setYeniCart((prev) => [...prev, res.data]);
        })
        .catch((error) => console.log(error));
    });
  }, [cartItems]);
  const handleRemoveCart = (id) => {
    dispatch(removeCart({ id }));
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setYeniCart(updatedCartItems);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {yeniCart.length > 0 ? (
            yeniCart.map((urun) => (
              <div className="card my-5 mx-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={urun.image_url}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{urun.title}</h5>
                      <p className="card-text">
                        {urun.description.slice(0, 250) + "..."}
                      </p>
                      <button
                        type="button"
                        className="btn btn-secondary mx-3"
                        onClick={() => handleRemoveCart(urun.id)}
                      >
                        Sepetten çıkar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="alert alert-danger" role="alert">
              Sepetiniz Boş
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
