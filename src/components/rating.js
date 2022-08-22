import React from "react";

export default function Rating({ rating }) {
  return (
    <>
      {rating ? (
        <div class="d-flex justify-content-center small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
