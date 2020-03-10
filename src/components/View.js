import React, { Component } from 'react';

import './View.css';

function View(props, index) {
	return (
		<div class="container">
			<div class="row">
				<h3>Employee Details</h3>

				<div class="col-md-10 col-md-offset-1">
					<div class="panel panel-default panel-table">
						<div class="panel-heading">
							<div class="row">
								<div class="col col-xs-6">
									<h3 class="panel-title" />
								</div>
								<div class="col col-xs-6 text-right">
									<button
										type="button"
										class="btn btn-sm btn-primary btn-create"
										onClick={() => props.test()}
									>
										Add Record
									</button>
								</div>
								<br />
								<br />
							</div>
						</div>
						<div className="panel-body">
							<table class="table table-striped table-bordered table-list">
								<thead align="center">
									<tr>
										<th>
											<em class="fa fa-cog" />
										</th>
										<th class="hidden-xs">ID</th>
										<th>Name</th>
										<th>Gender</th>
									</tr>
								</thead>
								<tbody>
									{props.data.map((s, index) => (
										<tr key={s.id} align="center">
											<td>
												<a
													class="btn btn-info fas fa-edit"
													onClick={() => props.onEdit(index)}
												/>
												&nbsp;&nbsp;
												<a
													class="btn btn-danger fa fa-trash"
													onClick={() => props.onDelete(s.id)}
												/>
											</td>

											<td>{s.id}</td>

											<td>{s.name}</td>
											<td>{s.gender}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default View;
