//Utilizamos propiedades, setters, getters, metodos, instanceamiento e inherencia para
//crear un catalogo de escuelas que el usuario desee para sus hijos mientras los admins
//pueden agregar o modificar escuelas mediante la clase 'escuela

class Escuela {

    constructor(nombre, nivel, numeroDeEstudiantes) {
      this._nombre = nombre;
      this._nivel = nivel;
      this._numeroDeEstudiantes = numeroDeEstudiantes;
    }
  
    get nombre() {
      return this._nombre;
      
    }
  
    get nivel(){
      return this._nivel;
    }
  
    get numeroDeEstudiantes(){
      return this._numeroDeEstudiantes;
    }
  
    set numeroDeEstudiantes(value) {
      if(valor.isNaN()) {
        console.log('Valor invalido. Debe ser un numero');
      } else {
        this._numeroDeEstudiantes = value;
      }
    }
  
    quickFacts() {
      console.log(`La escuela ${this.nombre} tiene ${this.numeroDeEstudiantes} alumnos en el nivel ${this.nivel}.`);
    }
  
    static escogerMaestro(substituteTeachers) {
      const randInt = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randInt];
    }
  }
  
  class Primaria extends Escuela { constructor (nombre, numeroDeEstudiantes, pickupPolicy) {
      super(nombre, 'primaria', numeroDeEstudiantes);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      this._pickupPolicy;
    }
  
  } 
  
  class Preparatoria extends Escuela {
    constructor(nombre, numeroDeEstudiantes,equiposDeDeportes) {
      super (nombre, 'prepa', numeroDeEstudiantes);
      this._equiposDeDeportes = equiposDeDeportes;
    }
  
    get equiposDeDeportes(){
      return this._equiposDeDeportes;
    }
  }
  
  const walterRiedel = new Primaria('Walter Riedel', 513, 'Los alumnos deben de ser recogidos por los padres de familia o un familiar cercano mayor de 18 anios');
  
  
  walterRiedel.quickFacts();
  
  const sub = Escuela.escogerMaestro(['Efrain Lopez', 'Jaime Regil', 'Julieta Rios', 'Edgar Loaiza', 'Mirna Rodriguez', 'Luis Vazquez']);
  
  const lazaroCardenas = new Preparatoria('Lazaro Cardenas', 415, ['Futbol', 'Basketball', 'Volleybol', 'Tennis']);
  
  console.log(lazaroCardenas.equiposDeDeportes);