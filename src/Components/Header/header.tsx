import styles from './header.module.css';

export default function Header() {
	return (
		<>
			<header>
				<div className={styles.container}>
					<h1 className={styles.logo}>Digi<span>UP</span></h1>
					<nav>
						<ul className={styles.navList}>
							<li><a className={styles.navList__a} href='#home'>Home</a></li>
							<li><a className={styles.navList__a} href='#servicos'>Serviços</a></li>
							<li><a className={styles.navList__a} href='#sobre'>Sobre</a></li>
							<li><a className={styles.navList__a} href='#contato'>Contato</a></li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	)
}