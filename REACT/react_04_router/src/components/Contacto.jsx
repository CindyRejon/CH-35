import { Link } from "react-router-dom"

const Contacto = () => {
    return (
        <>
            <div>
                <h1>Esta es la página de contacto</h1>
                <Link to="/">
                Regresar a la pagina de inicio
                </Link>
                <br />
                <br />
                <Link to="/nosotros">
                Regresar a la pagina de nosotros
                </Link>
            </div>
        </>
    )
}
export default Contacto