import Image from "next/image";
import { Metadata } from "next";
import { DynamicParagraph } from "./components/DynamicParagraph";
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "Admin Panel",
    description: "Administrative panel for site management",
};

export default function Page() {
	return (
		<div className={styles.page_section}>
			<Image
				src='/mascot.png'
				width={120}
				height={120}
				alt="mascot icon"
			/>

			<div className={styles.welcome}>
				<h1 className={styles.title}>
					Welcome to the admin shelter
				</h1>
				<DynamicParagraph />
			</div>
		</div>
	)
}