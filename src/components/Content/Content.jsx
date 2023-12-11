/* eslint-disable jsx-a11y/anchor-is-valid */
import './content.css'
import img1 from '../../assets/img1.png'
// I used external styling in this component
// used emmets
// used a new property "object-fit : contain" to contain the image in the div container
// Learnt that external styling is far better than inline 😅
function Content(){
    return (
    <div className='part1'>
        <div className='contentContainer'>
            <div className="head">
                <span className="black">Explore your </span>
                <span className="cyan"> hobby</span>
                <span className="black"> or</span>
                <span className="purple"> passion</span>
            </div>
            <div className="para">
                <div className='para1'>
                    Sign-in to interact with a community of fellow hobbylists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or perform arts, sports, games, gardening, model making, cooking, indoor or outdoor activities...
                </div>
                <br/>
                <div className='para2'>
                    If you are an expert or a seller, you can Add your Listing and Promote yourself, your students, products, services or events. Hop on you hobbyhorse and enjoy the ride.
                </div>
            </div>
            <div>
                <img className='image' src={img1} alt="background_image"/>
            </div>
        </div>
        <div className="signin">
            <div className="headContainer">
                <span className="heads">Sign In</span>
                <span className="heads">Join In</span>
            </div>
            <div className="signInBody">
                <div className="continue">
                    <a href='#'>Continue with Google</a>
                </div>
                <div className="continue">
                    <a href='#'>Continue with Facebook</a>
                </div>
                <div className="or">
                    Or connect with
                </div>
                <div className="info">
                    <input type="email" placeholder='Email'></input>
                </div>
                <div className="info">
                    <input type="email" placeholder='Password'></input>
                </div>
                <div className="remember_forgot">
                    <div className="rememberMe">
                        <input type="checkbox"></input>
                         Remember me
                    </div>
                    <div>
                        Forgot password?
                    </div>
                </div>
                <div className="continue">
                    <a href='#'>Continue</a>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Content