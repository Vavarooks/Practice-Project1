import React from "react";

function Body() {
    return (
        <div>
            <h1 id="Head">
                Arts and Such Home Page!
            </h1>
            <br />
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Important!</strong>Make sure you have a email app installed for the buy functions to work!
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            <h2 id="Text">
                You can look at the artist tab for the information about the artist or
                the programming tab for the information about the programmer!
                Make sure to contact us for any commisions and or reviews!
                Thank you for visting our website.
                </h2>
        </div>
    );
}


export default Body;