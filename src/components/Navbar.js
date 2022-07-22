import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav-section">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <div className="navbar-brand">EnigmaDev</div>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <NavLink
                        exact
                        to="/home"
                        class="nav-link active"
                        aria-current="page"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink exact to="/service" class="nav-link">
                        Service
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink exact to="/pricing" class="nav-link">
                        Pricing
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink exact to="/contact" class="nav-link">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
