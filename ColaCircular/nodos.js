class Proceso{
	constructor(n){
		this._nombre = n;
		this._ciclos = Math.trunc(Math.random()*11+4);
		this._sig = null;
	}
	get nombre(){return this._nombre;}
	get ciclos(){return this._ciclos}
	get sig(){return this._sig;}
	set ciclos(v){this._ciclos = v;}
	set sig(v){this._sig = v;}
}