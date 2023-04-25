import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getDataById } from '../redux/middleware/api'

export const useOyatsuByIdSelector = ({ id }) => {
  const dispatch = useDispatch()
  const item = useSelector(state => state.oyatsu.selectedItem)

  useEffect(() => {
    dispatch(getDataById(id))
  }, [])

  return item
}
