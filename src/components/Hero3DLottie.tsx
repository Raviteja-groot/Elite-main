import Lottie from "lottie-react";
import animationData from "../assets/lottie/hero3d.json";

const Hero3DLottie = () => {
    return (
        <div style={{ width: "100%", maxWidth: "900px", margin: "0 auto" }}>
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay
            />
        </div>
    );
};

export default Hero3DLottie;
