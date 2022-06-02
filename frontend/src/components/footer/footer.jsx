import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin, BsPersonSquare } from "react-icons/bs";
import { GiUsaFlag, GiGreenPower} from "react-icons/gi";

function Footer(props) {
    return (
        <div className="footer">
            <div className="questions">
                <span className="grid1">Have a question? Well, we’ve got some answers.</span>
                <button className="grid2" >Go to Help Center</button>
            </div>
            
            <div className="bottom">
                <div className="details">
                    <GiUsaFlag className="fleg"/>
                    <span>United States{" "} | {" "}English (US) {" "}|{" "} $ (USD)</span> 
                </div>
                <div className="powered-by">
                    <GiGreenPower size={25}/>
                    <span className='clean'>Garden Swap is powered by 100% renewable energy.</span>
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
        </div>
    )
}

export default Footer