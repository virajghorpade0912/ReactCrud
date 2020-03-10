import React, { Component } from 'react';

import View from '../components/View';

import AddRecord from '../components/AddRecord';

import EditRecord from '../components/EditRecord';

class App extends React.Component {
	state = {
		studentList: [
			{ id: '1', name: 'Naresh', gender: 'Male' },
			{ id: '2', name: 'Keerti', gender: 'Male' },
			{ id: '3', name: 'Viiraj', gender: 'Male' }
		],
		display: {
			add: false,
			edit: false,
			view: true
		},
		dataForEdit: {}
	};

	addStudentRecord = (studentList) => {
		console.log(studentList.id + 'Student');
		if (this.state.studentList.find((p) => p.id === studentList.id)) {
			alert('Record of this id is alredy present');
			this.setState({ studentList: this.state.studentList });
		} else {
			const studentListX = [ ...this.state.studentList, studentList ];
			this.setState({ studentList: studentListX });
			this.setState({
				display: {
					add: false,
					edit: false,
					view: true
				}
			});
		}
	};

	deleteStudentRecord = (dataIndex) => {
		const StudentRecordX = [ ...this.state.studentList ];
		this.setState({ studentList: StudentRecordX.filter((p) => p.id !== dataIndex) });
	};

	addEdit = (data, dataIndex) => {
		const dataX = [ ...this.state.studentList ];
		dataX[dataIndex] = data;
		this.setState({ studentList: dataX });
		this.setState({
			display: {
				add: false,
				edit: false,
				view: true
			}
		});
	};

	editData = (dataIndex) => {
		const dataX = [ ...this.state.studentList ];
		console.log(dataX);
		const X = dataX[dataIndex];
		console.log(X);
		this.setState({
			dataForEdit: X
		});
		this.setState({ dIndex: dataIndex });

		console.log(this.state.dataForEdit);
		this.setState({
			display: {
				add: false,
				edit: true,
				view: false
			}
		});
	};

	testing = () => {
		this.setState({
			display: {
				add: false,
				edit: false,
				view: !this.state.display.view
			}
		});
	};

	render() {
		let table = (
			<table class="container">
				<View
					data={this.state.studentList}
					onDelete={(index) => this.deleteStudentRecord(index)}
					onEdit={(index) => this.editData(index)}
					test={() => this.testing()}
				/>
			</table>
		);
		let disp = '';
		if (this.state.display.view) {
			disp = table;
		} else if (this.state.display.edit) {
			disp = (
				<EditRecord
					data={this.state.dataForEdit}
					editInData={(data, index) => this.addEdit(data, index)}
					index={this.state.dIndex}
				/>
			);
		} else {
			disp = <AddRecord addData={(data) => this.addStudentRecord(data)} />;
		}
		return <div class="container">{disp}</div>;
	}
}

export default App;
