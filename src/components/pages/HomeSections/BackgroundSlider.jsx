import scss from "./BackgroundSlider.module.scss";
import img1 from "../../../assets/brand/Layer 1.svg";
import img2 from "../../../assets/brand/2.svg";
import img3 from "../../../assets/brand/image 14.svg";
import img4 from "../../../assets/brand/4.svg";
import img5 from "../../../assets/brand/image 16.svg";
import img6 from "../../../assets/brand/6.svg";
import img7 from "../../../assets/brand/7.svg";
import { useKeenSlider } from "keen-slider/react";

const animation = { duration: 9000, easing: (t) => t };

const BackgroundSlider = () => {
	const [sliderRef] = useKeenSlider({
		loop: true,
		renderMode: "performance",
		drag: false,
		created(s) {
			s.moveToIdx(5, true, animation);
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
		animationEnded(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
	});
	const renderImg = [
		{
			img: img1,
		},
		{
			img: img2,
		},
		{
			img: img3,
		},
		{
			img: img4,
		},
		{
			img: img5,
		},
		{
			img: img6,
		},
		{
			img: img7,
		},
	];
	return (
		<div className={scss.BackgroundSlider}>
			<div className={scss.content}>
				<div className={scss.background1}>
					<div ref={sliderRef} className="keen-slider">
						{renderImg.map((item, index) => (
							<div key={index} className="keen-slider__slide number-slide1">
								<img src={item.img} alt="" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BackgroundSlider;
