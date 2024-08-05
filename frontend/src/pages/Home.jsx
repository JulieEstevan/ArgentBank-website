import "../style/pages/home.css"
import Banner from "../components/Banner"
import Features from "../components/Features"
import iconchat from "../assets/icon-chat.webp"
import iconmoney from "../assets/icon-money.webp"
import iconsecurity from "../assets/icon-security.webp"

function Home() {
    return (
        <main>
            <section className="banner">
                <Banner />
            </section>
            <section className="features-container">
                <Features icon={iconchat} title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
                <Features icon={iconmoney} title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!" />
                <Features icon={iconsecurity} title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe." />
            </section>
        </main>
    )
}

export default Home