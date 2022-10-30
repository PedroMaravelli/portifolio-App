import React from "react";
import './style.css'

function Banner() {
    return (
        <div className="containerBanner">
            <div className="textName">
                <h2>Olá, eu sou</h2>
                <h1>Pedro Maravelli</h1>
                <h2>Desenvolvedor FullStack</h2>

                <div className="socialMedia">
                    <div id="linkedin" className="linkedinLink"
                        onMouseOver={() =>
                            document.getElementById('linkedin').style.border = '1px solid  rgb(105, 172, 248)'
                        }
                        onMouseOut={() => {
                            document.getElementById('linkedin').style.border = '2px solid rgb(7, 115, 238)'
                        }}>
                        <a href="https://www.linkedin.com/in/pedro-maravelli-81452423b/">Linkedin</a>
                    </div>
                    <div id="github" className="gitHubLink" onMouseOver={() =>
                        document.getElementById('github').style.border = '1px solid  rgb(130, 39, 253)'
                    }
                        onMouseOut={() => {
                            document.getElementById('github').style.border = '2px solid rgb(168, 3, 245)'
                        }}>
                        <a href="https://github.com/PedroMaravelli">GitHub</a>
                    </div>


                </div>
            </div>
        </div>
    )

}
export default Banner