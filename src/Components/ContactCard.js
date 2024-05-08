import React, { Component } from "react";
const DeleteImage = require("../Images/delete_FILL0_wght400_GRAD0_opsz24.png");

class ContactCard extends Component {
	render() {
		console.log(`Contact: ${this.props.contact}`)
		const {name,email,phoneno} = this.props.contact;
		return (
			<div className="card-main-div">
				<div className="card-name-div">
					<h5>{name}</h5>
					<h6>{phoneno}</h6>
					<h6>{email}</h6>
				</div>
				<img src={DeleteImage} alt="Description"></img>
			</div>
		)
	}
};

export default ContactCard