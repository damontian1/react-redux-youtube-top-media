import React from "react";
import SearchBar from "./SearchBar";

const Navigation = function (props) {
  return (
    <section id="navigation">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <div>
              </div>
            </div>
            <div className="col-md-8" style={{ padding: "0.5em 0em" }}>
              <div>
                <SearchBar />
              </div>
            </div>
            <div className="col-md-2 hidden-sm hidden-xs" style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", height: "90px" }}>
              <div>
                <small>Made By: Damon Tian</small>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navigation;