import Lottie from "lottie-react";
import animationData from "../../public/Animation - 1699426170132.json"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="bg-black min-h-screen flex justify-center items-center">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cookiteer | Error</title>
            </Helmet>
            <div className="w-full text-center">
                <Lottie
                    className="md:w-[30%] w-[80%] mx-auto"
                    options={defaultOptions}
                    animationData={animationData}
                    height={200}
                    width={200}
                ></Lottie>
                <h2 className="md:text-7xl text-5xl font-bold text-center text-white title-text">Page Not Found!</h2>
                <Link to="/" className="btn mt-5">Back to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;