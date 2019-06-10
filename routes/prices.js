// const keys = require("./keys")

// console.log(process.env)
const binance = require("node-binance-api")().options({
    APIKEY: "iUCdF82usrCcuNJdpTc4MsvCg9cYJYDUhvDJJYkcqEDl3rd30GYGA6dOBRpwc7kv",
    APISECRET: "Kw63YBEpwuzZFmY76L98qSZyA2ZK1AxCLuG48prYe9jrodCrIf5ZdA4r0P903EnJ",
    useServerTime: true //
  });
  
  const cobinhood = require("node-cobinhood-api");
  
  cobinhood.options({
    apiKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfdG9rZW5faWQiOiIyZTkxODY3Ni1iZjZiLTQ3OTktYjMwZi01MmNmYjUzZTA2YzAiLCJzY29wZSI6WyJzY29wZV9leGNoYW5nZV90cmFkZV9yZWFkIiwic2NvcGVfZXhjaGFuZ2VfdHJhZGVfd3JpdGUiXSwidXNlcl9pZCI6ImZmNGZjOTc3LWExMWYtNDQwNC05YzJkLWI1ZWNiMzEwZDBjYyJ9.1lpm7hWUqeywfrQ6sjN8acr-lX7PQPwdW819mptzAt8.V2:dcf5c7cfdc16a57878e91f543f3660d47fea97452bc05302e774713588d91fbf",
    verbose: true
  });
  
  function get_Bin(currency, callback) {
    //Getting the Prices for Ripple from Binance
    binance.prices(`${currency.toUpperCase()}USDT`, (error, ticker) => {
      if (!error) {
        //      console.log(`Binance price of ${currency} is:`, ticker);
        if (callback) {
          callback(ticker);
        }
      }
    });
  }
  function get_Cob(currency, callback) {
    cobinhood.lastPrice(`${currency.toUpperCase()}-USDT`, (error, lastPrice) => {
      if (!error) {
        //      console.log(`Cobinhood price of ${currency} is:`, lastPrice);
        if (callback) {
          callback(lastPrice);
        }
      }
    });
  }
  
  module.exports = {
    getCob: get_Cob,
    getBin: get_Bin
  };