import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        
                    </ul>
                </div>
            </div>
        )
    }
}
// <li>&copy; Gatsby Starter Strata</li><li>Design: Patrick Zarkha</li> 
export default Footer
