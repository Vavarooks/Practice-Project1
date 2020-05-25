import React from 'react';
// import About from "./About";

function Form() {
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

export default Form;