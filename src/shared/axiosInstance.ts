import Axios from "axios";

export const axios = Axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
