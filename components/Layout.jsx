import styles from "./layout.module.scss";
import projectsData from "../projects-data.json";
import Link from "next/link";
import { useRouter } from "next/router";

function NavLink({ children, href, linkClass }) {
	const router = useRouter();

	let linkStateClass = router.asPath == href ? styles.active_link : "";

	function handleClick(e) {
		e.preventDefault();
		router.push(href);
	}

	return (
		<a
			href={href}
			onClick={handleClick}
			className={`${linkClass || ""} ${linkStateClass}`}
			tabIndex="0"
		>
			{children}
		</a>
	);
}

export default function Layout(props) {
	const router = useRouter();

	return (
		<div className={styles.layout}>
			<header>
				<nav className={styles.navbar}>
					<ul className={styles.links}>
						<NavLink linkClass={styles.links__home} href={"/"}>
							Home
						</NavLink>

						<div
							tabIndex="0"
							className={`${styles.links__projects} ${
								router.asPath.includes("/projects") ? styles.active_link : ""
							}`}
						>
							<NavLink href={"/projects"}>Projects</NavLink>
							<img
								className={styles.dropdown__icon}
								src="/dropdown.svg"
								alt=""
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

						<NavLink linkClass={styles.links__info} href={"/info"}>
							Info
						</NavLink>
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
