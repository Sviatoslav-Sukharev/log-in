import axios from "../plugins/axios/index";

export async function login(email, password) {
  try {
    const response = await axios.post("/auth/login", JSON.stringify({email, password}));

    console.log(response);
    return response.data
  } catch(error) {
    console.log(error);
    return Promise.reject(error);
  }
}