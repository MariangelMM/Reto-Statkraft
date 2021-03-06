import React from 'react';


const Third = ({ data, Third }) => {

    const { companyData } = data;
    const { moneys } = Third;

    if (Third !== "") {
        return (
            <section>
                <h3>TERCERA:         PRECIO</h3>
                <p>
                    3.1 Como contraprestación por la transferencia de propiedad de los Bienes,
                    <span>{companyData.name}</span> se obliga a pagar al <span>PROVEEDOR</span>,
                    en total, la suma de {moneys} más el Impuesto General a las Ventas, según el
                    detalle de precios que figura en el Anexo N° 2 del presente Contrato.
                </p>
                <p>
                    3.2 Los precios unitarios y/o globales que constan en el Anexo N° 2, los cuales
                    han dado como resultado el precio total del Contrato, son fijos, firmes y no
                    sujetos a reajustes. El <span>PROVEEDOR</span> no tendrá derecho a reclamar el
                    pago de ninguna suma adicional.
                </p>
                <p>
                    3.3 El <span>PROVEEDOR</span> declara expresamente, que para proponer todos los
                    precios e información entregadas en su Propuesta, tuvo en cuenta todas las
                    condiciones bajo las cuales se ejecutarán las prestaciones a su cargo y, por tanto,
                    en tales documentos incluyó todos los costos directos e indirectos, los imprevistos
                    y normales en este tipo de contratos y su propia utilidad. De acuerdo con lo anterior,
                    el <span>PROVEEDOR</span> renuncia a presentar cualquier reclamo por la información
                    y precios de la Propuesta antes descritos.
                </p>
                <p>
                    3.4  En consecuencia, el <span>PROVEEDOR</span> declara que los precios pactados son
                    los que legítimamente corresponden por los Bienes y que existe la más justa y perfecta
                    equivalencia; y que si hubiese alguna diferencia de más o de menos, valor que en la
                    fecha no advierte, hace expresa donación de ella, renunciando a todo medio, acción o
                    recurso que pudiera interponerse con el fin de invalidar o alterar los efectos legales
                    del presente Contrato, así como a los plazos para invocarlo; pues declara que en su
                    celebración no ha mediado vicio alguno que limite la libre expresión de voluntad.
                </p>
                <p>
                    3.5 Las partes acuerdan que en caso sea necesaria la adquisición de bienes adicionales
                    estos se facturarán de acuerdo a lo señalado en el Anexo N° 2, para ello <span>{companyData.name}</span>
                    deberá enviar al <span>LOCADOR</span> una Orden de Variación de acuerdo al formato y
                    condiciones señaladas en el Anexo N° 3.
                </p>
            </section>
        )
    }
    return (
        <div>
            <p>Seccion Precio</p>
        </div>
    )
}
    ;


export default Third;
