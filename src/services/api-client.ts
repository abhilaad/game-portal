import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0ea8fa7ddb4743a386353b183fd98a15",
  },
});
