import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
    // return React.createElement("div", { id: "something" }, [
    //     React.createElement("h1", {}, "Adopt Me!"),
    //     React.createElement(Pet, {
    //         name: "Luna",
    //         animal: "Dog",
    //         breed: "Havanese",
    //     }),
    //     React.createElement(Pet, {
    //         name: "pepper",
    //         animal: "Dog",
    //         breed: "pug",
    //     }),
    //     React.createElement(Pet, {
    //         name: "blueee",
    //         animal: "cat",
    //         breed: "mixed",
    //     }),
    // ]);

    // return (
    //     <div>
    //         <div></div>
    //         <h1 id="somthing">Adopt Me!</h1>
    //         <Pet name="Luna" animal="dog" breed="havanese" />
    //         <Pet name="pepper" animal="dog" breed="pug" />
    //         <Pet name="boilee" animal="cat" breed="mixed" />
    //     </div>
    // );

    return (
        <React.StrictMode>
            <div>
                <header>
                    <Link to="/">Adopt Me!</Link>
                </header>

                <Router>
                    <SearchParams path="/" />
                    <Details path="/details/:id" />
                </Router>
            </div>
        </React.StrictMode>
    );
};

render(<App />, document.getElementById("root"));
