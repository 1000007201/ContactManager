import React, { useState } from "react";

const AddContact = (props) => {

	let [ParamsState, SetParams] = useState({name: "", phoneno: "", email: ""});

	function handleNameChange(event){
		let Name  = event.target.value
		let Phone = ParamsState.phoneno
		let Email = ParamsState.email
		SetParams({name: Name, phoneno: Phone, email: Email})
	};

	function handlePhoneChange(event){
		let Name  = ParamsState.name
		let Phone = event.target.value
		let Email = ParamsState.email
		SetParams({name: Name, phoneno: Phone, email: Email})
	};

	function handleEmailChange(event){
		let {name, phoneno, email} = ParamsState
		let NewEmail               = event.target.value
		SetParams({name:name, phoneno:phoneno, email: NewEmail})
	};

	function handleSubmit(event){
		console.log("Event is running")
		event.preventDefault();
		let Name  = ParamsState.name
		let Phone = ParamsState.phoneno
		let Email = ParamsState.email
		let Value = props.handleContactList
		console.log(`Value of prop: ${typeof(Value)}`)
		props.handleContactList(Name, Phone, Email)
		SetParams({name: "", phoneno: "", email: ""})
		console.log(`Name: ${Name} PhoneNumber: ${Phone}`)
	};

	return (
		<div id="contact-main">
			<div id="contact-add">
				<div className="mb-3 contact-add-element">
					<label className="form-label">Name</label>
					<input type="text" className="form-control" value={ParamsState.name} onChange={handleNameChange} id="formGroupExampleInput" placeholder="Enter Name"/>
				</div>
				<div className="mb-3 contact-add-element">
					<label className="form-label">Phone Number</label>
					<input type="text" className="form-control" value={ParamsState.phoneno} onChange={handlePhoneChange} id="formGroupExampleInput" placeholder="Enter Phone Number" />
				</div>
				<div className="mb-3 contact-add-element">
					<label className="form-label">Email</label>
					<input type="text" className="form-control" value={ParamsState.email} onChange={handleEmailChange} id="formGroupExampleInput" placeholder="Enter Phone Number" />
				</div>
				<div>
					<button type="button" className="btn btn-success" onClick={handleSubmit}>Add Contact</button>
				</div>
			</div>
		</div>
	)
}

export default AddContact