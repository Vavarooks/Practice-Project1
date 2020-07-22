import React from "react";

function Art() {
    return (
        <div>
            <div className="modal fade" id="Modal1" tabindex="-1" role="dialog" aria-labelledby="Modal1Label" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="Modal1Label">Art 1</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Special title treatment</h5>
                                            <img  src="./images/Example4.png" className="card-img-top"/>
                                            <p className="card-text">Discription</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Special title treatment</h5>
                                            <img src="./images/Example5.jpg" className="card-img-top"/>
                                            <p className="card-text">Discription</p>
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
            <div className="modal fade" id="Modal2" tabindex="-1" role="dialog" aria-labelledby="Modal2Label" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="Modal2Label">Art 2</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Special title treatment</h5>
                                            <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap"/>
                                            <p className="card-text">Discription</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Special title treatment</h5>
                                            <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap" />
                                            <p className="card-text">Discription</p>
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
            <div className="modal fade" id="Modal3" tabindex="-1" role="dialog" aria-labelledby="Modal3Label" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="Modal3Label">Art 3</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Special title treatment</h5>
                                            <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap" />
                                            <p className="card-text">Discription</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Special title treatment</h5>
                                            <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap" />
                                            <p className="card-text">Discription</p>
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
                    <a data-toggle="modal" data-target="#Modal1">
                    <img src="./images/Example3.jpg" className="card-img-top" />
                    </a>
                        <div className="card-body">
                            <h5 className="card-title">Line Art</h5>
                            <p className="card-text">Around $4 (Prices may very)</p>
                        </div>
                    </div>
                    <div className="card">
                    <a data-toggle="modal" data-target="#Modal2">
                    <img src="./images/Example2.jpg" className="card-img-top" />
                    </a>
                        <div className="card-body">
                            <h5 className="card-title">Line and colored</h5>
                            <p className="card-text">Around $10 (Prices may very)</p>
                        </div>
                    </div>
                    <div className="card">
                    <a data-toggle="modal" data-target="#Modal3">
                    <img src="./images/Example1.png" className="card-img-top" />
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