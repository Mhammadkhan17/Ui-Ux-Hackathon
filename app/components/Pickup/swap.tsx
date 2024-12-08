import Image from "next/image"
const swap = () => {
    return (
        <div className="flex justify-center w-[60px] h-[60px] bg-[#3563E9] p-4 rounded-xl">
            <Image src='/swap.png' alt="swap" width={24} height={24}
            />
        </div>
    )
}
export default swap