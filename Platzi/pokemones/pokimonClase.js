class Pakiman{
    constructor(n, v, a){
        this.imagen = new Image()
        this.nombre = n
        this.vida = v
        this.ataque = a 
        this.tipo = 'tierra'

        this.imagen.src = imagenes[this.nombre]
    }
    hablar(){
        alert(this.nombre)
    }
    mostrar(){
        document.body.appendChild(this.imagen)
        document.write('<br> <strong>' + this.nombre + '</strong><br>')
        document.write('<br>Vida: ' + this.vida + '<br>')
        document.write('Ataque: ' + this.ataque + '<hr>')
    }
}

