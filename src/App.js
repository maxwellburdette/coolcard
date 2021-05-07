import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Picture from "./graphics/profile.jpeg";
function App() {
	function handleToggle() {
		const sec = document.querySelector(".sec");
		sec.classList.toggle("dark");
	}
	return (
		<section className="sec">
			<div className="card">
				<div className="toggle" onClick={handleToggle}></div>
				<div className="content">
					<div className="imgText">
						<div className="imgBox">
							<img src={Picture} alt=""></img>
						</div>
						<h3>
							Maxwell Burdette
							<br />
							<span>Software Developer</span>
						</h3>
						<ul className="sci">
							<li>
								<a
									href="http://maxwellburdette.netlify.app/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<FontAwesomeIcon
										className="icons"
										icon={["fas", "globe"]}
										size="lg"
									></FontAwesomeIcon>
								</a>
							</li>
							<li>
								<a
									href="https://github.com/maxwellburdette"
									rel="noopener noreferrer"
									target="_blank"
								>
									<FontAwesomeIcon
										className="icons"
										icon={["fab", "github"]}
										size="lg"
									></FontAwesomeIcon>
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/maxwell-burdette-325432a6/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<FontAwesomeIcon
										className="icons"
										icon={["fab", "linkedin-in"]}
										size="lg"
									></FontAwesomeIcon>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default App;
