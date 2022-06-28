import styles from "./service.module.css"
import imgAgreement from "./agreement.svg"


export default function Service() {
	return (
		<>
			<section className={styles.container}>
				<h1 className={styles.serviceTitle}>Benefícios e Soluções para sua empresa</h1>
				<article className={styles.servicesCards}>
					<div>
						<img src={imgAgreement} alt="" />
						<p>Analise as estatísticas de marketing da empresa.</p>
					</div>
					<div>
						<img src={imgAgreement} alt="" />
						<p>Gerencie o tempo e o serviço diminuindo custos.</p>
					</div>
					<div>
						<img src={imgAgreement} alt="" />
						<p>Confiabilidade e integridade com seus clientes.</p>
					</div>
				</article>
			</section>

		</>
	)
}