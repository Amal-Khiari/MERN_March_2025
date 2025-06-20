import React, {useContext} from 'react'
import { MyContext } from '../storContext'

const Edite = () => {
    const {setTitle} = useContext(MyContext)
        setTitle(" Edite Your Notes ")
  return (
    <div>edite</div>
  )
}

export default Edite