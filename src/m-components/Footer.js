import React from 'react';
import '../css/footer.css'

export const Footer = props => (
<footer className="page-footer cyan accent-2 z-depth-5">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5>About plexx</h5>
                <p>plexx is simple, yet addicting maze runner designed using HTML5 Canvas and Javascript.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5>Connect with plexx</h5>
                <ul>
                  <li><a href="https://twitter.com/plexxapp" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                  <li><a href="https://github.com/" target="_blank"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018 | <a href="https://plexx.io/" target="_blank">plexx</a>
            </div>
          </div>
        </footer>
);
