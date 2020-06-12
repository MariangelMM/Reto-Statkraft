import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import '../../style/chosecontracts.css';
import img from '../../img/Frame1.png';

const ContrractsGoods = (props) => {


    // localStorage.setItem('Tipo', JSON.stringify(typeContracts));


    // console.log('contrato selecionado', props.location.goods)
    if (props.location.goods === 'si') {
        // setType('Compra Venta e Instalacion')
        return (
            <div>
                <Header />
                <div className="container">
                    <div className=" col-sm-10 justify-content-center ">
                        <div>
                            <h5 className="m-3">El contrato que debes utilizar es:</h5>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            <div className="borde fondo col-sm-5">
                                <div className="row mt-3 mb-4 ml-3">
                                    <h4 className=" col-sm-6">Contrato de Compraventa e Instalación</h4>
                                    <img src="https://img.icons8.com/ios/100/000000/sell-property--v1.png" className=" col-sm-6 card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="m-5 d-flex justify-content-end">
                            <Link className="col-sm-3  btn btn-primary"
                                to={{
                                    pathname: "/optioncompany",
                                }}>Siguiente</Link>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
    if (props.location.goods === 'no') {
        // setType('Compra Venta')
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="col-sm-10">
                        <div>
                            <h5 className="m-3">El contrato que debes utilizar es:</h5>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            <div className="borde fondo col-sm-5">
                                <div className="row mt-5 mb-4 ml-5">
                                    <h4 className=" col-sm-6">Contrato de Compraventa</h4>
                                    <img src="https://img.icons8.com/ios/100/000000/home-automation.png" className=" col-sm-6 card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="m-5 d-flex justify-content-end">
                            <Link className="col-sm-3  btn btn-primary"
                                to={{
                                    pathname: "/optioncompany",
                                }}>Siguiente</Link>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
    return (
        <div>
            <Header />
            <div className="container">
                <div className="col-sm-10">
                    <br />
                    <div className="d-flex justify-content-center">
                        <div className="borde fondo mt-5 col-sm-5">
                            <div className="row justify-content-center p-4">
                                <h4 className="text-center col-sm-6">Regresar a Inicio</h4>
                                <img src={img} className="card-img-top" alt="..." />

                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="m-5 d-flex justify-content-center">
                        <Link className="col-sm-3  btn btn-primary"
                            to={{
                                pathname: "/",
                            }}>Inicio</Link>

                    </div>
                </div>
            </div>
        </div >

    )
}

export default ContrractsGoods;

