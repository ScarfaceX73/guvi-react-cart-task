import { useState } from "react";

export default function AddCart({ count, setCount, text }) {
  const [add, setAdd] = useState(false);

  return (
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div className="text-center">
        {text === "Add to cart" ? (
          <a
            href="#"
            className="btn btn-outline-dark mt-auto"
            onClick={() => {
              setCount(add ? count - 1 : count + 1);
              setAdd(!add);
            }}
          >
            {add ? "Remove from " : " Add to "} Cart
          </a>
        ) : (
          <a
            href="#"
            className="btn btn-outline-dark mt-auto"
          >
            View Options
          </a>
        )}
      </div>
    </div>
  );
}
