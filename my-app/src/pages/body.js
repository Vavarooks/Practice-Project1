import React from "react";

function Body() {
    return (
        <div>
             <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Important!</strong> Make sure you have a email app installed for the buy functions to work!
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <h1 className="text-info" id="Head">
                Vava and Rooks Home Page!
            </h1>
            <br />       
            <h2 className="text-info" id="Text">
                You can look at the artist tab for the information about the artist or
                the programming tab for the information about the programmer!
                Make sure to contact us for any commisions and or reviews!
                Thank you for visting our website.
                </h2>
        </div>
    );
}


export default Body;