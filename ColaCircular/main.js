var cola = new Cola();
var n = 1;
var completados = 0;
var vacio = 0;
var actual;

for (var i = 0; i < 300; i++) {
	if (Math.trunc(Math.random()*100+1) <= 39) {
		cola.agregar(new Proceso("p"+n));
		if (n == 1) {
			actual = cola.primero;
		}
		n++;
	}

	if (cola.primero) {
		actual.ciclos--;
		if (actual.ciclos == 0) {
			cola.eliminar(actual.nombre);
			completados++;
		}
		actual = actual.sig;
	}else{
		vacio++;
	}

	cola.imprimir();
}

console.log('Ciclos sin cola: ' + vacio);
console.log('Completados: ' + completados);
console.log('Pendientes: ' + cola.long());
console.log('Ciclos pendientes totales: ' + cola.ciclosTotales())