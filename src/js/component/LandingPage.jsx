import React, { Fragment } from "react";

const LandingPage = () => {
	return (
		<Fragment>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
				<div className="container">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavAltMarkup">
						<div className="navbar-nav ml-auto">
							<a className="nav-link active" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
							<a className="nav-link" href="#">
								About
							</a>
							<a className="nav-link" href="#">
								Service
							</a>
							<a className="nav-link" href="#">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>

			<div className="container mt-4">
				<div className="row">
					<div className="col">
						<div className="jumbotron">
							<h1 className="display-4">Hello, world!</h1>
							<p className="lead">
								This is a simple hero unit, a simple
								jumbotron-style component for calling extra
								attention to featured content or information.
							</p>
							<hr className="my-4" />
							<p>
								It uses utility classes for typography and
								spacing to space content out within the larger
								container.
							</p>
							<a
								className="btn btn-primary btn-lg"
								href="#"
								role="button">
								Learn more
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="card-deck">
							<div className="card">
								<img
									src="https://via.placeholder.com/500x325"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title text-center font-weight-bold">
										Card title
									</h5>
									<p className="card-text text-center">
										This is a wider card with supporting
										text below as a natural lead-in to
										additional content. This content is a
										little bit longer.
									</p>
								</div>
								<div className="card-footer text-center">
									<button className="btn btn-primary font-weight-bold">
										Call to action
									</button>
								</div>
							</div>
							<div className="card">
								<img
									src="https://via.placeholder.com/500x325"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title text-center font-weight-bold">
										Card title
									</h5>
									<p className="card-text text-center">
										This is a wider card with supporting
										text below as a natural lead-in to
										additional content. This content is a
										little bit longer.
									</p>
								</div>
								<div className="card-footer text-center">
									<button className="btn btn-primary font-weight-bold">
										Call to action
									</button>
								</div>
							</div>
							<div className="card">
								<img
									src="https://via.placeholder.com/500x325"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title text-center font-weight-bold">
										Card title
									</h5>
									<p className="card-text text-center">
										This is a wider card with supporting
										text below as a natural lead-in to
										additional content. This content is a
										little bit longer.
									</p>
								</div>
								<div className="card-footer text-center">
									<button className="btn btn-primary font-weight-bold">
										Call to action
									</button>
								</div>
							</div>
							<div className="card">
								<img
									src="https://via.placeholder.com/500x325"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title text-center font-weight-bold">
										Card title
									</h5>
									<p className="card-text text-center">
										This is a wider card with supporting
										text below as a natural lead-in to
										additional content. This content is a
										little bit longer.
									</p>
								</div>
								<div className="card-footer text-center">
									<button className="btn btn-primary font-weight-bold">
										Call to action
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fuid bg-dark mt-4">
				<div className="row ">
					<div className="col text-center">
						<p className="font-weight-bold text-white display-5 my-5">
							Copyright@ Your Website 2020
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default LandingPage;
