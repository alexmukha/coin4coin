import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import RateCard from "./RateCard";
import { getBinPrices, getCobPrices } from "../../actions/getRates";

class CoinBoard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    //    const { user } = this.props.auth;

    return (
      <div className="CodeBoard container">
        <div className="row">
          <div className="col s12 center-align">
            <h1>Cryptocurrency Arbitrage.</h1>
          </div>
          <div className="cobinhood col s6">
            <img
              src="https://cdn-images-1.medium.com/max/1200/1*7Znh2Q0qlaJOtA2MUr0rPg.jpeg"
              alt="cobinhood"
              style={{ width: "100%", height: "300px" }}
            />
            <div className="lambo_1">
              <img
                src="http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Lamborghini-Huracan-Green-Car-PNG-Image.png"
                alt="car"
              />
            </div>
          </div>
          <div className="binance col s6">
            <img
              src="https://siliconangle.com/wp-content/blogs.dir/1/files/2018/03/binance.jpg"
              alt="binance"
              style={{ width: "100%", height: "300px" }}
            />
            <div className="lambo_2">
              <img
                src="http://pluspng.com/img-png/lamborghini-hd-png--1792.png"
                alt="car"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <RateCard getDataFunc={getCobPrices} />
          <RateCard getDataFunc={getBinPrices} />
        </div>
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

CoinBoard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(CoinBoard);