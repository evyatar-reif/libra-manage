import axios from "axios";

const API_KEY = "";

async function getBookByISBN(ISBN) {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}&key=${API_KEY}`;

  const promiseData = await getDataPromise(URL);
  const book = promiseData.items[0].volumeInfo;
  return book;
}

async function getDataPromise(URL) {
  return axios.get(URL).then((response) => response.data);
}

export { getBookByISBN };
