navigation_menu = `
	<nav class="navbar navbar-expand-lg navbar-light shadow-sm">
		<div class="container">
			<a class="navbar-brand fw-bold" href="#">
				<img src="logo/logo.png" alt="Domicicare logo" id ="logo" class="img-fluid">
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item"><a class="nav-link" href="#about_us">About Us</a></li>
					<li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
					<li class="nav-item"><a class="nav-link" href="#contact_us">Contact Us</a></li>
				</ul>
			</div>
		</div>
	</nav>
`;

document.body.insertAdjacentHTML('beforeend', navigation_menu);