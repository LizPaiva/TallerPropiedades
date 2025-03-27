
function Lista (){
    this.producto = [];
    this.agregar = function(producto){
       this.producto.push(producto)
    }
    this.mostar = function(){
        for(let i=0;i<this.producto.length;i++){
            console.log(`${this.producto[i]} ${i+1}`)
        }
    }
}
let compra1 = new Lista()
let compra2 = new Lista()
compra1.agregar("Yuca")
compra1.agregar("Arroz")
compra1.agregar("Azucar")
console.log(compra1.producto);
compra1.mostar()




