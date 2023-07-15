export const urlAPI =
  "https://64ad8b8cb470006a5ec61acc.mockapi.io/api/todoList/PhotoApp";

export const photoList = async () => {
  const response = await fetch(urlAPI);
  const responseJSON = await response.json();
  return responseJSON;
};

export const getPhotos = async (paramsTag) => {
  const photos = await fetch(`${urlAPI}/?tag=${paramsTag}`);
  const photosJSON = await photos.json();
  console.log(photosJSON);
  return photosJSON;
}

export const getPhoto = async (id, tag) => {
  const photo = await fetch(`${urlAPI}/?id=${id}&tag=${tag}`);
  const photoJSON = await photo.json();
  return photoJSON;
}

