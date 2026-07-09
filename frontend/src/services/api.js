import axios from "axios";

const API = axios.create({
  baseURL: "http://54.235.21.96:5000",
});

export default API;


// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000",
// });

// export default API;