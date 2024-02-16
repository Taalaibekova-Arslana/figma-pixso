import { useState } from "react";
import scss from "./Section4.module.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import img1 from "../../../assets/email/Group 30 (1).svg";
import img2 from "../../../assets/email/Group 31.svg";
import img3 from "../../../assets/backg/Vector 4.png";
import img4 from "../../../assets/backg/Vector 3.png";
import img5 from "../../../assets/backg/Vector 1.png";

const urlBlog = import.meta.env.VITE_BLOGGER_BACKEND;

const urlMark = import.meta.env.VITE_MARKET_BACKEND;

const Section4 = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [comment, setComment] = useState("");
	const [click, setClick] = useState(false);

	const [colorBlog, setColorBlog] = useState(false);
	const [colorMarket, setColorMarket] = useState(false);

	const blogAdd = () => {
		setColorBlog(true);
		setColorMarket(false);
		setClick(true);
	};
	const styleBlog = { backgroundColor: colorBlog ? "white" : "black" };

	const marketAdd = () => {
		setColorMarket(true);
		setColorBlog(false);
		setClick(false);
	};
	const styleMarket = { backgroundColor: colorMarket ? "white" : "black" };

	const inputValue =
		name === "" || email === "" || number === "" || comment === "";
	const postRequest = async () => {
		if (inputValue) {
			toast.error("Пожалуйста, заполните все поля");
			return;
		}
		const newData1 = {
			name,
			email,
			number,
			comment,
		};
		setName("");
		setEmail("");
		setNumber("");
		setComment("");
		try {
			const response = await axios.post(click ? urlBlog : urlMark, newData1);
			console.log(response.data);
			toast.success("Данные успешно отправлены");
		} catch (error) {
			console.error("Ошибка при отправке данных:", error);
		}
	};

	return (
		<div className={scss.Section4}>
			<div className="container">
				<div className={scss.content}>
				<div className={scss.img1}>
					<img src={img1} alt="" />
				</div>
				<div className={scss.back}>
					<div className={scss.image1}>
						<img src={img4} alt="" />
					</div>
					<div className={scss.image}>
						<img src={img5} alt="" />
					</div>
					<div className={scss.image2}>
						<img src={img3} alt="" />
					</div>
				</div>
					<div className={scss.forms}>
						<div className={scss.title}>
							<h1>Оставить заявку</h1>
							<p>
								Рекламные агентства имеют опыт работы в разных отраслях и знают,
								как эффективно привлекать целевую аудиторию.
							</p>
						</div>
						<div className={scss.title1}>
							<p>Кто по жизни?</p>
							<div>
								<button
									onClick={blogAdd}
									style={styleBlog}
									className={scss.blog}>
									Блогер
								</button>
								<button
									onClick={marketAdd}
									style={styleMarket}
									className={scss.reklam}>
									Рекламодатель
								</button>
							</div>
						</div>
						<div className={scss.inputs}>
							<div>
								<label htmlFor="username">Ваше имя</label>
								<input
									value={name}
									onChange={(e) => setName(e.target.value)}
									type="text"
									name="username"
									placeholder="Введите ваше имя"
								/>
							</div>
							<div>
								<label htmlFor="username">Почта</label>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="text"
									name="username"
									placeholder="Введите электронную почту"
								/>
							</div>
							<div>
								<label htmlFor="username">Телефон</label>
								<input
									value={number}
									onChange={(e) => setNumber(e.target.value)}
									type="text"
									name="username"
									placeholder="Введите ваш номер телефона"
								/>
							</div>
							<div>
								<label htmlFor="username">Комментарий</label>
								<textarea
									value={comment}
									onChange={(e) => setComment(e.target.value)}
									name="username"
									rows="9"
									cols="71"
									placeholder="Введите ваш номер телефона"
								/>
							</div>
						</div>
						<div className={scss.send}>
							<button
								onClick={() => {
									postRequest();
								}}>
								Отправить
							</button>
							<ToastContainer />
							<p>
								Нажав на кнопку, вы соглашаетесь на обработку персональных
								данных
							</p>
						</div>
					</div>
				</div>
				<div className={scss.img2}>
					<img src={img2} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Section4;
