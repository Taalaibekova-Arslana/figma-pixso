import scss from "./Footer.module.scss";
import icon1 from "../../../assets/icon/Vector.png";
import icon2 from "../../../assets/icon/logo-vk 1.png";
import icon3 from "../../../assets/icon/logo-twitter (2) 2.png";
import icon4 from "../../../assets/icon/logo-facebook (2) 1.png";
import icon5 from "../../../assets/icon/logo-twitch 1.png";
import icon6 from "../../../assets/icon/logo-instagram (1) 1.png";
import email from "../../../assets/icon/email.png";

import logo from "../../../assets/logo F.svg";

const Footer = () => {
	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.footeri}>
						<div>
							<div className={scss.logo}>
								<img src={logo} alt="" />
								<p>
									С другой стороны рамки и место обучения кадров позволяет
									оценить значение направлений прогрессивного развития!
								</p>
							</div>
							<ul>
								<li>Блогерам</li>
								<li>Рекламодателям</li>
								<li>Пользовательское соглашение</li>
								<li>Наши кейсы</li>
								<li>Помощь</li>
							</ul>
						</div>
						<div className={scss.email}>
							<p>Остались вопросы?</p>
							<button>
								<img src={email} alt="" />
								Почта
							</button>
						</div>
					</div>
					<hr />
					<div className={scss.icon}>
						<p>© 2024 Elcho911. All rights reserved.</p>
						<div className={scss.icons}>
							<img src={icon1} alt="" />
							<img src={icon2} alt="" />
							<img src={icon3} alt="" />
							<img src={icon4} alt="" />
							<img src={icon5} alt="" />
							<img src={icon6} alt="" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
