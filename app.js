const exprees=require('express');
const app=exprees();
const port=4001;


app.get('getProductosnode',allProducts);

app.listen(port,()=>{
    console.log("escuchando por el puerto "+port)
})
