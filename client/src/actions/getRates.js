import axios from "axios";

export const getBinPrices = (cb, cancelToken) => {
  axios
    .get("api/pricesBin", { cancelToken })
    .then(res => cb(res))
    .catch(err => {
      console.log(err);
    });
};
export const getCobPrices = (cb, cancelToken) => {
  axios
    .get("api/pricesCob", { cancelToken })
    .then(res => cb(res))
    .catch(err => {
      console.log(err);
    });
};