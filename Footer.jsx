import React, { Component } from 'react';

class footer extends Component {
  state = {}
    render() {
      return (    
        <div className="fixed-bottom">
        <div className="padding-top: 60px">
        <div className="container">    
        <div className="row-fluid">
		    <div className="span1">
        
				<ul className="unstyled">
					<li>Career</li>
					<li>About us</li>
					<li>Blog</li>
					<li>Contact</li>
					<li>Help</li>
				</ul>
       </div>					
		</div>
    
	</div>
	<div className="row-fluid">
		<div className="span12">
			<div className="span3">
				<p className="ml-5 md-lg-0">Terms of Service & Privacy Policy</p>    				
			</div>

			<div className="span8">
				<p className="ml-5 md-lg-0"> <span>Logo</span>  © 2019 LTP. All rights reserved</p>
			</div>
		</div>
	</div>
  </div>
  </div>
    )
  }
}


export default footer;
