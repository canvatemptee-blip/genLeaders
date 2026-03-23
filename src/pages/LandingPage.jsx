import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ActionCard from '../components/ActionCard'
import Footer from '../components/Footer'
import { LINKS } from '../constants/links'

const LandingPage = () => {
    return (
        <div className="d-flex flex-column min-vh-100 main-bg">

            <Navbar />

            <main className="flex-grow-1 d-flex align-items-center py-2">
                <div className="container">

                    <Hero />

                    <div className="row justify-content-center g-4 mx-auto" style={{ maxWidth: '900px' }}>

                        <ActionCard
                            title="Career Announcement"
                            description="Landed a new role? Starting a new chapter? Fill out our form to get a polished, personalized LinkedIn post to announce your career move."
                            icon="bi-megaphone-fill"
                            btnText="Publish Announcement"
                            link={LINKS.announcement}
                            variant="primary"
                            bg="dark"
                        />

                        <ActionCard
                            title="AI Spotlight Series"
                            description="Pushing the boundaries of Artificial Intelligence? Apply to feature in our specialized spotlight series and share your insights with industry leaders."
                            icon="bi-lightning-charge-fill"
                            btnText="Apply for Spotlight"
                            link={LINKS.spotlight}
                            variant="dark"
                            bg="light"
                        />

                    </div>
                </div>
            </main>

            <Footer />

        </div>
    )
}

export default LandingPage