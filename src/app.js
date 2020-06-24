import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";
const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
    const themehook = useState("darkblue");
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
            <ThemeContext.Provider value={themehook}>
                <div>
                    <header>
                        <Link to="/">Adopt Me!</Link>
                    </header>
                    <Suspense fallback={<h1>Loading route...</h1>}>
                        <Router>
                            <SearchParams path="/" />
                            <Details path="/details/:id" />
                        </Router>
                    </Suspense>
                </div>
            </ThemeContext.Provider>
        </React.StrictMode>
    );
};

render(<App />, document.getElementById("root"));
