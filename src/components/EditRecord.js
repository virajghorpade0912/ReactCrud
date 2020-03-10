import React, { Component } from 'react';

class EditRecord extends Component {
	state = {
		data: {
			id: this.props.data.id,
			name: this.props.data.name,
			gender: this.props.data.gender
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			data: { ...this.state.data, [name]: value }
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { id, name, gender } = this.state.data;
		this.setState({ data: { id, name, gender } });
		console.log(this.props.index);
		this.props.editInData(this.state.data, this.props.index);
	};

	render() {
		return (
			<div class="container">
				<h3>Edit Record</h3>
				<form class="form-horizontal" onSubmit={this.handleSubmit}>
					<div class="form-group">
						<label class="control-label col-sm-2" for="id">
							ID:
						</label>
						<div class="col-sm-10">
							<input
								type="text"
								class="form-control"
								name="id"
								onChange={this.handleChange}
								placeholder="Enter id"
								value={this.state.data.id}
								readOnly
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
								onChange={this.handleChange}
								name="name"
								placeholder="Enter name"
								value={this.state.data.name}
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
								value={this.state.data.gender}
								class="form-control"
								onChange={this.handleChange}
							>
								<option>Select</option>
								<option value="Female">Female</option>
								<option value="Male">Male</option>
							</select>
						</div>
					</div>
					<input type="submit" value="Save" class="btn btn-outline-primary" />
				</form>
			</div>
		);
	}
}

export default EditRecord;
