const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-transparent py-3">
            <div className="container">
                <a className="navbar-brand fw-bolder fs-4 d-flex align-items-center" href="#">
                    <img
                        src="/Logo.png"
                        alt="Gen Leaders Logo"
                        width="40"
                        height="40"
                        className="me-2 rounded"
                    />

                    <span className="text-white">GEN</span>
                    <span style={{ color: '#8aa2d3' }} className="ms-2">LEADERS</span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar