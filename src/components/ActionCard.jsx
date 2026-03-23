const ActionCard = ({
    title,
    description,
    icon,
    btnText,
    link,
    variant = "primary",
    bg = "dark"
}) => {
    const isDark = bg === "dark"

    return (
        <div className="col-md-6">
            <div
                className="card h-100 border-0 rounded-4 p-1 custom-hover-card"
                style={{ backgroundColor: isDark ? '#1e293b' : '#f8fafc' }}
            >
                <div className="card-body d-flex flex-column text-center p-4">

                    <div
                        className={`mb-3 rounded-circle d-inline-flex align-items-center justify-content-center mx-auto ${isDark ? "bg-primary bg-opacity-10" : "bg-dark bg-opacity-10"
                            }`}
                        style={{ width: '60px', height: '60px' }}
                    >
                        <i className={`bi ${icon} fs-3 ${isDark ? 'text-primary' : 'text-dark'}`}></i>
                    </div>

                    <h4 className={`card-title fw-bold mb-2 ${isDark ? 'text-white' : 'text-dark'}`}>
                        {title}
                    </h4>

                    <p className={`card-text mb-4 flex-grow-1 small ${isDark ? '' : 'text-muted'}`} style={{ color: isDark ? '#94a3b8' : undefined }}>
                        {description}
                    </p>

                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-${variant} w-100 fw-semibold rounded-pill py-2`}
                    >
                        {btnText}
                    </a>

                </div>
            </div>
        </div>
    )
}

export default ActionCard