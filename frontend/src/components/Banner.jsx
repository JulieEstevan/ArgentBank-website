import "../style/components/banner.css"

function Banner() {
    return (
        <section className="banner">
            <div className="banner-text-container">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">
                    No fees.<br/>
                    No minimum deposit.<br/>
                    High interest rates.
                </p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </div>
        </section>
    )
}

export default Banner