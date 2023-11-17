import React from "react";
import '../css/componente.css'
export function Componente(props) {

    return (
        <div className="contenedor">

            <div class="slider">

                <img src="imagen1.jpg" alt="Imagen 1" />
                <img src="imagen2.jpg" alt="Imagen 2" />
                <img src="imagen3.jpg" alt="Imagen 3" />
            </div>

            <div className="menu">
                <div className="container-menu">
                    <div className="cont-menu">
                        <nav>
                            <a href="#" className="links">links</a>
                            <a href="#" className="links">links</a>
                            <a href="#" className="links">links</a>
                            <a href="#" className="links">links</a>
                            <a href="#" className="links">links</a>
                        </nav>
                    </div>
                </div>
            </div>

        </div>

    );

}

