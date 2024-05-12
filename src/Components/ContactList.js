import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
	// function deleteContact(id){
	// 	props.deleteContact(id);
	// };

	const ContactCards = props.contacts.map((SingleContact)=>
		<ContactCard contact={SingleContact} deleteContact={(id)=>{props.deleteContact(id)}}></ContactCard>);
	return (
		<div className="contact-list-container">
			{ContactCards}
		</div>
	)
};

export default ContactList;
