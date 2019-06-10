import React, { Component } from "react";
import axios from "axios";

class RateCard extends Component {
  state = {
    btc: "",
    eth: "",
    xrp: "",
    eos: "",
    neo: "",
    cancelTokenSource: {}
  };
  componentDidMount() {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    this.setState({
      ...this.state,
      cancelTokenSource: source
    });

    this.interval = setInterval(() => {
      this.props.getDataFunc(res => {
        //        console.log(res.data);
        this.setState({ ...this.state, ...res.data });
      }, this.state.cancelTokenSource.token);
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    this.state.cancelTokenSource.cancel();
  }
  render() {
    return (
      <div className="RateCard col s6">
        <div className="bitcoin">
          <img
            src="http://www.pngall.com/wp-content/uploads/1/Bitcoin-PNG-Pic.png"
            alt="Bitcoin"
          />
          <p id="price-btc-cob">{this.state.btc}</p>
        </div>
        <div className="ethereum">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/628px-Ethereum_logo_2014.svg.png"
            alt="ethereum"
          />
          <p id="price-eth-cob">{this.state.eth}</p>
        </div>
        <div className="XRP">
          <img
            src="https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/ripple_xrp_coin-512.png"
            alt="XRP"
          />
          <p id="price-xrp-cob">{this.state.xrp}</p>
        </div>
        <div className="EOS">
          <img
            src="http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/EOS-icon.png"
            alt="EOS"
          />
          <p id="price-eos-cob">{this.state.eos}</p>
        </div>
        <div className="NEO">
          <img
            src="https://neo-cdn.azureedge.net/images/neo-logo/1024.png"
            alt="NEO"
          />
          <p id="price-neo-cob">{this.state.neo}</p>
        </div>
      </div>
    );
  }
}

export default RateCard;