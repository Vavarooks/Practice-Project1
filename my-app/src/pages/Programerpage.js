import React from "react";


function Coding() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-light bg-light">
                <a className="navbar-brand">Programmer Page</a>
            </nav>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Arts and Such</h1>
                    <p className="lead">For all your commision needs!</p>
                    <p>Example works</p>
                    <div className="card-group">
                        <div className="card">
                            <img src="./images/StockApp.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Group Project A Stocks App</h5>
                                <p className="card-text">https://stormy-refuge-75970.herokuapp.com/</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./images/StarwasApp.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Group Project Jedi Quiz.</h5>
                                <p className="card-text">https://fanuelproject2.herokuapp.com/</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./images/WeatherApp.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">A Basic Weather App</h5>
                                <p className="card-text">https://vavarooks.github.io/Homework6/</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Commissions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Commission Page</h1>
                            <form action="mailto:vavarooks@aol.com" method="post" enctype="text/plain">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div></div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">About Page</h1>
                            <div className="card mb-3">
                                <img src="./images/programer.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Programmer</h5>
                                    <p className="card-text">Graduate of Berkely Bootcamp Extension. Also has experiance with Torchlight II Programming.</p>
                                </div>
                            </div>
                        </div>
                    </div></div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <h1>Contact us at <span className="badge badge-secondary">vavarooks@aol.com</span></h1>
                    </div>
                </div>
            </div>
            <footer class="footer">
      <div class="container">
        <span class="text-muted">&copy; 2020, Arts and Such</span>
      </div>
    </footer>
        </div>
    );
}


export default Coding;