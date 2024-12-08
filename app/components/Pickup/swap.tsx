import { ArrowUpDown } from 'lucide-react';
import Image from "next/image"
const swap = () => {
    return (
        <div className="flex justify-center w-[60px] h-[60px] bg-[#3563E9] p-4 rounded-xl">
            <ArrowUpDown
            className='text-white'
            />
        </div>
    )
}
export default swap