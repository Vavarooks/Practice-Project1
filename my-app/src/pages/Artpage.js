import React from "react";


function Art() {
    return (
        <div>
            <div className="container">
                <div className="card-group">
                    <div className="card">
                        <a href="./Limage.html">
                            <img src="./images/Example3.jpg" className="card-img-top" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Line Art</h5>
                            <p className="card-text">Around $4 (Prices may very)</p>
                        </div>
                    </div>
                    <div className="card">
                        <a href="./Cimage.html">
                            <img src="./images/Example2.jpg" className="card-img-top" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Line and colored</h5>
                            <p className="card-text">Around $10 (Prices may very)</p>
                        </div>
                    </div>
                    <div className="card">
                        <a href="./Bimage.html">
                            <img src="./images/Example1.jpg" className="card-img-top" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Colored art with background</h5>
                            <p className="card-text">Around $15 (Prices may very)</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Art;