function semaforo (para){
  this.sema = para
  this.cambiar = function(){
      if(this.sema == "rojo"){
          this.sema ="verde"
      }else if(this.sema =="verde"){
          this.sema = "amarillo"
      }else{
          this.sema = "rojo"
      }
      console.log(`${this.sema}`);
  }
}
let semaforo1 = new semaforo("rojo")
semaforo1.cambiar()
semaforo1.cambiar()
semaforo1.cambiar()
semaforo1.cambiar()
semaforo1.cambiar()
semaforo1.cambiar()
semaforo1.cambiar()