import React from "react";
import Form from "./Form";
import About from "./About"

function Commissions() {
    return (
        <Form />
    )
}

function Info() {
    return (
        <About />
    )
}

function Home() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <button onClick={Info} type="button" className="btn btn-outline-info" data-toggle="button" aria-pressed="false">About</button>
                    <button onClick={Home} type="button" className="btn btn-outline-primary" data-toggle="button" aria-pressed="false">Home</button>
                    <button onClick={Commissions} type="button" className="btn btn-outline-secondary" data-toggle="button" aria-pressed="false">Commissions</button>
                </form>
            </nav>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Arts and Such</h1>
                    <p className="lead">For all your commision needs!</p>
                    <div className="card-group">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Line Art</h5>
                                <p className="card-text">Just for your line art needs</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Line and colored</h5>
                                <p className="card-text">A colored line art piece.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Colored art with background</h5>
                                <p className="card-text">A colored work with a colored background.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="page-footer font-small cyan darken-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-5">
                            <div className="mb-5 flex-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="#"> ArtsAndSuch</a>
                </div>
            </footer>
        </div>
    );
}


export default Home;