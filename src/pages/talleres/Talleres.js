import React from 'react'
import FiltrosTalleres from './components/FiltrosTalleres'
import TablaTalleres from './components/TablaTalleres'
import './styles.css'

const Talleres = () => {
    return (
        <>
            <div className='mt-4'>
                <span className="title-talleres">Mis seguros - Mis talleres</span>
                <div className="card p-4">
                    <div>
                        <FiltrosTalleres></FiltrosTalleres>
                        <TablaTalleres></TablaTalleres>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Talleres