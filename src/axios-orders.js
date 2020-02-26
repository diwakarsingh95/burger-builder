import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-ad641.firebaseio.com/"
});

export default instance;
