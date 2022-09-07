import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/pages/info.module.scss";
export default function Info() {
	return (
		<Layout>
			<Head>
				<title>Info</title>
			</Head>
			<div className={styles.info}>
				<section className={styles.intro}>
					<div className={styles.img_mask}>
						<img src="/me.jpg" alt="A picture of me smiling 🙂" />
					</div>
					<p>
						Hello, my name is Daniel, I’m a Frontend developer and currently I’m
						looking for my first oportunity to work as an Intern Frontend
						Developer. This is one of my projects, and you can check out other
						projects and more info about me on my{" "}
						<a
							className={styles.link}
							href="https://daniel-oliveira1401.github.io/"
						>
							portfolio
						</a>
					</p>
				</section>
				<p>
					This app was created with the goal of putting into practice the
					knowledge that I acquired during the Nextjs Introduction course that
					<a
						href="https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website"
						className={styles.link}
					>
						Vercel
					</a>{" "}
					offers in their website. To couple with that, I decided to also
					showcase some of the projects that I made when following along the
					Learn React for free course offered by{" "}
					<a
						href="https://scrimba.com/learn/learnreact"
						className={styles.link}
					>
						Scrimba
					</a>
					, although I had to modify some of them a little bit in order to make
					them mobile-friendly.
				</p>

				<p>
					All the Icons used in this app were taken from the{" "}
					<a
						href="https://www.figma.com/community/plugin/735098390272716381/Iconify"
						className={styles.link}
					>
						Iconify
					</a>{" "}
					Figma extension.
				</p>
				<p>
					You can also take a look at the code behind this app in the{" "}
					<a href="" className={styles.link}>
						Github Respository
					</a>
				</p>
			</div>
		</Layout>
	);
}
