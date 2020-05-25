import React from "react";


function Home() {
    return (
        <div>
            <nav class="navbar fixed-top navbar-light bg-light">
                <a class="navbar-brand" href="#">Welcome</a>
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
                                    <label for="exampleFormControlTextarea1">Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                    </div></div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><div className="jumbotron jumbotron-fluid">
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
                    </div></div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <h1>Contact us at <span className="badge badge-secondary">FakeEmail!aol.com</span></h1>
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


export default Home;