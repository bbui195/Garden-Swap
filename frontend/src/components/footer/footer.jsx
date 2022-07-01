import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin, BsPersonSquare } from "react-icons/bs";
import { GiUsaFlag, GiGreenPower } from "react-icons/gi";

function Footer(props) {
    return (
        <div className="footer">
            <div className="bottom">
                <div className='about-section'>
                    <div>
                        <h3>Technologies</h3>
                        <ul>
                            <li>React.js</li>
                            <li>Redux.js</li>
                            <li>MongoDb</li>
                            <li>Express.js</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                </div>
                <div className="powered-by">
                    <GiGreenPower size={25} />
                    <span>Garden Swap is powered by 100% renewable electricity.</span>
                </div>
                <div className="links">
                    <h3>Engineers</h3>
                    <div className="engineer-container">
                        <p className="name">Cole Martindale</p>
                        <div className='icon-groups'>
                            <a className="git" href="https://github.com/Colemartindale">
                                <FaGithubSquare className="github" size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/cole-martindale-385045147/">
                                <BsLinkedin className="link" size={25} />
                            </a>
                            <a href="#">
                                <BsPersonSquare className="port" size={25} />
                            </a>
                        </div>
                    </div>
                    <div className="engineer-container">
                        <p className="name">Brian Bui</p>
                        <div className='icon-groups'>
                            <a className="git" href="https://github.com/bbui195">
                                <FaGithubSquare className="github" size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/brian-bui-39545020a/">
                                <BsLinkedin className="link" size={25} />
                            </a>
                            <a href="#">
                                <BsPersonSquare className="port" size={25} />
                            </a>
                        </div>
                    </div>
                    <div className="engineer-container">
                        <p className="name">John Gardner</p>
                        <div className='icon-groups'>
                            <a className="git" href="https://github.com/nobleport">
                                <FaGithubSquare className="github" size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/john-gardner-320b4a20b/">
                                <BsLinkedin className="link" size={25} />
                            </a>
                            <a href="#">
                                <BsPersonSquare className="port" size={25} />
                            </a>
                        </div>
                    </div>
                    <div className="engineer-container">
                        <p className="name">Billy Phan</p>
                        <div className='icon-groups'>
                            <a className="git" href="https://github.com/bphan002?tab=repositories">
                                <FaGithubSquare className="github" size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/billy-phan-41014a40/">
                                <BsLinkedin className="link" size={25} />
                            </a>
                            <a href="https://bphan002-porftolio-website.herokuapp.com/">
                                <BsPersonSquare className="port" size={25} />
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='lowest'>
                    <div className="details">
                        <GiUsaFlag className="fleg" />
                        <span>United States{" "} | {" "}English (US) {" "}|{" "} $ (USD)</span>
                    </div>
                    <span>2022 Garden Swap Inc.</span>
                </div>
        </div>
    )
}

export default Footer
