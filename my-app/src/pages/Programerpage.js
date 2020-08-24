import React from "react";


function Coding() {
    return (
        <div>
            <div className="container">
                <p className="text-info">Example works</p>
                <div className="card-group">
                    <div className="card">
                        <img src="./images/StockApp.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Group Project A Stocks App</h5>
                            <p className="card-text">
                                <a class="nav-link" href=" https://stormy-refuge-75970.herokuapp.com/">Stock App</a>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./images/StarwasApp.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Group Project Jedi Quiz.</h5>
                            <p className="card-text">
                                <a class="nav-link" href="https://fanuelproject2.herokuapp.com/">Starwars Quiz App</a>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./images/WeatherApp.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">A Basic Weather App</h5>
                            <p className="card-text">
                                <a class="nav-link" href="https://vavarooks.github.io/Homework6/">Weather App</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Coding;