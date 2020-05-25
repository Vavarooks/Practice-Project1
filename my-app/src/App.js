import React from 'react';
// import "./pages";
import Form from "./pages/Form";
import About from "./pages/About";


function App() {
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
}

export default App;
