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
			<section className={styles.projects}>
				{projectsData.map((project) => {
					return (
						<Link key={project.url} href={`/projects/${project.url}`}>
							<div className={styles.project}>{project.title}</div>
						</Link>
					);
				})}
			</section>
		</Layout>
	);
}
