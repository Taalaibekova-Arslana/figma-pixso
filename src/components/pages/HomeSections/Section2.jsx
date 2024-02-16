import scss from "./Section2.module.scss";
import img1 from "../../../assets/Rectangle 14.svg";
import logo from "../../../assets/Rectangle 15.svg";
import card0 from "../../../assets/cards/card0.svg";
import card1 from "../../../assets//cards/card1.svg";
import card2 from "../../../assets/cards/card2.svg";
import card3 from "../../../assets//cards/card3.svg";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"
// import "./styles.css"	

const cards = [
	{
		title: "Игровой проект War Thunder",
		decript: "Специальный проект с Моргенштерном",
		img: card0,
	},
	{
		title: "Казино Stake x Drake",
		decript: "Азарт, Рэп, Реклама",
		img: card1,
	},
	{
		title: "Игровой проект Free Fire",
		decript: "Уникальная рекламная компания",
		img: card2,
	},
	{
		title: "VK Music",
		decript: "Музыкальный сервис соц. сети ВКонтакте",
		img: card3,
	},
];

const Section2 = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 2,
      spacing: 10,
    },
    vertical: true,
  })
	return (
		<div className={scss.Section2}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.content1}>
						<div className={scss.left}>
							<h1>Наши кейсы</h1>
							<img src={img1} alt="" />
						</div>
						<div className={scss.right}>
							<div className={scss.buttons}>
								<span>🔥</span>
								<button className={scss.game}>Игры</button>
								<button className={scss.colab}>Коллабарация</button>
							</div>
							<h1>Игровой проект War Thunder X ДУЛО</h1>
							<p>
								Разнообразный и богатый опыт консультация с профессионалами из
								IT играет важную роль в формировании всесторонне
								сбалансированных нововведений. Значимость этих проблем настолько
								очевидна, что новая модель организационной.
							</p>
							<button className={scss.button}>Подробнее</button>
						</div>
					</div>
					<div className={scss.content2}>
						<div className={scss.text1}>
							<img src={logo} alt="" />
							<div className={scss.text}>
								<h3>Общее кол-во просмотров</h3>
								<h2>20.000+</h2>
							</div>
							<hr />
						</div>
						<div className={scss.text1}>
							<img src={logo} alt="" />
							<div className={scss.text}>
								<h3>Лайков</h3>
								<h2>20.000+</h2>
							</div>
							<hr />
						</div>
						<div className={scss.text1}>
							<img src={logo} alt="" />
							<div className={scss.text}>
								<h3>охваты</h3>
								<h2>20.000+</h2>
							</div>
						</div>
					</div>
					<div className={scss.content3}>
						<div ref={sliderRef} className="keen-slider" style={{ height: 500 }}>
							{cards.map((item, index) => (
								<div key={index} className="keen-slider__slide number-slide1">
									<div className={scss.card}>
										<h3>{item.title}</h3>
										<p>{item.decript}</p>
										<img className={scss.img1} src={item.img} alt="" />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section2;
