import React, { useState } from "react";

const ToDoList = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");

	const addTask = e => {
		if (e.keyCode == 13) {
			setTodos([...todos, { label: task, done: false }]);
			setTask("");
		}
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 ">
					<h2 className="text-center">Todos</h2>
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
									onClick={() => alert("debo eliminar")}>
									{task.label}
									<div>x</div>
								</li>
							);
						})}
					</ul>
					<label>tareas por hacer {todos.length}</label>
				</div>
			</div>
		</div>
	);
};
export default ToDoList;
