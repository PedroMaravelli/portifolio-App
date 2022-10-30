import React from "react";
import './style.css'
import imagemPerfil from '../../assets/linguagem-de-programação.jpg'



function Sobre(){
    return(
        <div className="containerDivSobre">
            <div className="divProfile">
                <img src={imagemPerfil}></img>
                <div className="textDescriptionSobre">
                    <h2>SOBRE MIM</h2>
                    <div className="textForMe">
                        <p>Desenvolvedor Web Full Stack, sou apaixonado por resolver problemas e ajudar as pessoas e negócios. </p>
                        <p>Me apaixonei pela tecnologia em 2019 quando fiz um curso de desenvolvimento de jogos e desde então eu faço cursos relacionado a tecnologia.</p>
                        <p>Tenho 16 anos e tenho bastante potencial e facilidade em aprender novas tecnologias.</p>
                        <p>Me considero extremamente focado e esforçado em sempre dar o meu melhor em qualquer desafio.  </p>
                        <p></p>
                    </div>
                </div>

            </div>
                
        </div>
    )

}

export default Sobre