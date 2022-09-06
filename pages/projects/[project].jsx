import Head from "next/head";
import Layout from "../../components/Layout";
import styles from "../../styles/pages/project.module.scss";
import projectsData from "../../projects-data.json";

export default function Project({ project }) {
	return (
		<div className={styles.project}>
			<Head>
				<title>{project.title}</title>
			</Head>
			<Layout>{project.title}</Layout>
		</div>
	);
}

export async function getStaticProps({ params }) {
	let project = projectsData.find((project) => {
		return project.url == params.project;
	});

	return {
		props: {
			project
		}
	};
}

export async function getStaticPaths() {
	let pathsArray = [];

	pathsArray = projectsData.map((project) => {
		return {
			params: {
				project: project.url
			}
		};
	});

	return {
		paths: pathsArray,
		fallback: false
	};
}
