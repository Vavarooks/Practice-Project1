import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App";

const Pagenav = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/commissions">commissions</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/commissions" component={commissions} />
        </div>
    </Router>
);

const Home = () => (
    <div>
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
                <button type="button" className="btn btn-primary" onClick={App}>Home</button>
                <button type="button" className="btn btn-secondary" onClick={Commissions}>Commissions</button>
                <button type="button" className="btn btn-info" onClick={Info}>About</button>
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
    </div>
);

const About = () => (
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
                <h1 className="display-4">Commission Page</h1>
                <form action="mailto:vavarooks@aol.com" method="post" enctype="text/plain">
                    <label>
                        Name:
    <input type="text" name="name" />
                    </label>
                    <label>
                        Commission
    <input input type="text" name="comment" size="50" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </div>
);

const commissions = () => (
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
);

export default Pagenav;