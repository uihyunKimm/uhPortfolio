import React from "react";

const Main = ({ children }) => {
    return (
    <main id="main" role="main">
        <div className="container">
            {children}
        </div>
    </main>
    );
};

export default Main;