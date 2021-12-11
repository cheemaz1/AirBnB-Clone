import React from 'react';
// import './footer.css'


export default () => {
    return (
        <footer id="all-page-footer">
            <div className="footer-list-container">
                <ul>
                    <h3>About me</h3>
                    <li><a href="https://github.com/cheemaz1" target="_blank" className="github"><i className="fab fa-github-square"> </i></a></li>
                    <li><a href="https://www.linkedin.com/in/zayed-cheema-30521920a/" target="_blank" className="github"><i className="fab fa-linkedin"></i> </a></li>
                    <li><a href="https://angel.co/u/zayed-cheema" target="_blank" className="github"><i className="fab fa-angellist"></i> </a></li>
                </ul>
                <ul>
                    <h3>Contact</h3>
                    <li><a href="mailto:zayedcheema@hotmail.com">zayedcheema@hotmail.com</a></li>
                    <li><p>(647) 833-5465</p></li>
                    {/* <li><p>Toronto, Canada</p></li> */}
                </ul>
                <ul>
                    <h3>Other Projects</h3>
                    <li><a href="https://github.com/cheemaz1/V1-Foodie" target="_blank">Foodie Web App</a></li>
                </ul>
                <ul>
                    <h3>Technologies/Inspiration</h3>
                    <li><a href="https://www.airbnb.com" target="_blank">Airbnb</a></li>
                    <li><a>Ruby</a></li>
                    <li><a>Ruby on Rails</a></li>
                    <li><a>JavaScript</a></li>
                    <li><a>React</a></li>
                    <li><a>Redux</a></li>
                    <li><a>HTML</a></li>
                    <li><a>CSS</a></li>
                    <li><a>AWS</a></li>
                </ul>
            </div>
            <div className="footer-tag-line">
                <h3 id="copyright">{'\u00A9'} 2021 CozyBnB Inc. All rights reserved</h3>
            </div>

        </footer>
    )
}