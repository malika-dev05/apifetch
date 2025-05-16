export const API = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    type: "GET",
  });
  return response.json();
};
