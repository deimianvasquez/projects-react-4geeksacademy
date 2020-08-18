import React, { useState } from "react";

const ToDoList = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");
	const [error, setError] = useState(false);

	const addTask = e => {
		if (e.keyCode == 13) {
			if (task.trim() != "") {
				setTodos([...todos, { label: task, done: false }]);
				setTask("");
				setError(false);
				console.log("Datos llenos", error);
			} else {
				setError(true);
				console.log("debe llenar todo los datos", error);
			}
		}
	};

	const deleteTask = index => {
		setTodos(
			todos.filter((task, i) => {
				return i != index;
			})
		);
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 ">
					<h2 className="text-center">Todos</h2>
					{error ? (
						<div className="alert alert-danger text-center">
							El campo de tarea no debe estar vacio, debe colocal
							una tarea validad
						</div>
					) : null}
					<input
						type="text"
						className="form-control my-2"
						placeholder="What need to be done ?"
						value={task}
						onChange={e => setTask(e.target.value)}
						onKeyUp={addTask}
					/>
					<ul>
						{todos.map((task, index) => {
							return (
								<li
									key={index}
									onClick={() => deleteTask(index)}>
									{task.label}
									<div>x</div>
								</li>
							);
						})}
					</ul>
					{todos.length < 1 ? (
						<label>
							Ya, terminaste las tareas CONGRATULATIONS!!!!
						</label>
					) : todos.length == 1 ? (
						<label> Esta es la ultima tarea, solo falta una</label>
					) : todos.length > 1 ? (
						<label>Te faltan {todos.length} tareas</label>
					) : null}
				</div>
			</div>
		</div>
	);
};
export default ToDoList;
