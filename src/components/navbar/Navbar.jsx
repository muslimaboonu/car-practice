import "../navbar/Navbar.css"
export default function Navbar({ carsLength }) {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="#">Cars</a>
                <span>
                    There are {carsLength} car
                </span>
            </div>
        </nav >
    )
}
