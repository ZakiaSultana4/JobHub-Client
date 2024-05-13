import Lottie from "lottie-react";
import animationData from "../../../public/Animation - 1699427621816";

const AboutUs = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3">
            <div className="grid md:grid-cols-2 grid-cols-1 place-items-center">
                <div className="">
                    <h1 className="md:text-7xl text-5xl title-text font-bold">About Us
                        <span className="block border-4 border-lime-500 mt-2 w-[70%]"></span>
                    </h1>
                    
                    <div className="space-y-5">
                        <h3 className="md:text-3xl text-xl title-text text-yellow-500 mt-5">Good food is all the sweeter when shared with good friends.</h3>

                        <p>
                        Welcome to Cookiteer, the community table where every meal becomes a shared delight. We believe that food is more than just nourishment; it&apos;s a language that transcends words and connects souls. Our platform is dedicated to the magic that happens when people come together to share a meal.
                        </p>

                        <p>
                        With a smorgasbord of dishes from every corner of the globe, we invite you to explore new flavors, share your own culinary masterpieces, and join the conversation around the dinner table. Whether you&apos;re a seasoned chef or a curious foodie, you&apos;ll find a place at our table.
                        </p>

                        <p>
                        Cookiteer is not just about sharing recipes; it&apos;s about swapping stories, forging friendships, and building a community around the love of food. It&apos;s about the laughter that bubbles up between bites, the memories created around the table, and the joy of introducing someone to a taste they&apos;ve never experienced before.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <Lottie
                        className="w-full mx-auto"
                        options={defaultOptions}
                        animationData={animationData}
                        height={200}
                        width={200}
                    ></Lottie>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;