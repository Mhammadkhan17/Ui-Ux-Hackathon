"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
const SidePanel = () => {
  return (
    <div className="w-[340px] h-[1600px] border">
      <div className="w-[176px]">
        <div className="mx-7 my-7">
          <p>Type</p>
          <div className="my-4 flex flex-col w-1/2">
            <div className="flex justify-evenly">
              <Checkbox id="Sport" className="mt-1" />
              <label htmlFor="Sport" className="mb-2 pl-3">
                Sport
              </label>
              <p>(10)</p>
            </div>
            <div className="flex justify-evenly">
              <Checkbox id="Sport" className="mt-1" />
              <label htmlFor="Sport" className="mb-2 pl-3">
                SUV
              </label>
              <p>(12)</p>
            </div>
            <div className="flex justify-evenly">
              <Checkbox id="Sport" className="mt-1" />
              <label htmlFor="Sport" className="mb-2 pl-3">
                MPV
              </label>
              (16)
            </div>
            <div className="flex justify-evenly">
              <Checkbox id="Sport" className="mt-1" />
              <label htmlFor="Sport" className="mb-2 pl-3">
                Sedan
              </label>
              <p>(20)</p>
            </div>
            <div className="flex justify-evenly">
              <Checkbox id="Sport" className="mt-1" />
              <label htmlFor="Sport" className="mb-2 pl-3">
                Coupe
              </label>
              <p>(14)</p>
            </div>
            <div className="flex justify-evenly">
              <Checkbox id="Sport" className="mt-1" />
              <label htmlFor="Sport" className="mb-2 pl-3">
                Hatchback
              </label>
              <p>(14)</p>
            </div>
          </div>
        </div>
        <div className="mx-7 my-7">
          <p>CAPACITY</p>
          <div className="my-4 flex flex-col">
            <div className="flex justify-evenly">
              <Checkbox id="Sport" className="mt-1" />
              <label htmlFor="Sport" className="mb-2 pl-3">
                2 Person
              </label>
              <p>(10)</p>
            </div>
            <div className="flex justify-evenly">
              <Checkbox id="Sport" className="mt-1" />
              <label htmlFor="Sport" className="mb-2 pl-3">
                4 Person
              </label>
              <p>(14)</p>
            </div>
            <div className="flex justify-evenly">
              <Checkbox id="Sport" className="mt-1" />
              <label htmlFor="Sport" className="mb-2 pl-3">
                6 Person
              </label>
              <p>(12)</p>
            </div>
            <div className="flex justify-evenly">
              <Checkbox id="Sport" className="mt-1" />
              <label htmlFor="Sport" className="mb-2 pl-3">
                8 Person
              </label>
              <p>(16)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[296px] h-[100px] mx-7 my-7">
        <p>Price</p>
        <Slider defaultValue={[33]} max={100} step={1} className="my-4" />
        <p>Max $100.00</p>
      </div>
    </div>
  );
};
export default SidePanel;
