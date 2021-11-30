import React from "react";
import "../../../CSS/Wallet/Wallet.css";
const Content = () => {
  return (
    <>
      <div className="Wallet-container">
        <div className="container row mx-auto">
          <div className="row Wallet-body">
            <div className="Payment-P_text my-3">
              Hello, Dear <span className="Payment-Bold">gold</span> customer. Currently, your wallet contains...
            </div>
            <div className="row">
              <div className="container col-md-2 col-sm-6 Wallet-bg ">
                <div className="Wallet-b justify-content-center text-center">
                  <div className="Wallet-header">
                    <h className="Wallet-text">250</h>
                  </div>
                  <p className="Payment-header-bottom text-center">
                    Club points
                  </p>
                </div>
              </div>

              <div className="container col-md-2 col-sm-6 Wallet-bg ">
                <div className="Wallet-b justify-content-center text-center">
                  <div className="Wallet-header">
                    <h className="Wallet-text">1</h>
                  </div>
                  <p className="Payment-header-bottom">Audition</p>
                </div>
              </div>

              <div className="container col-md-2 col-sm-6 Wallet-bg ">
                <div className="Wallet-b justify-content-center text-center">
                  <div className="Wallet-header">
                    <h className="Wallet-text">2</h>
                  </div>
                  <p className="Payment-header-bottom">Learning Sess..</p>
                </div>
              </div>

              <div className="container col-md-2 col-sm-6 Wallet-bg ">
                <div className="Wallet-b justify-content-center text-center">
                  <div className="Wallet-header">
                    <h className="Wallet-text">0</h>
                  </div>
                  <p className="Payment-header-bottom">Live chat</p>
                </div>
              </div>

              <div className="container col-md-2 col-sm-6 Wallet-bg ">
                <div className="Wallet-b justify-content-center text-center">
                  <div className="Wallet-header">
                    <h className="Wallet-text">2</h>
                  </div>
                  <p className="Payment-header-bottom">Live session</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
