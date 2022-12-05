import { useDispatch } from "react-redux"
import { setFilterText } from "../store/slices/filterSlice"

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    dispatch(setFilterText(target.value))
  }

  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter
