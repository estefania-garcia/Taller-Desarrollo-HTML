export class Serie {
    constructor(id, tituloOriginal, anioEstreno, anioFinalizacion, paisOrigen, idiomaOriginal, numeroEpisodios, numeroTemporadas, sinopsis, clasificacionEdad, estadoProduccion, valoracionCritica, genero, subGenero, target, formato, caratulaSerie, premios = [], tematicas = [], traducciones = []) {
        this._id = id;
        this._tituloOrignal = tituloOriginal;
        this._anioEstreno = new Date(anioEstreno);
        this._anioFinalizacion = new Date(anioFinalizacion);
        this._paisOrigen = paisOrigen;
        this._idiomaOriginal = idiomaOriginal;
        this._numeroEpisodios = numeroEpisodios;
        this._numeroTemporadas = numeroTemporadas;
        this._sinopsis = sinopsis;
        this._clasificacionEdad = clasificacionEdad;
        this._estadoProduccion = estadoProduccion;
        this._valoracionCritica = this.validarValoracion(valoracionCritica);
        this._genero = genero;
        this._subGenero = subGenero;
        this._target = target;
        this._formato = formato;
        this._caratulaSerie = caratulaSerie;
        this._premios = premios;
        this._tematicas = tematicas;
        this._traducciones = traducciones;
    }
    // Getters
    get id() { return this._id; }
    get tituloOriginal() { return this._tituloOrignal; }
    get anioEstreno() { return this._anioEstreno; }
    get anioFinalizacion() { return this._anioFinalizacion; }
    get paisOrigen() { return this._paisOrigen; }
    get idiomaOriginal() { return this._idiomaOriginal; }
    get numeroEpisodios() { return this._numeroEpisodios; }
    get numeroTemporadas() { return this._numeroTemporadas; }
    get sinopsis() { return this._sinopsis; }
    get clasificacionEdad() { return this._clasificacionEdad; }
    get estadoProduccion() { return this._estadoProduccion; }
    get valoracionCritica() { return this._valoracionCritica; }
    get genero() { return this._genero; }
    get subGenero() { return this._subGenero; }
    get target() { return this._target; }
    get formato() { return this._formato; }
    get caratulaSerie() { return this._caratulaSerie; }
    get premios() { return [...this._premios]; }
    get tematicas() { return [...this._tematicas]; }
    get traducciones() { return [...this._traducciones]; }
    // Setters (simplificados)
    set valoracionCritica(valoracion) { this._valoracionCritica = this.validarValoracion(valoracion); }
    set estadoProduccion(estado) { this._estadoProduccion = estado; }
    validarValoracion(valoracion) {
        return Math.max(0, Math.min(10, valoracion));
    }
    toString() {
        const anioFin = this._anioFinalizacion.getFullYear() === 9999 ? 'En curso' : this._anioFinalizacion.getFullYear();
        return `
            ID: ${this._id}
            ${this._tituloOrignal}
            ${this._anioEstreno.getFullYear()} - ${anioFin}
            ${this._paisOrigen} | ${this._idiomaOriginal}
            ${this._numeroTemporadas}T | ${this._numeroEpisodios}E
            ${this._genero} / ${this._subGenero}
            Target: ${this._target} | Formato: ${this._formato}
            Valoración: ${this._valoracionCritica}/10
            Estado: ${this._estadoProduccion}
            Edad: ${this._clasificacionEdad}
            Premios: ${this._premios.length}
            Temáticas: ${this._tematicas.join(', ')}
            Traducciones: ${this._traducciones.length}
        `;
    }
    sinopsisCorta(maxLength = 100) {
        return this._sinopsis.length > maxLength
            ? this._sinopsis.substring(0, maxLength) + '...'
            : this._sinopsis;
    }
}
