import React from 'react';
import Form from './pages/Form';
import About from './pages/About'

function Commisions() {
  return (
    console.log("pressed"),
    <Form />
  )
}

function Info() {
  return (
    <About />
  )
}


function App() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <button type="button" className="btn btn-primary" onClick={App}>Home</button>
          <button type="button" className="btn btn-secondary" onClick={Commisions}>Commisions</button>
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
      <footer class="page-footer font-small cyan darken-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12 py-5">
              <div class="mb-5 flex-center">
                <a class="li-ic">
                  <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
