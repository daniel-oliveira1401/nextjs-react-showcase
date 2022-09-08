import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/home.module.scss";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Home</title>
			</Head>
			<section className={styles.home}>
				<div className={styles.hero}>
					<div className={styles.hero__text}>
						<span className={styles.hero__text_secondary}>Projects</span>
						<span className={styles.hero__text_primary}>SHOWCASE</span>
						<span className={styles.hero__text_secondary}>app</span>
					</div>
					<div className={styles.hero__images}>
						<img src="/nextjs-short.svg" alt="nextjs icon" />
						<span className={styles.plus}>+</span>
						<img src="/react.svg" alt="react icon" />
					</div>
				</div>
				<p className={styles.text_section}>
					This app was created with the goal of putting into practice the
					knowledge that I acquired during the Nextjs Introduction course that
					Vercel offers in their website. To couple with that, I decided to also
					showcase some of the projects that I made when following along the
					Learn React for free course offered by Scrimba.
				</p>
				<Link href={"/projects"}>
					<button className={styles.cta_button}>Check out the Projects!</button>
				</Link>
			</section>
		</Layout>
	);
}
