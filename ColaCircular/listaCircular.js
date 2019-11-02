class Cola{
	constructor(){
		this._primero = null;
	}
	get primero(){return this._primero;}
	set primero(v){this._primero = v;}

	agregar(nuevo){
		if (this._primero) {
			var actual = this._primero;
			while(actual.sig != this._primero){
				actual = actual.sig;
			}
			actual.sig = nuevo;
		}else{
			this._primero = nuevo;
		}
		nuevo.sig = this._primero;
	}

	buscarAnterior(nombre){
		var actual = this._primero;
		do{
			if (actual.sig.nombre == nombre)
				return actual;
			else
				actual = actual.sig;
		}while(actual != this._primero);
		return null;
	}

	eliminar(nombre){
		var nodo = this.buscarAnterior(nombre);
		if (nodo) {
			if (nodo.sig == this._primero) {
				if (nodo == this._primero) {
					this._primero = null;
				}else{
					this._primero = nodo.sig.sig;
					nodo.sig = this._primero;
				}
			}else{
				nodo.sig = nodo.sig.sig;
			}
			return true;
		}else
			return null;
	}

	imprimir(){
		if (this._primero) {
			var s = '';
			var actual = this._primero;
			do{
				s += actual.nombre+':'+actual.ciclos+' ';
				actual = actual.sig;
			}while(actual != this.primero);
			console.log(s);
		}else
			return null;
	}

	ciclosTotales(){
		if (this._primero) {
			var suma = 0;
			var actual = this._primero;
			do{
				suma += actual.ciclos;
				actual = actual.sig;
			}while(actual != this.primero);
			return suma;
		}else
			return null;
	}

	long(){
		if (this._primero) {
			var count = 0;
			var actual = this._primero;
			do{
				count++;
				actual = actual.sig;
			}while(actual != this.primero);
			return count;
		}else
			return null;
	}
}