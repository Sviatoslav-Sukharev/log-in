const tokenKey = "token";

function onError(error) {
  console.log(error);
  return Promise.reject(error);
}

function setToken(request) {
  const isAuthToken = request.url.includes("auth");
  if(!isAuthToken) {
    const token = localStorage.getItem(tokenKey);
    request.headers["x-access-token"] = token;
  }

  return request;
}

function setTokenOnLogin(response) {
  const isLoginUrl = response.config.url.includes("login");
  if(isLoginUrl) {
    const token = response.data.token;
    localStorage.setItem(tokenKey, token);
  }
  return response;
}

function getClearResponse(response) {
  return response.data
}

export default function(axios) {
  axios.interceptors.request.use(setToken);
  axios.interceptors.response.use(setTokenOnLogin);
  axios.interceptors.response.use(getClearResponse);
}