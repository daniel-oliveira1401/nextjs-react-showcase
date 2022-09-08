import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta property="og:title" content="React Projects Showcase" />
				<meta
					name="og:description"
					content="A showcase of some of my React projecs, using Nextjs."
				/>

				<meta property="og:image" content="/og_image.jpg" />
				<meta property="og:type" content="website" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
					rel="stylesheet"
				/>

				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
				/>
			</Head>
			<body>
				<Main></Main>
				<NextScript></NextScript>
			</body>
		</Html>
	);
}
