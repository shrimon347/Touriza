import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import img1 from "../../assets/slide/slide2.jpg";
import img2 from "../../assets/slide/slide5.jpg";
import img3 from "../../assets/slide/slide6.jpg";
const Slider = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider)

    return (
        <div>
            <AutoplaySlider play
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
                style={{
                    "--slider-height-percentage": "40%",
                    "--slider-transition-duration": "608ms",
                    "--organic-arrow-thickness": "4px",
                    "--organic-arrow-border-radius": "0px",
                    "--organic-arrow-height": "30px",
                    "--organic-arrow-color": "#17ff26",
                    "--control-button-width": "8%",
                    "--control-button-height": "25%",
                    "--control-button-background": "transparent",
                    "--control-bullet-color": "#096c10",
                    "--control-bullet-active-color": "#27b215",
                    "--loader-bar-color": "#328415",
                    "--loader-bar-height": "6px",
                  }}
                
                >
                <div data-src={img1}></div>
                <div data-src={img2}></div>
                <div data-src={img3}></div>
            </AutoplaySlider>
        </div>
    )
}

export default Slider