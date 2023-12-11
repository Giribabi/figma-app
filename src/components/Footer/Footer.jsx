/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.css'
import footer from '../../assets/footer.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import pinterest from '../../assets/pinterest.png'
import google from '../../assets/google.png'
import youtube from '../../assets/youtube.png'
import telegram from '../../assets/telegram.png'

function Footer(){
    return(
        <div>
            <div className='footerHeading'>
                <span className="head1">Your</span><span className="head2"> Hobby,</span><span className="head1"> Your</span><span className="head3"> Community...</span>
                <div className="start"><a>Get started</a></div>
            </div>
            <div className="image"><img src={footer} alt="footer_image"/></div>
            <div className="footer_bar">
                <div className="footer1">
                    <div className="heading">
                        Hobbycue
                    </div>
                    <div className="links">
                        <a>About Us</a>
                        <a>Our Services</a>
                        <a>Work with Us</a>
                        <a>FAQ</a>
                        <a>Contact Us</a>
                    </div>
                </div>
                <div className="footer1">
                    <div className="heading">
                        How Do I
                    </div>
                    <div className="links">
                        <a>Sign Up</a>
                        <a>Add a Listing</a>
                        <a>Claim Listing</a>
                        <a>Post a Query</a>
                        <a>Add a Blog Post</a>
                        <a>Other Queries</a>
                    </div>
                </div>
                <div className="footer1">
                    <div className="heading">
                        Hobbycue
                    </div>
                    <div className="links">
                        <a>Listings</a>
                        <a>Blog Posts</a>
                        <a>Shop / Store</a>
                        <a>Community</a>
                    </div>
                </div>
                <div className="footer1">
                    <div className="social">
                        <div className="heading">Social Media</div>
                        <div className="icons">
                            <img src={facebook} alt="facebook"/>
                            <img src={twitter} alt="twitter"/>
                            <img src={instagram} alt="instagram"/>
                            <img src={pinterest} alt="pinterest"/>
                            <img src={google} alt="google"/>
                            <img src={youtube} alt="youtube"/>
                            <img src={telegram} alt="telegram"/>
                        </div>
                    </div>
                    <div className="invite">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer