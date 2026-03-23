const Footer = () => {
    return (
        <footer className="text-center py-3">
            <div className="container">
                <p className="mb-0 small" style={{ color: '#64748b' }}>
                    &copy; {new Date().getFullYear()} Gen Leaders. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer