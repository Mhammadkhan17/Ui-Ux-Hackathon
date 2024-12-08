import MainHeader from './components/header'
import DropOff from './components/Pickup/dropoff';
import PickUp from './components/Pickup/pickup';
import Swap from './components/Pickup/swap';
import TopSection from './components/TopSection/TopSection';

export default function Home() {
  return (
    <div className="w-[375px] h-[3257px] lg:w-[1440px] lg:h-[2724px]">
      <MainHeader/>
      <TopSection/>
      <div className='grid grid-cols-3 w-full] h-[160] mt-12'>
      <PickUp/>
      <div className='flex justify-center'><Swap/></div>
      <DropOff/>
      </div>
    </div>
  );
}
