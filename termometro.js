let termometro = function(grados){
    this.actualizar = function(){
        if(grados>=30){
            console.log("¡Hace calor!: " +grados)
        }else if(grados<=10){
            console.log("¡Hace frío!: "+grados)
        }else{
            console.log("Temperatura agradable: " + grados)
        } 
    }
}

temp1 = new termometro (5)
temp2 = new termometro (35)
temp3 = new termometro (20)
temp1.actualizar()
temp2.actualizar()
temp3.actualizar()