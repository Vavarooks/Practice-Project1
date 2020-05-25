import React from 'react';
// import Form from "./Form";

function About() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <button type="button" className="btn btn-primary">Home</button>
                    <button type="button" className="btn btn-secondary">Commisions</button>
                    <button type="button" className="btn btn-info">About</button>
                </form>
            </nav>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">About Page</h1>
                    <div className="card mb-3">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Artist</h5>
                            <p className="card-text">Makes the art that is commisioned!</p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Programmer</h5>
                            <p className="card-text">Made the webpage!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;