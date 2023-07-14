const urlAPI =
  "https://64ad8b8cb470006a5ec61acc.mockapi.io/api/todoList/PhotoApp";

export const photoList = async () => {
  const response = await fetch(urlAPI);
  const responseJSON = await response.json();
  console.log(responseJSON);
};

export const photoTravelList = async () => {
  const response = await fetch(`${urlAPI}?tag=travel`);
  const responseJSON = await response.json();
  return responseJSON;
};

export const photoGraphyList = async () => {
  const response = await fetch(`${urlAPI}?tag=photography`);
    const responseJSON = await response.json();
    return responseJSON;
}