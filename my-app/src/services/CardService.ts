const URL = 'https://jsonplaceholder.typicode.com';

export const getImages = async () => {
  const response = await fetch(`${URL}/photos`);
  const data = response.json();
  return data;
};
