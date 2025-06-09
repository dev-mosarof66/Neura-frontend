import { useContext, useEffect } from "react"
import Loader from "../public/loader"
import Context from "../../context/context"
import axiosInstance from "../../utils/axios"
import toast from "react-hot-toast"

export const LogoutPopup = () => {
    const { SetUser, setLogoutPopup } = useContext(Context)
    const handleLogin = async () => {
        await axiosInstance.post('/user/logout').then(() => {
            SetUser(null)
            toast.success("Successfully logged out.")
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
    useEffect(() => {
        setTimeout(() => {
            handleLogin()
            setLogoutPopup(false)
        }, 3000);
    }, [])
    return (
        <div className="absolute top-0 w-full h-screen flex items-center justify-center bg-black z-50">

            <div className="w-full">
                <Loader />
            </div>
        </div>
    )
}