import TopSection from './components/TopSection/TopSection';
import PickUpSection from '../app/components/Pickupsection/pickupsection'
import PopularCar from './components/popular';
import RecCar from './components/recommendation'

export default function Home() {
  return (
    <div>
      <div className='mx-7'><TopSection/>
      <PickUpSection/>
      <PopularCar/>
      <RecCar/>
      </div>
    </div>
  );
}
