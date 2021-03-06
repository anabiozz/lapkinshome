import React from 'react';

const Footer = () => {
	return <footer>
		<div className="footer__content">
			<div className="footer__column">
				<h5>LAPKINS HOME</h5>
				<ul>
					<li><a href="">Все продукты</a></li>
					<li><a href="">Этика и Устойчивость</a></li>
					<li><a href="">Материалы</a></li>
				</ul>
			</div>

			<div className="footer__column">
				<h5>Покупателям</h5>
				<ul>
					<li><a href="">FAQ</a></li>
					<li><a href="">Покупки и доставка</a></li>
				</ul>
			</div>

			<div className="footer__column">
				<h5>Контакты</h5>
				<ul>
					<li><a href="">Тел: 89001234567</a></li>
					<li><a href="">Email: customerservice@ru</a></li>
				</ul>
			</div>
		</div>
	</footer>;
};

export default Footer;