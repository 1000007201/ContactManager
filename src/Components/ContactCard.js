import React, { Component } from "react";
const DeleteImage = require("../Images/delete_FILL0_wght400_GRAD0_opsz24.png");

const ContactCard = (props) => {

	const {id,name,email,phoneno} = props.contact;
	return (
		<div className="card-main-div">
			<div className="card-name-div">
				<h5>{name}</h5>
				<h6>{phoneno}</h6>
				<h6>{email}</h6>
			</div>
			<img id ="delete-icon" onClick={()=>{props.deleteContact(id)}} src={DeleteImage} alt="Description"></img>
		</div>
	)
}; 

export default ContactCard