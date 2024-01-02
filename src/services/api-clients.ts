import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "bae76e0d0ac84421b47de12f7913d4ca"
    }
});