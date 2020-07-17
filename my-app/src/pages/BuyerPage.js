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
                            <form action="mailto:artsandsuch01@gmail.com" method="post" enctype="text/plain">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <button type="submit" class="btn btn-primary">Buy</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Item Name</h5>
                            <img src="..." className="card-img-top" alt="..." />
                            <p className="card-text">Discription</p>
                            <form action="mailto:artsandsuch01@gmail.com" method="post" enctype="text/plain">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <button type="submit" class="btn btn-primary">Buy</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Buyer;

