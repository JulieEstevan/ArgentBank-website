import "../style/components/features.css"

function Features({icon, title, text}) {
    return (
        <section className="feature">
            <h2 className="sr-only">Features</h2>
            <img src={icon} alt="icon" className="feature-icon"/>
            <h3 className="feature-title">{title}</h3>
            <p>{text}</p>
        </section>
    )
}

export default Features