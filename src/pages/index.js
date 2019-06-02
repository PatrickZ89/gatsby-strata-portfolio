import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.png'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, link: 'https://end-in-mind.herokuapp.com', caption: 'End-In-Mind Administrator Web Application', description: `Our team of 5 
    developers created a full-stack web application that provides a common spot where users can find a calendar displaying events, 
    and admins receive a place to upload/download documents and photos, as well as a dashboard displaying regional data.  
    This application is currently being used by the End-In-Mind Organization.
    Tech used: Javascript, React, Redux, Sagas, User Authentication, Material UI, Calendar.JS`},
    { id: '2', src: full02, thumbnail: thumb02, link: 'https://disc-daddy.herokuapp.com', caption: 'Disc Daddy', description: `A full-stack web application aimed to be a virtual 
    assistant to aid the user in score keeping, data analysis, database record, and real-time map while playing a game of Disc Golf.
    Tech used: Javascript, React, Redux, Sagas, User Authentication, Material UI, Chart JS, Google Maps API, jQuery`},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Garden Saga', description: 'Full Stack Application used for storing garden data, such as plants and associated information.'},
    // { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Patrick Zarkha"
        const siteDescription = "Software Engineer Portfolio"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>I have a background in Science and Mathematics, I majored in Physics in college, but have always had a great interest in software engineering.</h2>
                        </header>
                        <p>During college, financial constraints led me to working in the plumbing and HVAC industry, where I applied problem solving and communication skills with homeowners on a daily basis.  I enjoyed working closely with a team to solve problems, but the desire to work in a flourishing and more mentally stimulating field is what led me to Prime Digital Academy.</p>
                        <ul className="actions">
                            {/* <li><a href="#" className="button">Learn More</a></li> */}
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recently Built Full Stack Applications</h2>

                        <Gallery images={IMAGES.map(({ id, src, thumbnail, caption, description, link }) => ({
                            src,
                            thumbnail,
                            caption,
                            description,
                            link
                        }))} />

                        <ul className="actions">
                            {/* <li><a href="#" className="button">Full Portfolio</a></li> */}
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Feel free to send an e-mail if you would like to get in touch</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        275 Baker Street East, Unit 1<br />
                                        Saint Paul, MN 55107<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        651-786-9413
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">SoftwareDev@PatrickZarkha.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
              <ul>
                <li>&copy; Gatsby</li>
              </ul>

            </Layout>
            
        )
    }
}

export default HomeIndex