import React from "react";
// import Form from "./Form";
// import About from "./About";
// import { Link } from "react-router-dom";


{/* <Route path="./Form" component={Form} />

class App extends React.Component {
    render() {
        return (
          <div>
            <Link to="./Form" className="btn btn-primary">hello</Link>
         </div>
       ); 
    }
}

class Second extends React.Component {
    render() {
        return <label>second component</label>
    }
}

React.render( <App /> , document.getElementById('app')) */}



// function Commissions() {
//     return (
//         <Form />
//     )
// }

// function Info() {
//     return (
//         <About />
//     )
// }

function Home() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <a href="./About.js" role="button" className="btn btn-outline-info" data-toggle="button" aria-pressed="false">About</a>
                    <button href="/" type="button" className="btn btn-outline-primary" data-toggle="button" aria-pressed="false">Home</button>
                    <button href="./FormUse.html" type="button" className="btn btn-outline-secondary" data-toggle="button" aria-pressed="false">Commissions</button>
                </form>
            </nav>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Arts and Such</h1>
                    <p className="lead">For all your commision needs!</p>
                    <div className="card-group">
                        <div className="card">
                            <img src="https://picsum.photos/200/180" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Line Art</h5>
                                <p className="card-text">Just for your line art needs</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://picsum.photos/200/180" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Line and colored</h5>
                                <p className="card-text">A colored line art piece.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://picsum.photos/200/180" className="card-img-top" alt="..." />
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