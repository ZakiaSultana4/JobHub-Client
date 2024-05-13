import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export const axiosSecure = axios.create({
    baseURL: "https://jobhub-a11.vercel.app",
    withCredentials: true,
});

const useAxiosSecure = () => {
    const {logOut, setUser} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use(res => {
            return res;
        }, error => {
            console.log("Error tracked in the interceptor", error?.response);
            if(error?.response?.status === 401 || error?.response?.status === 403) {
                console.log("logout the user!");
                logOut()
                .then(() => {
                    toast.success("User logged out!");
                    setUser(null);
                    navigate("/");
                }).catch(error => console.log(error));
            }
        })
    }, [logOut,setUser,navigate]);

    return axiosSecure;
};

export default useAxiosSecure;