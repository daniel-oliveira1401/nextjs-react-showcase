import Head from "next/head";
import Layout from "../../components/Layout";
import styles from "../../styles/pages/project.module.scss";
import Link from "next/link";
import projectsData from "../../projects-data.json";
import { useEffect, useState } from "react";
import ArrowIcon from "../../public/arrow-horizontal.svg";

export default function Project({ project, projects }) {
	const [currentIndex, setCurrentIndex] = useState(findCurrentProjectIndex);

	function findCurrentProjectIndex() {
		return projects.findIndex((p) => p.url == project.url);
	}

	useEffect(() => {
		setCurrentIndex(findCurrentProjectIndex());
	}, [project, projects]);

	let isPrevValid = currentIndex > 0;
	let prevIndex = isPrevValid ? currentIndex - 1 : 0;
	let prevProject = projects[prevIndex];

	let isNextValid = currentIndex < projects.length - 1;
	let nextIndex = isNextValid ? currentIndex + 1 : projects.length - 1;
	let nextProject = projects[nextIndex];

	function showSpinner() {
		let spinner = document.querySelector("div[data-spinner]");
		spinner.style.opacity = 1;
	}

	function hideSpinner() {
		let spinner = document.querySelector("div[data-spinner]");
		spinner.style.opacity = 0;
	}

	useEffect(() => {
		let iframe = document.querySelector("iframe");

		if (iframe.contentDocument.querySelector("body")) {
			hideSpinner();
		}
	}, []);

	return (
		<div className={styles.project}>
			<Head>
				<title>{project.title}</title>
			</Head>
			<Layout>
				<div className={styles.projects_list}>
					{projects.map((projectData) => {
						return (
							<Link href={projectData.url}>
								<h3
									onClick={() => {
										if (projectData.url != project.url) {
											showSpinner();
										}
									}}
									key={projectData.url}
									data-active={(projectData.url == project.url).toString()}
									className={styles.project_link}
								>
									{projectData.title}
								</h3>
							</Link>
						);
					})}
				</div>
				<div className={styles.project__text}>
					<Link href={`/projects/${prevProject.url}`}>
						<ArrowIcon
							onClick={() => {
								showSpinner();
							}}
							className={styles.arrow__left}
							src="/arrow-horizontal.svg"
							alt=""
							data-valid={isPrevValid.toString()}
						/>
					</Link>
					<div className={styles.text_container}>
						<h1 className={styles.project__title}>{project.title}</h1>
						<p className={styles.project__description}>{project.description}</p>
					</div>
					<Link href={`/projects/${nextProject.url}`}>
						<ArrowIcon
							onClick={() => {
								showSpinner();
							}}
							className={styles.arrow__right}
							src="/arrow-horizontal.svg"
							alt=""
							data-valid={isNextValid.toString()}
						/>
					</Link>
				</div>
				<div className={styles.dots}>
					{projects.map((projectData) => {
						return (
							<span
								className={styles.dot}
								data-active={(projectData.url == project.url).toString()}
							></span>
						);
					})}
				</div>

				<div className={styles.project__container}>
					<Link href={`/projects/${prevProject.url}`}>
						<ArrowIcon
							onClick={() => {
								showSpinner();
							}}
							className={styles.arrow__left}
							src="/arrow-horizontal.svg"
							alt=""
							data-valid={isPrevValid.toString()}
						/>
					</Link>
					<div className={styles.project__iframe_container}>
						<div data-spinner className={styles.spinner}>
							<div className={styles.spinner__element}></div>
						</div>
						<iframe
							onLoad={(e) => {
								hideSpinner();
							}}
							src={`../../projects/${project.url}/index.html`}
						></iframe>
					</div>

					<Link href={`/projects/${nextProject.url}`}>
						<ArrowIcon
							onClick={() => {
								showSpinner();
							}}
							className={styles.arrow__right}
							src="/arrow-horizontal.svg"
							alt=""
							data-valid={isNextValid.toString()}
						/>
					</Link>
				</div>
			</Layout>
		</div>
	);
}

export async function getStaticProps({ params }) {
	let project = projectsData.find((project) => {
		return project.url == params.project;
	});

	return {
		props: {
			project,
			projects: projectsData
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
