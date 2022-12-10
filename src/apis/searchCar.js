import axios from "axios";

const baseURL = "https://preonboarding.platdev.net/api/cars";

const axiosInstance = axios.create({
    baseURL,
});

export const getSearchCar = (segment = null, fuelType = null) =>
    axiosInstance({
        method: "GET",
        params: { segment, fuelType },
    });
