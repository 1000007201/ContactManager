import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
	// var Contacts = props.contacts;
	const ContactCards = props.contacts.map((SingleContact)=>
		<ContactCard contact={SingleContact}></ContactCard>);
	return (
		<div className="contact-list-container">
			{ContactCards}
		</div>
	)
};

export default ContactList;
