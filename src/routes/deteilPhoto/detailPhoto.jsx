import { useLoaderData } from "react-router-dom";
import { getPhoto } from "../../data/dataPhoto";

DetailPhoto.propTypes = {};

function DetailPhoto(props) {
  const photo = useLoaderData()[0];
  console.log(photo);
  return (
    <section className="px-4 xl:max-w-7xl xl:m-auto">
      <div className="flex items-center justify-center mt-[80px]">
        <div className="title-section text-[20px] text-center text-black pb-2 border-b-4 border-red-400 inline-block mb-[30px] uppercase font-semibold xl:text-[35px]">
          Blog : {photo.title}
        </div>
      </div>
      <img
        src={photo.urlImg}
        alt={photo.title}
        className="w-[100%] h-[542px] object-cover mb-5"
      />

      <p className="text-[20px]">{photo.description}</p>
    </section>
  );
}

export default DetailPhoto;

export async function loader({ params }) {
  const photo = await getPhoto(params.photoTagId, params.photoTag);
  console.log(photo)
  return photo;
}
