import styles from "./layout.module.scss";
import projectsData from "../projects-data.json";
import Link from "next/link";

export default function Layout(props) {
	return (
		<div className={styles.layout}>
			<header>
				<nav className={styles.navbar}>
					<ul className={styles.links}>
						<Link href={"/"}>
							<a className={styles.links__home}> Home </a>
						</Link>
						<div>
							<div className={styles.links__projects}>
								<Link href={"/projects"}>Projects</Link>
								<img
									className={styles.dropdown__icon}
									src="/dropdown.svg"
									alt=""
									srcset=""
								/>
								<ul className={styles.dropdown}>
									{projectsData.map((project) => {
										return (
											<Link href={`/projects/${project.url}`} key={project.url}>
												<a className={styles.dropdown__link}>{project.title}</a>
											</Link>
										);
									})}
								</ul>
							</div>
						</div>
						<Link href={"/info"}>
							<a className={styles.links__info}>Info</a>
						</Link>
					</ul>
				</nav>
			</header>
			<div className={styles.main}>{props.children}</div>
			<footer className={styles.footer}>
				Made with <img src="/react.svg" alt="" />,{" "}
				<img src="/nextjs-long.svg" alt="" /> and{" "}
				<img src="/heart.svg" alt="" />.
			</footer>
		</div>
	);
}
