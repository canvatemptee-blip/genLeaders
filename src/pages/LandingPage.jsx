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

                    <div
                        className="d-flex flex-column align-items-center gap-4 mx-auto"
                        style={{ maxWidth: '900px' }}
                    >

                        <ActionCard
                            title="Join The Podcast Wave"
                            description="To be featured in a podcast, please fill up this form."
                            icon="bi bi-broadcast"
                            btnText="Get Featured Now"
                            link={LINKS.podcast}
                            variant="primary"
                            bg="dark"
                            wrapperClass="col-md-6"
                        />

                        <div className="row justify-content-center g-4 w-100">

                            <ActionCard
                                title="Career Announcement"
                                description="Landed a new role? Starting a new chapter? Fill out our form to get a polished, personalized LinkedIn post to announce your career move."
                                icon="bi-megaphone-fill"
                                btnText="Publish Announcement"
                                link={LINKS.announcement}
                                variant="primary"
                                bg="light"
                                wrapperClass="col-md-6"
                            />

                            <ActionCard
                                title="AI Spotlight Series"
                                description="Pushing the boundaries of Artificial Intelligence? Apply to feature in our specialized spotlight series and share your insights with industry leaders."
                                icon="bi-lightning-charge-fill"
                                btnText="Apply for Spotlight"
                                link={LINKS.spotlight}
                                variant="dark"
                                bg="light"
                                wrapperClass="col-md-6"
                            />

                        </div>
                    </div>

                </div>
            </main>

            <Footer />

        </div>
    )
}

export default LandingPage