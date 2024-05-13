import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { BiSolidTime } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
const FoodItem = ({ food }) => {

    const { defaultImage } = useContext(AuthContext);
    const navigate = useNavigate();

    return (

        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className="grid sm:grid-cols-2 grid-cols-1 bg-white overflow-hidden shadow-xl rounded-xl" key={food._id}>
            <ScrollAnimation className="overflow-hidden h-full border-red-400 relative">
                <img className="relative h-full w-full object-cover duration-500 hover:scale-110 hover:rotate-2" src={food.foodImage} alt="" />
            </ScrollAnimation>

            <ScrollAnimation>
                <div className="py-3  px-8">
                    <div className="flex gap-2 items-center">
                        <img className="w-8 h-8 object-cover rounded-full border-2 border-lime-400" src={food.donarPhoto ? food.donarPhoto : defaultImage} alt="" />

                        <p className="md:text-sm text-xs font-bold">{food.donarName}</p>
                    </div>
                    <h2 className="md:text-2xl text-lg font-bold mt-2">{food.foodName}</h2>

                    <p className="md:text-sm text-xs my-1">
                        {food.additionalNotes.length > 50 ? food.additionalNotes.slice(0, 50) + "..." : food.additionalNotes}
                    </p>

                    <p className="md:text-sm text-xs font-medium my-2">Quantity : {food.foodQuantity} (no. of person to be served)</p>

                    <div className="flex justify-between flex-wrap gap-3 my-2">
                        <span className="flex gap-1 items-center">
                            <BiSolidTime className="text-lime-500 md:text-xl text-base"></BiSolidTime>
                            <span className="md:text-sm text-xs font-medium">{food.expiredDate}</span>
                        </span>

                        <span className="flex gap-1 items-center">
                            <FaLocationDot className="text-lime-500 md:text-xl text-base"></FaLocationDot>
                            <span className="md:text-sm text-xs font-medium">{food.pickUpLocation}</span>
                        </span>
                    </div>

                    <div>
                        <button onClick={() => navigate(`/food/${food._id}`)} className="bg-[#fafafa] mt-1 md:px-5 px-3 md:py-3 py-2 rounded-lg shadow-md font-bold md:text-sm text-xs duration-300 hover:bg-slate-500 hover:text-lime-400 text-lime-600">View Details</button>
                    </div>
                </div>
            </ScrollAnimation>
        </motion.div>
    );
};

export default FoodItem;

FoodItem.propTypes = {
    food: PropTypes.object
}