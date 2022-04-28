import React from 'react'

const FiltrosTalleres = () => {
    return (
        <>
            <div className='container-filtros'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                        <div class="form-group row">
                                <label for="vehiculo" class="col-sm-2 col-form-label">Vehiculo:</label>
                                <div class="col-sm-10">
                                    <select name="vehiculo" id="vehiculo" className='form-control'>
                                        <option value="1">Value</option>
                                        <option value="2">Value2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-small btn-secondary">
                                Ver Deductibles
                            </button>
                        </div>
                        <div className="col-md-6">
                            <div class="form-group row">
                                <label for="distrito" class="col-sm-3 col-form-label">Distrito:</label>
                                <div class="col-sm-9">
                                    <select name="distrito" id="distrito" className='form-control'>
                                        <option value="1">Value</option>
                                        <option value="2">Value2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div class="form-group row">
                                <label for="tipo_taller" class="col-sm-3 col-form-label">Tipo Taller:</label>
                                <div class="col-sm-9">
                                    <select name="tipo_taller" id="tipo_taller" className='form-control'>
                                        <option value="1">Value</option>
                                        <option value="2">Value2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FiltrosTalleres