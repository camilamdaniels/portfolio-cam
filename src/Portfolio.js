import React, { Component } from 'react';
import './Portfolio.css';
import { ReactComponent as Blackhole } from './images/blackhole.svg';
import { ReactComponent as Comet } from './images/comet.svg';
import { ReactComponent as Flare } from './images/flare.svg';
import { ReactComponent as Planet } from './images/planet.svg';
import { ReactComponent as Planet2 } from './images/planet-2.svg';
import { ReactComponent as Planet3 } from './images/planet-3.svg';
import { ReactComponent as Planet4 } from './images/planet-4.svg';
import { ReactComponent as ShootingStar } from './images/shooting-star.svg';
import { ReactComponent as Shuttle } from './images/shuttle.svg';

class Portfolio extends Component {
	render() {
		return(
			<div>
				<nav className="site-nav grid">
					<h1>Camila Daniels</h1>
					<ul>
						<li><a href="#portfolio"></a></li>
						<li><a href="#skills"></a></li>
						<li><a href="#contact"></a></li>
					</ul>
				</nav>

				<section id="welcome" className="grid">
					<div className="welcome-text">
						<h2>Space Enthusiast<br />& JavaScript Developer</h2>
						<p className="leading">
							Hi! I'm Camila, a Software Engineer with a B.A. in Applied Math from Barnard College of Columbia University.
						</p>
						<a href="#portfolio" className="button">View my work</a>
					</div>
					<div className="welcome-img">
						<Blackhole />
					</div>
				</section>

				<section id="portfolio">
					<h3>Some of my Projects</h3>
					<div className="projects grid">
						<a href="https://ultimate-tic-tac.herokuapp.com/">
							<Planet2 height="20rem" width="20rem"/>
							<h4>Interstellar Tic Tac Toe</h4>
						</a>
						<a href="https://camilamdaniels.github.io/react-blackjack/">
							<Planet3 height="20rem" width="20rem"/>
							<h4>Planet Boy's Blackjack</h4>
						</a>
						<a href="https://camilamdaniels.github.io/todo2/">
							<Planet height="20rem" width="20rem"/>
							<h4>Captain Cosmo's TodoList</h4>
						</a>
						<a href="https://whispering-oasis-83844.herokuapp.com/">
							<Planet4 height="20rem" width="20rem"/>
							<h4>My Alien Wallet</h4>
						</a>
					</div>
				</section>

				<section id="skills">
					<h3>
						Things I Can Do
					</h3>

					<ul className="grid">
						<li>
							<Comet height="20rem" width="15rem"/>
							<h4>JavaScript</h4>
						</li>
						<li>
							<Flare height="20rem" width="15rem"/>
							<h4>React</h4>
						</li>
						<li>
							<ShootingStar height="20rem" width="15rem"/>
							<h4>Express</h4>
						</li>
						<li>
							<Shuttle height="20rem" width="15rem"/>
							<h4>Java</h4>
						</li>
					</ul>
				</section>

				<section id="contact">
					<h3>Get In Touch</h3>
					<p className="leading">If you are interested in learning more, send a message!</p>
					<form
						action="https://formspree.io/f/xqkgobvp"
						method="POST"
					>
						<input type="text" placeholder="NAME"/>
						<input type="email" placeholder="EMAIL" name="_replyto"/>
						<textarea placeholder="YOUR MESSAGE" name="message"></textarea>
						<button className="button">Send Flare</button>
					</form>
				</section>

				<footer>
					<div className="grid">
						<p className="copyright">Copyright 2021 Cosmo Junkie</p>
						<ul className="social">
							<li>
								<a href="#">
									<img src="https://raw.githubusercontent.com/iamshaunjp/responsive-css-grid-build/847f0a24fecf4aba7cd205a09b7a52b7924766cf/assets/icon_fb.svg" alt="facebook"/>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="https://raw.githubusercontent.com/iamshaunjp/responsive-css-grid-build/847f0a24fecf4aba7cd205a09b7a52b7924766cf/assets/icon_tw.svg" alt="twitter"/>
								</a>
							</li>
						</ul>
					</div>
				</footer>
			</div>
		)
	}
}

export default Portfolio;