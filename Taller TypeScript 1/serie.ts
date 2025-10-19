export class Serie {
    private _id: number;
    private _tituloOrignal: string;
    private _anioEstreno: Date;
    private _anioFinalizacion: Date;
    private _paisOrigen: string;
    private _idiomaOriginal: string;
    private _numeroEpisodios: number;
    private _numeroTemporadas: number;
    private _sinopsis: string;
    private _clasificacionEdad: string;
    private _estadoProduccion: 'En emisión' | 'Finalizada' | 'Cancelada';
    private _valoracionCritica: number;
    private _genero: string;
    private _subGenero: string;
    private _target: string;
    private _formato: string;
    private _caratulaSerie: string;
    private _premios: string[];
    private _tematicas: string[];
    private _traducciones: string[];

    constructor(
        id: number,
        tituloOriginal: string,
        anioEstreno: string,
        anioFinalizacion: string,
        paisOrigen: string,
        idiomaOriginal: string,
        numeroEpisodios: number,
        numeroTemporadas: number,
        sinopsis: string,
        clasificacionEdad: string,
        estadoProduccion: 'En emisión' | 'Finalizada' | 'Cancelada',
        valoracionCritica: number,
        genero: string,
        subGenero: string,
        target: string,
        formato: string,
        caratulaSerie: string,
        premios: string[] = [],
        tematicas: string[] = [],
        traducciones: string[] = []
    ) {
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
    get id(): number { return this._id; }
    get tituloOriginal(): string { return this._tituloOrignal; }
    get anioEstreno(): Date { return this._anioEstreno; }
    get anioFinalizacion(): Date { return this._anioFinalizacion; }
    get paisOrigen(): string { return this._paisOrigen; }
    get idiomaOriginal(): string { return this._idiomaOriginal; }
    get numeroEpisodios(): number { return this._numeroEpisodios; }
    get numeroTemporadas(): number { return this._numeroTemporadas; }
    get sinopsis(): string { return this._sinopsis; }
    get clasificacionEdad(): string { return this._clasificacionEdad; }
    get estadoProduccion(): string { return this._estadoProduccion; }
    get valoracionCritica(): number { return this._valoracionCritica; }
    get genero(): string { return this._genero; }
    get subGenero(): string { return this._subGenero; }
    get target(): string { return this._target; }
    get formato(): string { return this._formato; }
    get caratulaSerie(): string { return this._caratulaSerie; }
    get premios(): string[] { return [...this._premios]; }
    get tematicas(): string[] { return [...this._tematicas]; }
    get traducciones(): string[] { return [...this._traducciones]; }

    // Setters (simplificados)
    set valoracionCritica(valoracion: number) { this._valoracionCritica = this.validarValoracion(valoracion); }
    set estadoProduccion(estado: 'En emisión' | 'Finalizada' | 'Cancelada') { this._estadoProduccion = estado; }

    private validarValoracion(valoracion: number): number {
        return Math.max(0, Math.min(10, valoracion));
    }

    public toString(): string {
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

    public sinopsisCorta(maxLength: number = 100): string {
        return this._sinopsis.length > maxLength 
            ? this._sinopsis.substring(0, maxLength) + '...' 
            : this._sinopsis;
    }
}