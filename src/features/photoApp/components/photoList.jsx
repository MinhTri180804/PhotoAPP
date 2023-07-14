import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Photo from "./photo/photo";

PhotoList.propTypes = {};

function PhotoList(props) {
  const urlAPI =
    "https://64ad8b8cb470006a5ec61acc.mockapi.io/api/todoList/PhotoApp";
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(urlAPI);
      const data = await response.json();
      setPhotos(data);
    };

    fetchApi();
  }, []);

  return (
    <section className="max-w-7xl m-auto mt-7">
      <ul className="photo-list mx-5 grid grid-cols-1 gap-3 xl:grid-cols-3 xl:gap-10">
        {photos.map((photo) => (
          <Photo
            urlImg={photo.urlImg}
            titlePhoto={photo.title}
            description={photo.description}
            tags={photo.tag}
            id={photo.id}
            date={photo.date}
          />
        ))}
      </ul>

      <div className="flex justify-center items-center my-6">
        <button className="flex justify-between items-center text-sm font-semibold text-center py-[8px] px-7 border-[2px] gap-3 uppercase">
          xem thêm <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </section>
  );
}

export default PhotoList;
