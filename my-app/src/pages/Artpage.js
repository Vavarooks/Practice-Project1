import React from "react";
// import Bimage from "./Bimage";
// import Cimage from "./Cimage";
// import Limage from "./Limage.js";


function Art() {
    return (
        <div>
             <div className="modal" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Colored Art</h5>
                                            <img src="..." className="card-img-top" alt="..." />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Colored Art</h5>
                                            <img src="..." className="card-img-top" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card-group">
                    <div className="card">
                        <img src="./images/Example3.jpg" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Line Art</h5>
                            <p className="card-text">Around $4 (Prices may very)</p>
                        </div>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Images
                    </button>
                    </div>
                    <div className="card">
                        <img src="./images/Example2.jpg" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Line and colored</h5>
                            <p className="card-text">Around $10 (Prices may very)</p>
                        </div>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Images
                    </button>
                    </div>
                    <div className="card">
                        <img src="./images/Example1.png" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Colored art with background</h5>
                            <p className="card-text">Around $15 (Prices may very)</p>
                        </div>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Images
                    </button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Art;