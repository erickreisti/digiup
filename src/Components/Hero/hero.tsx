import styles from './hero.module.css';
import heroImage from './Rocket Launch_Flatline.svg';

export default function Hero() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.hero}>
					<h1 className={styles.heroTitle}>Dê um UP!</h1>
					<h2 className={styles.heroSubTitle}>Alavanque sua empresa com nossos websites responsivos e dinâmicos.
					</h2>
					<button className={styles.btnStart}>Get Start</button>
				</div>
				<div className={styles.image}>
					<img src={heroImage} alt="heroImage" />
				</div>
			</div>
		</>
	)
}