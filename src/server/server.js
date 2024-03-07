const express = require( 'express' );
const path = require('path')

const startServer = (options)=>{
    const{port,public_path = path}= options;

    const app = express()
//para usar los middlewares
//para tener disponible la informacion estatitica en public
    app.use(express.static(public_path))
// pedido y respuesta
    app.get('*',(req,res)=>{
        const indexPath = path.join(__dirname +`../../../${public_path}/index.html` )
        res.sendFile(indexPath)  //le pasamos el archivo que queremos
    })

    // abrir puerto
    app.listen(port,()=>{
        console.log(`Escuchando en el  puerto ${port}`);
    })


}
module.exports = {
    startServer
}