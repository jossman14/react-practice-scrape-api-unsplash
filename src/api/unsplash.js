import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 5d0c663f8c41c9d0563edfa7835ed1cee65efb1450fe4ad597188cae380f1abc"
  }
});
