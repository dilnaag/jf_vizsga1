import axios from "axios";

export const readData=async (url,setProducts) => {
    const respons=await axios.get(url)
    setProducts(respons.data)
}