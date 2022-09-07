import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/pages/projects.module.scss";
import projectsData from "../projects-data.json";
import Link from "next/link";

export default function Projects() {
	return (
		<Layout>
			<Head>
				<title>Projects</title>
			</Head>
			<p className={styles.header}>
				These projects are all interactive, try scrolling and pushing the
				buttons!
			</p>
			<section className={styles.projects}>
				{projectsData.map((project) => {
					return (
						<Link key={project.url} href={`/projects/${project.url}`}>
							<div className={styles.project}>
								<h2 className={styles.project__title}>{project.title}</h2>
								<hr />
								<p className={styles.project__description}>
									{project.description}
								</p>
							</div>
						</Link>
					);
				})}
			</section>
		</Layout>
	);
}
