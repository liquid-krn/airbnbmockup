import React from "react";

function Footer(){
    var date = new Date();
    var year = date.getFullYear();

    return<div className="h-10 pt-2 w-full text-white text-center mb-0 bg-gray-500">
        <p>Copyright {year}</p>
    </div>
}
export default Footer