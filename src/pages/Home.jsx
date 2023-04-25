import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getData, getDataByName, getDataByQuantity } from '../redux/middleware/api'

import DrinkInventory from "../container/DrinkInventory"
import SnackInventory from "../container/SnackInventory"

const Home = () => {
  const dispatch = useDispatch()

  // useSelector((state)=>console.log(state.oyatsu.data))

  useEffect(() => {
    dispatch(getData())
  }, [])

  const orderByRecent = (event) => {
    event.target.previousElementSibling.previousElementSibling.classList.remove('tab-active')
    event.target.previousElementSibling.classList.remove('tab-active')
    event.target.classList.add('tab-active')

    dispatch(getData())
  }

  const orderByQuantity = (event) => {
    event.target.previousElementSibling.classList.remove('tab-active')
    event.target.nextElementSibling.classList.remove('tab-active')
    event.target.classList.add('tab-active')

    // dispatch(getDataByQuantity())
    dispatch(getData('quantity'))
  }

  const orderByName = (event) => {
    event.target.nextElementSibling.nextElementSibling.classList.remove('tab-active')
    event.target.nextElementSibling.classList.remove('tab-active')
    event.target.classList.add('tab-active')

    // dispatch(getDataByName())
    dispatch(getData('name'))
  }

  return (
    <div className="container mx-auto px-4">
      <div className='flex justify-end items-center my-8'>
        <div className='flex items-center gap-5'>
          <span>Order by:</span>
          <div className="tabs tabs-boxed bg-transparent">
            <button
              className={`tab`}
              onClick={orderByName}
            >Name</button>
            <button
              className={`tab`}
              onClick={orderByQuantity}
            >Quantity</button>
            <button
              className={`tab tab-active`}
              onClick={orderByRecent}
            >Recent</button>
          </div>
        </div>
      </div>
      <div className='prose max-w-none'>
        <SnackInventory />
        <DrinkInventory />
      </div>
    </div>
  )
}

export default Home