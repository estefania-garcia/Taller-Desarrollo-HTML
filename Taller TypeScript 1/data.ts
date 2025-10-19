import { Serie } from './serie'; // Sin .ts, usa la ruta relativa sin extensión

export const seriesData: Serie[] = [
    new Serie(1, "Breaking Bad", "2008", "2013", "EEUU", "Inglés", 62, 5, 
        "Un profesor de química diagnosticado con cáncer...", "TV-14", "Finalizada", 9.5, 
        "Drama", "Thriller", "Adultos", "Live Action", "img/breakingbad.jpg", 
        ["Emmy", "Golden Globe"], ["Adicción", "Familia"], ["Español", "Francés"]),
    new Serie(2, "The Office", "2005", "2013", "EEUU", "Inglés", 201, 9, 
        "La vida diaria de empleados en una oficina de papel...", "TV-14", "Finalizada", 9.0, 
        "Comedia", "Workplace", "Todos", "Live Action", "img/theoffice.jpg"),
    new Serie(3, "Stranger Things", "2016", "9999", "EEUU", "Inglés", 34, 4, 
        "Niños descubren eventos sobrenaturales...", "TV-14", "En emisión", 8.7, 
        "Ciencia Ficción", "Horror", "Jóvenes", "Live Action", "img/strangerthings.jpg")
];

// Lógica de renderizado
function renderTabla() {
    const tbody = document.querySelector('.tabla tbody');
    if (!tbody) return;

    tbody.innerHTML = '';

    seriesData.forEach(serie => {
        const anioFin = serie.anioFinalizacion.getFullYear() === 9999 ? 'En curso' : serie.anioFinalizacion.getFullYear();
        const row = `
            <tr>
                <th>${serie.id}</th>
                <td>${serie.tituloOriginal}</td>
                <td>${serie.anioEstreno.getFullYear()} - ${anioFin}</td>
                <td>${serie.genero}</td>
                <td>${serie.numeroTemporadas}T / ${serie.numeroEpisodios}E</td>
                <td><span class="badge bg-success">${serie.estadoProduccion}</span></td>
                <td><img src="${serie.caratulaSerie}" width="40" onerror="this.src='https://via.placeholder.com/40'"></td>
                <td>${serie.valoracionCritica}/10</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

document.addEventListener('DOMContentLoaded', renderTabla);