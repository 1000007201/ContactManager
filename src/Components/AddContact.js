import React from "react";

const AddContact = () => {
	return (
		<div id="contact-main">
			<div id="contact-add">
				<div className="mb-3 contact-add-element">
					<label className="form-label">Name</label>
					<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Name"/>
				</div>
				<div className="mb-3 contact-add-element">
					<label className="form-label">Phone Number</label>
					<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Phone Number" />
				</div>
				<div>
					<button type="button" className="btn btn-success">Add Contact</button>
				</div>
			</div>
		</div>
	)
}

export default AddContact