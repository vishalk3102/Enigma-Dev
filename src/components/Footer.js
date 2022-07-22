import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container pt-5">
          <div class="row py-3 mx-auto">
            <div class="footer-box col-lg-4 col-md-4 mb-4 mb-lg-0">
              <h6 class="  mb-4">Help</h6>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <a href="#">Contact Us</a>
                </li>
                <li class="mb-2">
                  <a href="#">About Us</a>
                </li>
                <li class="mb-2">
                  <a href="#">Payments</a>
                </li>
                <li class="mb-2">
                  <a href="#">Shipping</a>
                </li>
              </ul>
            </div>
            <div class=" footer-box col-lg-4 col-md-4 mb-4 mb-lg-0">
              <h6 class=" mb-4">Policy</h6>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Return Policy
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Terms Of Use
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Security
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            <div class="footer-box col-lg-4 col-md-4 mb-lg-0">
              <h6 class=" mb-4">Registered Office Address</h6>
              <p class="footer-text mb-4">
                2865 Monroe Avenue Fort Myers Province Full Florida 33901
              </p>
              <ul class="footer-icon-box  list-inline mt-4">
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="twitter">
                    <FaTwitter className="twitter-icon" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="facebook">
                    <FaFacebook className="facebook-icon" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="instagram">
                    <FaInstagram className="instagram-icon" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="youtube">
                    <FaYoutube className="youtube-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="p-0 m-0 b-0" />
        <div class="py-2">
          <div class="container text-center">
            <p class=".footer-text  mb-0 py-2">
              © 2022 EnigmaDev All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
