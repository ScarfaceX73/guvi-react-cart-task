import React from "react";
import Rating from "./rating";
import AddCart from "./addcart.js";

function Cards({ count, setCount }) {
  const data = [
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Item",
      price1: "40.00",
      price2: "80.00",
      text: "View Options",
      strike: false,
      rating: false,
      saleBadge: false,
    },
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      price1: "20.00",
      price2: "18.00",
      text: "Add to cart",
      strike: true,
      rating: true,
      saleBadge: true,
    },
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      price1: "50.00",
      price2: "25.00",
      text: "Add to cart",
      strike: true,
      rating: false,
      saleBadge: true,
    },
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      price1: "0",
      price2: "40.00",
      text: "Add to cart",
      strike: false,
      rating: true,
      saleBadge: false,
    },
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      price1: "50.00",
      price2: "25.00",
      text: "Add to cart",
      strike: false,
      rating: false,
      saleBadge: true,
    },
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Item",
      price1: "120.00",
      price2: "280.00",
      text: "View Options",
      strike: false,
      rating: false,
      saleBadge: false,
    },
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      price1: "20.00",
      price2: "18.00",
      text: "Add to cart",
      strike: true,
      rating: true,
      saleBadge: true,
    },
    {
      src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      price1: "0",
      price2: "40.00",
      text: "Add to cart",
      strike: false,
      rating: true,
      saleBadge: false,
    },
  ];

  return (
    <>
      {data.map((data, index) => {
        return (
          <div className="col mb-5">
            <div className="card h-100">
            {/* Sale badge */}
              {data.saleBadge ? saleBadge() : ""}
              {/* Product image */}
              <img className="card-img-top" src={data.src} alt="..." />
              {/* Product details */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* Product name */}
                  <h5 className="fw-bolder">{data.title}</h5>
                  {/* Product reviews */}
                  <Rating key={index} rating={data.rating} />
                  {/* Product price */}
                  {data.strike && (
                    <span className="text-muted text-decoration-line-through">
                      ${data.price1}
                    </span>
                  )}
                  {!data.strike && `$${data.price1}`} -$
                  {data.price2}
                </div>
                
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <AddCart text={data.text} count={count} setCount={setCount} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

function saleBadge() {
  return (
    <div
      className="badge bg-dark text-white position-absolute"
      style={{ top: "0.5rem", right: "0.5rem" }}
    >
      Sale
    </div>
  );
}

export default Cards;
