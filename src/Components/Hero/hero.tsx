import styles from './hero.module.css';
import heroImage from './Rocket Launch_Flatline.svg';

export default function Hero() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.display}>
					<h1 className={styles.heroTitle}>Dê um UP!</h1>
					<h2 className={styles.heroSubTitle}>Alavanque sua empresa com nossos websites responsivos e dinâmicos.
					</h2>
				</div>
				<div className={styles.image}>
					<img src={heroImage} alt="heroImage" />
				</div>
			</div>
		</>
	)
}