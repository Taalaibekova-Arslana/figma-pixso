import Section2 from "./HomeSections/Section2";
import Section3 from "./HomeSections/Section3";
import Section4 from "./HomeSections/Section4";
import Welcome from "./HomeSections/Welcome";
import BackgroundSlider from "./HomeSections/BackgroundSlider";

const HomePage = () => {
	return (
		<>
			<Welcome />
			<BackgroundSlider />
			<Section2 />
			<Section3 />
			<Section4 />
		</>
	);
};

export default HomePage;
