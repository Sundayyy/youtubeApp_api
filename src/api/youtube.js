import axios from "axios";

const KEY = "AIzaSyCySYIgwYOJIMp_jYNUNcvnibkhxtknZPI";
export const baseParams = {
  part: "snippet",
  maxResults: 8,
  key: KEY,
};
export default axios.create({
  baseURL: " https://www.googleapis.com/youtube/v3",
});
