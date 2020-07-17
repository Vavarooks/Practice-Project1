import React from "react";

function Buyer() {
    return (
        <div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Item Name</h5>
                            <img src="..." className="card-img-top" alt="..." />
                            <p className="card-text">Discription</p>
                            <a href="#" className="btn btn-primary">Purchase</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Item Name</h5>
                            <img src="..." className="card-img-top" alt="..." />
                            <p className="card-text">Discription</p>
                            <a href="#" className="btn btn-primary">Purchase</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Buyer;

