import React from "react";
import PropTypes from "prop-types";
import { getPhotos } from "../../data/dataPhoto";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Photo from "../../features/photoApp/components/photo/photo";

PhotoPage.propTypes = {};

function PhotoPage(props) {
  const dataLoader = useLoaderData();
  const photoList = dataLoader.photoList;
  const photoTag = dataLoader.photoTag;
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" ? (
        <h1 className="text-center text-[20px] mt-80px xl:text-[30px] uppercase">Loading.....</h1>
      ) : (
        <section className="max-w-7xl m-auto mt-7">
          <div className="flex items-center justify-center">
            <div className="title-section text-center text-[35px] text-black pb-2 border-b-4 border-red-400 inline-block mb-[30px] uppercase font-semibold">
              List Blog {photoTag}
            </div>
          </div>
          <ul className="photo-list mx-5 grid grid-cols-1 gap-3 xl:grid-cols-3 xl:gap-10">
            {photoList.map((photo) => (
              <Link to={`${photo.id}`} key={photo.id}>
                <Photo
                  urlImg={photo.urlImg}
                  titlePhoto={photo.title}
                  description={photo.description}
                  tags={photo.tag}
                  id={photo.id}
                  date={photo.date}
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
      )}
    </>
  );
}

export default PhotoPage;

export async function loader({ params }) {
  const photoTag = params.photoTag;
  const photoList = await getPhotos(photoTag);
  return { photoList, photoTag };
}
