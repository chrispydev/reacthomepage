import React from "react";
import { Carousel, Button } from "react-bootstrap";
import home from "./home.jpg";
import home1 from "./home1.jpeg";
import home2 from "./home2.jpeg";
import "./Home.css";

function Home() {
	return (
		<div className="carousel__home">
			<Carousel>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100"
						src={home}
						alt="First slide"
					/>
					<Carousel.Caption className="carousel__caption">
						<h3>First slide label</h3>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis
							interdum. Nulla vitae elit libero, a pharetra augue
							mollis interdum. Nulla vitae elit libero, a pharetra
							augue mollis interdum.
						</p>
						<Button variant="danger" className="btn__caption">
							Follow Me
						</Button>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100"
						src={home1}
						alt="Third slide"
					/>

					<Carousel.Caption className="carousel__caption">
						<h3>Second slide label</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.
						</p>
						<Button variant="danger" className="btn__caption">
							Follow Me
						</Button>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100"
						src={home2}
						alt="Third slide"
					/>

					<Carousel.Caption className="carousel__caption">
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur. Praesent commodo cursus magna, vel
							scelerisque nisl consectetur. Praesent commodo
							cursus magna, vel scelerisque nisl consectetur.
						</p>
						<Button variant="danger" className="btn__caption">
							Follow Me
						</Button>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Home;
