import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 281318f21dcae5353c0a1df4a616206cb3c76f99dcddaae74ef3894c4c79a5e1"
  }
});
