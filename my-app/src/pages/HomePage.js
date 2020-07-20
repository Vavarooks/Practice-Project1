import React from "react";
import Art from "./Artpage";
import Programming from "./Programerpage";
import Body from "./body";
import Buyer from "./BuyerPage";


function Home() {
  return (
    <div>
     <header>
     <h1 className="display-4" id="title">Arts and Such</h1>
    <p className="lead" id="title">For all your commision needs!</p>
     </header>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="artist-tab" data-toggle="tab" href="#artist" role="tab" aria-controls="artist" aria-selected="false">Artist</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="programmer-tab" data-toggle="tab" href="#programmer" role="tab" aria-controls="programmer" aria-selected="false">Programmer</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="commissions-tab" data-toggle="tab" href="#commissions" role="tab" aria-controls="commissions" aria-selected="false">Commissions</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="buyer-tab" data-toggle="tab" href="#buyer" role="tab" aria-controls="buyer" aria-selected="false">Buy Art</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="about-tab" data-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="false">About</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact us</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><Body/></div>
        <div className="tab-pane fade" id="artist" role="tabpanel" aria-labelledby="artist-tab"><Art/></div>
        <div className="tab-pane fade" id="programmer" role="tabpanel" aria-labelledby="programmer-tab"><Programming/></div>
        <div className="tab-pane fade" id="buyer" role="tabpanel" aria-labelledby="buyer-tab"><Buyer/></div>
        <div className="tab-pane fade" id="commissions" role="tabpanel" aria-labelledby="commissions-tab">
        <div className="container">
        <h1 className="display-4">Commission Page</h1>
        <form action='mailto:artsandsuch01@gmail.com?subject = Commission&body = Message' method="post" enctype="text/plain">
            <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
        </div>
        <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
        <div className="container">
        <h1 className="display-4">Evelyn Emerick</h1>
        <div className="card mb-3">
            <img src="./images/artist.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Artist</h5>
                <p className="card-text">Makes the art that is commisioned!</p>
            </div>
        </div>
<div className="container">
    <h1 className="display-4">Vanessa Emerick</h1>
    <div className="card mb-3">
        <img src="./images/programer.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Programmer</h5>
            <p className="card-text">Maked the page and other smaller projetcs.</p>
        </div>
    </div>
</div>
    </div>
        </div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <h1>Contact us at <span className="badge badge-secondary">artsandsuch01@gmail.com
</span></h1>
        </div>
        <br/>
      </div>
            <footer class="footer">
                <div class="container">
                    <span class="text-muted">2020, Arts and Such</span>
                </div>
            </footer>
    </div>
  );
}


export default Home;