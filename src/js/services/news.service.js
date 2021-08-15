import axios from "../plugins/axios/index";

export async function getNews() {
  try {
    const response = await axios.get("/news");
    console.log(response);
    return response
  } catch(error) {
    console.log(error);
    return Promise.reject(error);
  }
}