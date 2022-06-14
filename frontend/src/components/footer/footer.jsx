import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin, BsPersonSquare } from "react-icons/bs";
import { GiUsaFlag, GiGreenPower} from "react-icons/gi";

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
                    <div>
                        <h3>Engineers</h3> 
                        <ul>
                            <li>Billy Phan</li>
                            <li>Brian Bui</li>
                            <li>Cole Martindale</li>
                            <li>John Gardner</li>
                        </ul>
                    </div>
                </div>
                <div className="powered-by">
                    <GiGreenPower size={25}/>
                    <span>Garden Swap is powered by 100% renewable electricity.</span>
                </div>
                <div className="links">
                    <a className="git" href="https://github.com/bbui195/Garden-Swap">
                        <FaGithubSquare className="github" size={29}/>
                    </a>
                    <a href="https://www.linkedin.com/in/cole-martindale-385045147/">
                        <BsLinkedin className="link" size={25} />
                    </a>
                    <a href="#">
                        <BsPersonSquare className="port" size={25}/>
                    </a>
                </div>
                
            </div>
            <div className='lowest'>
                <div className="details">
                    <GiUsaFlag className="fleg"/>
                    <span>United States{" "} | {" "}English (US) {" "}|{" "} $ (USD)</span> 
                </div>
                <span>2022 Garden Swap Inc.</span>
            </div>
        </div>
    )
}

export default Footer