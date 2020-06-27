import React from "react";
import Art from "./Artpage";
import Programming from "./Programerpage";


function Home() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-light bg-light">
                <a className="navbar-brand">Welcome</a>
            </nav>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Arts and Such</h1>
                    <p className="lead">For all your commision needs!</p>
            </div>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Artist</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Programmer</a>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Home</div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><Art/></div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><Programming/></div>
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