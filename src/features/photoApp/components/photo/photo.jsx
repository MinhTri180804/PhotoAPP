import React from "react";
import PropTypes from "prop-types";

Photo.propTypes = {
  urlImg: PropTypes.string.isRequired,
  titlePhoto: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.array,
  date: PropTypes.string,
  id: PropTypes.number.isRequired,
};

Photo.defaultProps = {
  tag: [],
  date: "",
};

function Photo(props) {
  const { urlImg, titlePhoto, description, tags, id, date } = props;

  let tagFormat = "";
  if (tags.length > 1) {
    tags.map((tag, index) => {
      if (index === tags.length - 1) {
        tagFormat += tag;
      } else {
        tagFormat += tag + " / ";
      }
    });
  }else if(tags.length === 1) {
    tagFormat = tags[0];
  }

  return (
    <li className="itemPhoto p-3 border-[2px] cursor-pointer">
      <div className="relative group">
        <img
          src={urlImg}
          alt={titlePhoto}
          className="w-[100%] object-cover bg-no-repeat xl:group-hover:brightness-50 xl:transition-all xl:duration-400"
        />

        <div className="blur-img hidden group-hover:xl:block absolute top-0 left-0 bottom-0 right-0">
          <div className="img-hover xl:absolute xl:top-[50%] xl:left-[50%] xl:translate-x-[-50%] xl:translate-y-[-50%]">
            <div className="xl:font-semibold xl:uppercase xl:p-3 xl:border-[2px] xl:border-white text-[15px] xl:text-white xl:hover:text-white xl:hover:bg-black xl:hover:border-[2px] transition-all duration-150">
              xem thêm
            </div>
          </div>
        </div>
      </div>

      <div className="tags text-base uppercase text-[#ca9f5c] font-semibold text-[12px] my-2 md:text-base xl:text-[14px]">
        {tagFormat}
      </div>

      <h5 className="font-bold my-1 md:text-[20px]">{titlePhoto}</h5>

      <p className="text-ellipsis overflow-hidden text line-clamp-3">
        {description}
      </p>

      <span className="italic text-[12px] block text-right mt-[15px]">
        {" "}
        {date}
      </span>
    </li>
  );
}

export default Photo;
