import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Photo from "./photo/photo";
import { Link, useLoaderData } from "react-router-dom";
import { photoList } from "../../../data/dataPhoto";

PhotoList.propTypes = {};

function PhotoList(props) {
  const photoList = useLoaderData();
  return (
    <section className="max-w-7xl m-auto mt-7">
      <div className="flex items-center justify-center">
        <div className="title-section text-center text-[35px] text-black pb-2 border-b-4 border-red-400 inline-block mb-[30px] uppercase font-semibold">
          home page
        </div>
      </div>
      <ul className="photo-list mx-5 grid grid-cols-1 gap-3 xl:grid-cols-3 xl:gap-10">
        {photoList.map((photo) => (
          <Link to={`photo${photo.tag[0]}/${photo.id}`}>
            <Photo
              urlImg={photo.urlImg}
              titlePhoto={photo.title}
              description={photo.description}
              tags={photo.tag}
              id={photo.id}
              date={photo.date}
              key={photo.id}
            />
          </Link>
        ))}
      </ul>

      <div className="flex justify-center items-center my-6">
        <button className="flex justify-between items-center text-sm font-semibold text-center py-[8px] px-7 border-[2px] gap-3 uppercase">
          xem thêm <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </section>
  );
}

export default PhotoList;

export async function loader() {
  const res = await photoList();
  return res;
}
