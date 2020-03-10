import React, { Component } from 'react';

class AddRecord extends React.Component {
	state = {
		studentList: {
			id: '',
			name: '',
			gender: ''
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		console.log({ [name]: value });
		this.setState({ studentList: { ...this.state.studentList, [name]: value } });
	};

	handleSumbit = (event) => {
		event.preventDefault();
		console.log(this.state.studentList);
		const { id, name, gender } = this.state.studentList;
		this.setState({ studentList: { id, name, gender } });
		this.props.addData(this.state.studentList);
	};

	render() {
		return (
			<div className="container">
				<h3>Add Record</h3>
				<form class="form-horizontal">
					<div class="form-group">
						<label class="control-label col-sm-2" for="id">
							ID:
						</label>
						<div class="col-sm-10">
							<input
								type="text"
								class="form-control"
								name="id"
								placeholder="Enter id"
								value={this.state.studentList.id}
								onChange={this.handleChange}
							/>
						</div>
					</div>

					<div class="form-group">
						<label class="control-label col-sm-2" for="name">
							Name:
						</label>
						<div class="col-sm-10">
							<input
								type="text"
								class="form-control"
								name="name"
								placeholder="Enter name"
								value={this.state.studentList.name}
								onChange={this.handleChange}
							/>
						</div>
					</div>

					<div class="form-group">
						<label class="control-label col-sm-2" for="gender">
							Gender:
						</label>
						<div class="col-sm-10">
							<select
								name="gender"
								value={this.state.gender}
								onChange={this.handleChange}
								class="form-control"
							>
								<option>Select</option>
								<option value="Female">Female</option>
								<option value="Male">Male</option>
							</select>
						</div>
					</div>
					<button onClick={this.handleSumbit} class="btn btn-outline-success">
						Click ME!!!
					</button>
				</form>
			</div>
		);
	}
}
export default AddRecord;
