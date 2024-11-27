import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex item-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" name="" className='w-3' id="" value={'Men'} /> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="" className='w-3' id="" value={'Women'} /> Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="" className='w-3' id="" value={'Kids'} /> kids
            </p>
          </div>
        </div>
        {/* subcategories */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SUB-CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" name="" className='w-3' id="" value={'Topwear'} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="" className='w-3' id="" value={'Bottomwear'} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="" className='w-3' id="" value={'Winterwear'} /> Winterwear
            </p>
          </div>
        </div>

      </div>
      {/* Right side */}
      <div className='flex-1'>
        <div className="flex justify-between text-base sm:2-xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTION'} />
          <select name="" className='border-2 border-gray-300 text-sm px-2' id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Collection
