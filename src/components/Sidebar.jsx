import React, { useState, useEffect } from 'react'
import logo1 from '/img/female.svg'
import logo from '/img/male.svg'
import useFiltros from '../hook/useFiltros'
function Sidebar() {

    const { categoria, setCategoria } = useFiltros()

    useEffect(() => {
        //Sellecionar checkbox

        document.getElementById('male').checked = false
        document.getElementById('female').checked = false;
        document.getElementById('alive').checked = false;
        document.getElementById('dead').checked = false;
        document.getElementById(categoria.gender).checked = true
        document.getElementById(categoria.status).checked = true;

    }, [categoria])

    return (
        <aside className='sidebar'>
            <h3>Filters</h3>

            <h4 className='ch'>Characters</h4>


            <div className='filtro'>

                {/* Alive */}

                <div className="filtro-flex" >

                    <input className='cuadro' type="checkbox" id="alive" value="alive" name='status'
                        onChange={e => setCategoria({ ...categoria, [e.target.name]: e.target.value })

                        }

                    />
                    <label className='label'>Alive</label>
                    <div className="circulo circulo-green"></div>
                </div>

                {/* DEAD */}
                <div className="filtro-flex">

                    <input className='cuadro' type="checkbox" id="dead" value="dead" name='status'
                        onChange={e => setCategoria({ ...categoria, [e.target.name]: e.target.value })} />
                    <label className='label'


                    >Dead</label>
                    <div className="circulo circulo-red"></div>

                </div>
                {/* male  */}

                <div className="filtro-flex">


                    <input className='cuadro' type="checkbox" id="male" value="male" name='gender'
                        onChange={e => setCategoria({ ...categoria, [e.target.name]: e.target.value })}
                    />

                    <label className='label'>Male</label>
                    
                    <img src={logo} alt="logof" />
                </div>

                {/* famele  */}

                <div className="filtro-flex">
                    <input className='cuadro' type="checkbox" id="female" value="female" name='gender'
                        onChange={e => setCategoria({ ...categoria, [e.target.name]: e.target.value })}
                    />
                    <label className='label'>Fema</label>
                    <img src={logo1} alt="logof" />
                </div>

            </div>


        </aside>
    )
}

export default Sidebar