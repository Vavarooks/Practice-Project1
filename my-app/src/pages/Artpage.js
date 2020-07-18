import React from "react";


function Art() {
    return (
        <div>
            <div className="container">

                <div className="card-group">
                    <div className="card">
                        <img src="./images/Example3.jpg" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Line Art</h5>
                            <p className="card-text">Around $4 (Prices may very)</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./images/Example2.jpg" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Line and colored</h5>
                            <p className="card-text">Around $10 (Prices may very)</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./images/Example1.png" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Colored art with background</h5>
                            <p className="card-text">Around $15 (Prices may very)</p>
                            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Images" html='<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>'>
                                Images
</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Art;