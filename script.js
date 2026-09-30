let menuVisible = false;

// Función que oculta o muestra el menu (responsivo)
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

function seleccionar() {
    document.getElementById("nav").classList.remove("active");
    menuVisible = false;
}

// Función que aplica las animaciones de las barras de horario (Técnicos)
function efectoHabilidades() {
    var skills = document.getElementById("personal");
    if(skills) {
        var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if (distancia_skills >= 300) {
            let habilidades = document.getElementsByClassName("progreso");
            for (let i = 0; i < habilidades.length; i++) {
                const porcentaje = habilidades[i].dataset.width;
                if (porcentaje) {
                    habilidades[i].style.width = porcentaje + "%";
                }
            }
        }
    }
}

// Evento Scroll
window.onscroll = function() {
    efectoHabilidades();
}

// Lógica que requiere que el DOM esté cargado (Comparador de Precios y Acordeón)
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Lógica del Comparador de Inversión ---
    const priceCards = document.querySelectorAll('.price-card');
    const displayPrice = document.getElementById('display-price');
    const displaySavings = document.getElementById('display-savings');

    const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    });

    // Evitamos errores si los elementos no existen en la página
    if(displayPrice && displaySavings) {
        displayPrice.style.transition = "opacity 0.2s ease";
        displaySavings.style.transition = "opacity 0.2s ease";
    }

    priceCards.forEach(card => {
        card.addEventListener('click', () => {
            priceCards.forEach(c => c.classList.remove('active-price'));
            card.classList.add('active-price');

            const price = parseFloat(card.getAttribute('data-price'));
            const discount = parseFloat(card.getAttribute('data-discount'));

            displayPrice.style.opacity = 0;
            displaySavings.style.opacity = 0;

            setTimeout(() => {
                displayPrice.textContent = formatter.format(price) + ' MXN';
                displaySavings.textContent = discount > 0 ? formatter.format(discount) + ' MXN' : '$0.00 MXN';
                
                displayPrice.style.opacity = 1;
                displaySavings.style.opacity = 1;
            }, 150);
        });
    });

    // --- 2. Lógica del Acordeón de Inventario ---
    const acordeones = document.querySelectorAll(".acordeon-cabecera");

    acordeones.forEach(acordeon => {
        acordeon.addEventListener("click", function() {
            // Alternar clase activa para girar la flecha
            this.classList.toggle("activa");

            // Obtener el div de contenido asociado
            const contenido = this.nextElementSibling;

            // Animación de abrir/cerrar
            if (contenido.style.maxHeight) {
                contenido.style.maxHeight = null;
            } else {
                contenido.style.maxHeight = contenido.scrollHeight + "px";
            }
        });
    });

}); // <-- Aquí cerramos correctamente el DOMContentLoaded

// Función para abrir PDFs desde las tarjetas sin disparar la selección de la propuesta
function abrirPDF(event, rutaArchivo) {
    // Detiene la propagación del clic para que no seleccione la tarjeta de fondo
    event.stopPropagation();
    
    // Abre el PDF en una pestaña nueva
    window.open(rutaArchivo, '_blank');
}

// Datos reales extraídos de las hojas de Excel de Toyota (Central: 91, Prensas: 51, Ensamble: 73)
const datosCalendarioComedores = {
    central: [
        { id: 1, equipo: "Bascula de Plataforma Torrey, Modelo: EQM-400/800, Serie: L21-004255", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 2, equipo: "Bascula Gramera 1, Modelo: S/M, Serie: AAR7.8675-1499", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 3, equipo: "Bascula Gramera 2, Modelo: S/M, Serie: BAR7-9675-1125", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 4, equipo: "Bascula Gramera 3, Modelo: S/M, Serle: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 5, equipo: "Batidora Hobart, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 6, equipo: "Baul Refrigerado 1 Traulsen Modelo: UPT4818-LR, Serie:T48346L18", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 7, equipo: "Cafetera Simonelli Dely, Modelo:AURELIA, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 8, equipo: "Calentador de Agua a Gas Calorex, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 9, equipo: "Conservador Termico 1, Modelo: PS-1220-15, Serie: 196100804", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 10, equipo: "Conservador Termico 3, Modelo: PS-1220-17, Serie: 196100802", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 11, equipo: "Cubicadora Monitowoc, Modelo: IDT1200A-261, Serie: 1120843853", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 12, equipo: "Estufa Vulcan S/M, Modelo:S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 13, equipo: "Estufon Coritat 6 Quemadores, Modelo:S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 14, equipo: "Extractor de Jugo 1 International, Modelo: S/M Serle: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 15, equipo: "Extractor de Jugo 2 International, Modelo: S/M Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 16, equipo: "Freidora Frymaster dos tinas, Modelo: FPPH255SC Serie: 1901ID0037", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 17, equipo: "Horno de Microondas 1 Menu Master, Modelo: MMS10TS, Serie: 19081312", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 18, equipo: "Horno de Microondas 2 Menu Master, Modelo: MMS10TS, Serie: 19034000", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 19, equipo: "Horno de Microondas 3 Menu Master, Modelo: MMS10TS, Serie: 19071312", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 20, equipo: "Horno de Microondas 4 Migsa, Modelo: MC12D, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 21, equipo: "Horno de Microondas 5 Sharp, Modelo: R-21LVF, Serie: 105130", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 22, equipo: "Horno de Microondas 6 Amana, Modelo: RMS10TS, Serie: 1808402567", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 23, equipo: "Horno de Microondas 7 Amana, Modelo: RMS10TS, Serie: 1808402704", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 24, equipo: "Horno de Microondas 8 Amana, Modelo: RMS10TS, Serie: 1808402643", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 25, equipo: "Horno Rational 1 Gas Natural Modelo: SCCWE101G, Serie: E21SH210726", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 26, equipo: "Horno Rational 2 Gas Natural, Modelo: SCCWE102G, Serie: G12SI1905274", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 27, equipo: "Horno Unox Modelo: XESW-03HS-MDDS, Serie: 2021C0016961", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 28, equipo: "Lava Loza Hobart, Modelo: CLPS86EN, Serie: 85-1105768", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 29, equipo: "Lava Manos 1, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 30, equipo: "Lava Manos 2, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 31, equipo: "Lava Manos 3, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 32, equipo: "Lava Manos 4, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 33, equipo: "Lava Manos 5, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 34, equipo: "Lava Manos 6, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 35, equipo: "Licuadora 1 Internacional, Modelo:S/M, Serle: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 36, equipo: "Licuadora 2 Internacional, Modelo:S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 37, equipo: "Licuadora Blendtec, Modelo: ICB5CONNOISSEUR825, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 38, equipo: "Linea de Servicio 1 Caliente Gas natural Modelo: S/M, Serie:S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 39, equipo: "Linea de Servicio 1 refrigerada Modelo: S/M, Serie:S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 40, equipo: "Linea de Servicio 2 Caliente Gas natura Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 41, equipo: "Linea de Servicio 2 refrigerada Modelo: S/M, Serie:S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 42, equipo: "Linea de Servicio 3 Caliente Gas natural Modelo: S/M, Serle: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 43, equipo: "Linea de Servidio 3 refrigerada Modelo: S/M, Serie:S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 44, equipo: "Maquina de agua Crathco 1, Modelo:CS-3L-16, Serie: T476363", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 45, equipo: "Maquina de agua Crathco 2, Modelo:CS-3L-16, Serie: T4764407", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 46, equipo: "Maquina de agua Crathco 3, Modelo:CS-3L-16, Serie: T476361", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 47, equipo: "Maquina de agua Crathco 4, Modelo:CS-3L-16, Serie: T476370", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 48, equipo: "Maquina de Hielo Monitowoc, Modelo: 1DT1200A-261 Serie: 1120843853", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 49, equipo: "Marmita 1 Inter MGV40, Modelo: 9191.41 Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 50, equipo: "Marmita 2 Inter MGV.40, Modelo: 9191.5 Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 51, equipo: "Marmita 3 Inter MGV40, Modelo: 9191.3 Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 52, equipo: "Mesa Fria 1 Traulsen Dely Modelo: UHT48-LR, Serie:T446210K18", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 53, equipo: "Mesa Fria 2 Traulsen Linea Modelo: UPT4818-LR , Serie: T48346L18", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 54, equipo: "Modulo de Extraccion Secci Estufones, Modelo:S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 55, equipo: "Modulo de Extraccion Secdi Planchas, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 56, equipo: "Molino de Café, Modelo: MDXS OD, Serie: NS1012142569083", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 57, equipo: "Mostrador exhibidor de productos Dely, Modelo: S/M Serie: S/S", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 58, equipo: "Pela Papas Hobart, Modelo:S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 59, equipo: "Plancha 1 Vulcano, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 60, equipo: "Plancha 2 Vulcano, Modelo: S/M Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 61, equipo: "Plancha 3 Vulcano, Modelo: S/M Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 62, equipo: "Plancha 4 Vulcano, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 63, equipo: "Plancha Para Tortas Migsa, Modelo: PS-1220-15, Serie: 196100803", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 64, equipo: "Procesador de Alimentos Migsa, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 65, equipo: "Procesador de Alimertos Hobar, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 66, equipo: "Refrigerador 1 Trausen Abatidor de Tem, Modelo: TBC13 Serie: 49333L18", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 67, equipo: "Refrigerador 2 Trausen, Modelo: G10010, Serie: T49058L18", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 68, equipo: "Refrigerador 3 Trausen, Modelo: G12010, Serie: T48847L18", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 69, equipo: "Refrigerador 4 Trausen, Modelo: G10010, Serie: T49066L18", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 70, equipo: "Refrigerador 5 Trausen, Modelo: G10010, Serie: T49193L18", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 71, equipo: "Refrigerador 6 Trausen, Modelo: G10011, Serie: T49194L18", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 72, equipo: "Refrigerador 7 Trausen, Modelo: G20010, Serie: T48891L18", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 73, equipo: "Refrigerador tipo Baul 1, Modelo: UPT4818-LR, Serie: T48343L18", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 74, equipo: "Refrigerador tipo Baul 2, Modelo: UH172-LR, Serie: T34671H18", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 75, equipo: "Refrigerador tipo Baul 3, Modelo: UHT72-LR, Serie: T30719G18", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 76, equipo: "Refrigerador tipo Baul 4, Modelo: UHT72-LR, Serie: T43921K18", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 77, equipo: "Refrigerador tipo Baul 5, Modelo: UH172-LR, Serie: T22323E18", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 78, equipo: "Sarteneta 1 Inter, Modelo: SG-4 Serie: 9191.2", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 79, equipo: "Sarteneta 2 Inter, Modelo: SG-4 Serie: 9191.1", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 80, equipo: "Tarja 1 dos Tinas una Mescladora, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 81, equipo: "Tarja 2 dos Tinas una Mescladora, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 82, equipo: "Tarja 3 tinas 2 Mescladoras, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 83, equipo: "Tarja de Almacen tres Mezclado, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 84, equipo: "Tarja de Quimicos, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 85, equipo: "Tarja Deli una Mescladora, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 86, equipo: "Tarja dos Tinas Tres Mescladoras, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 87, equipo: "Tarja una tina una mescladora, Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 88, equipo: "Tren de arrastre Lava Loza, Modelo: S/M, Serie: 1213603", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 89, equipo: "Turbo Licuador 1 Dynamic, Modelo:S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 90, equipo: "Turbo Licuador 2 Torrey, Modelo:S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 91, equipo: "Vitrina Refrigerada Federal Dely Modelo: S/M, Serie: S/N", ubicacion: "COMEDOR CENTRAL", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] }
    ],
    prensas: [
        { id: 1, equipo: "Bano Maria Migsa, Modelo: ZCK165AT-3, Serie: 20-HL6008-132", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 2, equipo: "Bascula Gramera Rhino, Modelo: DGN.312.02.2016.2334, Serie: BAR7-9675-1128", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 3, equipo: "Baul Refrigrado Dely Asber, Modelo: AUTR48NHC Serie: 8102544019", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 4, equipo: "Bomba de vacio empaque comedor, Modelo: XUC135, Serie: 25568", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 5, equipo: "Cafetera Ascaso, Modelo: 4623", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 6, equipo: "Cafetera BUNN, Modelo: ICB TWIN SH, 120/240 V SST, Serie: ICBT067403", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 7, equipo: "Cafetera Caffenio, Modelo: ESV3R, Serie: MEX 94911950", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 8, equipo: "Calentador Electrico 1 Rheem, Modelo: XE30P06PU38M, Serie: Q452032980", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 9, equipo: "Calentador Electrico 2 Rheem, Modelo: XE30P06PU38M, Serie: Q42205874", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 10, equipo: "Consevador Termico 1 Unox, Modelo: XEEC-1011-EPR, Serie: 2021L010773", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 11, equipo: "Consevador Termico 2 Unox, Modelo: XEEC-1011-EPR, Serie: 20201005616", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 12, equipo: "Cubicadora Monitowoc, Modelo: IRT0500A-161, Serie: 1120874841", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 13, equipo: "Estufon Electrico 1 Coriat 220v, Modelo: S/N, Serie: S/N", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 14, equipo: "Gratinadora HATCO 1, Modelo: GRAH-48 Serie: 9388492204", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 15, equipo: "Gratinadora HATCO 2, Modelo: GRAH-48 Serie: 9870672219", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 16, equipo: "Gratinadora HATCO 3, Modelo: GRAH-48 Serie: 9870682219", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 17, equipo: "Gratinadora HATCO 4, Modelo: GRAH-48 Serie: 9870662219", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 18, equipo: "Gratinadora HATCO 5, Modelo: GRAH-48 Serie: 9388482204", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 19, equipo: "Gratinadora HATCO 6, Modelo: GRAH-48, Serie: 9388472204", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 20, equipo: "Horno Rational Electrico Mod.LM200DE.XXXXX Serie:E11MJ211229940312", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 21, equipo: "Horno Unox Dely Modelo: XESW-03HS-EDDS Serie: 26749", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 22, equipo: "Lava Loza Electrica Asber, Modelo: EASY-120ICW, Serie: 8102454858", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 23, equipo: "Lava Manos rodilla 1, Modelo:S/M, Serie: S/S.", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 24, equipo: "Lava Manos rodilla 2, Modelo:S/M, Serie: S/S", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 25, equipo: "Linea de Servicio Electrica 1 resistiva 220V, Modelo: S/N, Serie: S/N", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 26, equipo: "Linea de Servicio Electrica 2 resistiva 220V, Modelo: S/N, Serie: S/N", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 27, equipo: "Linea de Servicio Electrica 3 resistiva 220V, Modelo: S/N, Serie: S/N", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 28, equipo: "Maquina de Agua 1 Crathco, Modelo: Mod.D35-4, Serie: T538048", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 29, equipo: "Maquina de Agua 2 Crathco, Modelo: Mod.D35-4, Serie: T538050", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 30, equipo: "Maquina de Agua 3 Crathco, Modelo: Mod.D35-4, Serie: T538049", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 31, equipo: "Maquina de Hielo Monitowoc, Modelo: IRT0500A-161, Serie: 1120874841", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 32, equipo: "Mesa Fria refrigerada Dely Asber, Modelo: APTS27 Serie: 8102563433", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 33, equipo: "Mural Refrigerado Electrico 1, Modelo: EUROGEL, Serie: EEURG20082022", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 34, equipo: "Mural Refrigerado Electrico 2, Modelo:EUROGEL, Serie: EEURG19082022", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 35, equipo: "Mural Refrigerado Electrico 3 Marca: EUROGEL, Serie: EEURG18082022", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 36, equipo: "Plancha de Tortas Dely Single Panini Grill, Modelo: GH-811E, Serie: 21204", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 37, equipo: "Refrigerador 1 Asber comensales, Modelo: ARR23H, Serie: 8102142754", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 38, equipo: "Refrigerador Baul 1 Ptas Asber, Modelo: AUTR72NHC, Serie: 8102557583", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 39, equipo: "Refrigerador Baul 2 Ptas Asber, Modelo: AUTR72NHC, Serie: 8102557560", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 40, equipo: "Refrigerador Comedor Euroquip, Modelo: MBF8505GR Serie: 40017", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 41, equipo: "Refrigerador Dely Euroquip, Modelo: MBF8505GR Serie: 40009", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 42, equipo: "Refrigerador Linea Asber, Modelo: ARR23H Serie: 8102142756", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 43, equipo: "Tarja 1 Una Tina una Mescladora, Modelo:S/M, Serie: S/S.", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 44, equipo: "Tarja 3 de dos Tina una Mescladora Dely, Modelo:S/M, Serie: S/S.", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 45, equipo: "Tarja 4 una tinas una Mescladora Dely, Modelo:S/M, Serie: S/S.", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 46, equipo: "Tarja 5 una Tina una Mescladora Retrolavado, Modelo:S/M, Serie: S/S.", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 47, equipo: "Tarja 6 una Tina una Mescladora quimicos, Modelo:S/M, Serie: S/S.", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 48, equipo: "Tren de arrastre Intertecnica, Modelo: TFT-9.89, Serie: 9594", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 49, equipo: "Triturador de Alimentos, Modelo: SS200-38, Serie: 21101557651", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 50, equipo: "Vitrina Federal, Modelo: CD3628, Serie: 190117110619", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 51, equipo: "Vitrina Refrigerada Turbo Air, Modelo: TOM-36DXB-N, Serie: H2TDX36H300", ubicacion: "PRENSAS", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] }
    ],
    ensamble: [
        { id: 1, equipo: "Agitador cierra circular intertecnica, Modelo:TCV-asc, Serie: 9553-1", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 2, equipo: "ARR 23H, Serie: 8102157720", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 3, equipo: "Baño Maria, Modelo: ZCK165AT-1, Serie: 24HL6007-337", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 4, equipo: "BAPCA-100, Serie: 11111-0352", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 5, equipo: "Bascula de Plataforma Rhino", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 6, equipo: "Bascula NOVAL, Modelo: NEP 300, Serie: 37", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 7, equipo: "Bascula NOVAL, Modelo: NEP 300, Serie: 72", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 8, equipo: "Batidora , Modelo: SATR 40, Serie: 6070", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 9, equipo: "Batidora Alpha, Modelo: S/N, Serie: 108501", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 10, equipo: "Batidora Planetaria Modelo: S/N, Serie: 108471", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 11, equipo: "Baul refrigerador, Modelo: MUR-72-N Serie: H2KMU7RH16253", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 12, equipo: "Baul Refrigrado 1, Modelo: MUC48, Serie: MU4RG08077", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 13, equipo: "Baul Refrigrado 3, Modelo: MUR-72-N, Serie: H2KMU7RH16261", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 14, equipo: "Baul refrigrado 4, Modelo: MUR-72-N Serie: H2KMU7RH16224", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 15, equipo: "Bomba de descaga intertecnica, Modelo:TCV-100, Serie: 9553-2", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 16, equipo: "Cafetera Cimbali, Modelo: B752NYU501PA, Serie: 1737970", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 17, equipo: "Cafetera NECTA, Modelo: 9F96136600, Serie: 91310305", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 18, equipo: "calenton turbo air , Modelo: PRO-50H-RT, Serie: 109108", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 19, equipo: "Calenton turbo air, Modelo:PRO-50H-RT, Serie: 109107", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 20, equipo: "Estufa Electrica Volcrath, Modelo: 4161105-2 Serie: L071-00474690-017", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 21, equipo: "Horno de conrccion Unox, Modelo: 2020E032142, Serie: 108398", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 22, equipo: "Horno Rational Electrico 1, Modelo: LM100FE.AXXXX, Serie: E21SJ22032955677", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 23, equipo: "Horno Rational Electrico 2, Modelo: LM100FE.AXXXX, Serie: E21SJ22032955678", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 24, equipo: "Ivario Rational Electrico 1, Modelo: LMX.200.DE, Serie: E31PK22028061510", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 25, equipo: "Ivario Rational Electrico 2, Modelo; LMX.200.DE, Serie: E31PK22028061511", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 26, equipo: "Lava Loza Electrica MAIKO Modelo: KA44, Serie: 30009836", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 27, equipo: "Lava Manos 1 de rodilla,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 28, equipo: "Lava Manos 2 de rodilla,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 29, equipo: "Lava Manos 3 de rodilla,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 30, equipo: "Lava Manos 4 de rodilla,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 31, equipo: "Lava Manos 5 de rodilla,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 32, equipo: "Licuadora International Modelo: S/M, Serie: S/N", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 33, equipo: "Linea de Servicio 1 Electrica, Modelo: HWBI-5, Serie: 9455342206", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 34, equipo: "Linea de Servicio Electrica 3, Modelo: HWBI-5, Serie: 9455332206", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 35, equipo: "Linea de Servicio Electrica 4, Modelo: HWBI-5, Serie: 9455362206", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 36, equipo: "Linea de Servicio Electrico 2, Modelo: HWBI-5, Serie: 9455352206", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 37, equipo: "Manguera de Carrete,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 38, equipo: "Maquina de Agua 3 Crathco, Modelo:CS-3L-16, Serie: T476360", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 39, equipo: "Maquina de Agua Crathco, Modelo: CS-3L-16, Serie: T476370", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 40, equipo: "Maquina de Agua MIGSA, Modelo: LYP-3X18, Serie: 2411LYP3X18015", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 41, equipo: "Maquina de Agua MIGSA, Modelo: LYP-3X18, Serie: 2411LYP3X18020", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 42, equipo: "Maquina de hielo Monitowoc, Modelo: IYF0900A-261, Serie: 1120456366", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 43, equipo: "Maquina de Hielos, Modelo: D570, Serie: 1120480236", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 44, equipo: "Marmita 1 Electrica Inter, Modelo: MEV-80, Serie: 9550-1", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 45, equipo: "Marmita 2 Electrica Inter, Modelo: MEV-80, Serie: 9550-2", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 46, equipo: "Mezcladora y cortador vertical Hobart, Modelo: HCM450 Serie: 31-1628-295", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 47, equipo: "Mural Refrigerado Electrico 1, Modelo: cps,NE146210-GK, Serie: 111933", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 48, equipo: "Mural Refrigerado Electrico 2, Modelo: cps,NE146210-GK, Serie: 111934", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 49, equipo: "Mural Refrigerado Electrico 3, Modelo: cps,NE146210-GK, Serie: 111935", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 50, equipo: "Mural Refrigerado Electrico 4, Modelo: cps,NE146210-GK, Serie: 111932", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 51, equipo: "Pela Papas Hobart, Modelo: 6460 Serie: 31-1622-042", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 52, equipo: "Procesador de Alimentos Aniker, Modelo: S/M, Serie: S/N", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 53, equipo: "Rebanador de Carnes Rhino, Modelo: SLI-300 Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 54, equipo: "Refrigerador 5 Trausen, Modelo: MS48, Serie: S/N", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 55, equipo: "Refrigerador asber, Modelo: ARR 23H, Serie: 8102157720", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 56, equipo: "Refrigerador asber, Modelo: AUTR 72 HC NEO, Serie: 8103411542", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 57, equipo: "Refrigerador asber, Modelo: AUTR 72 HC NEO, Serie:8103390875", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 58, equipo: "Refrigerador Parker, Modelo: LRB-1471PC, Serie: PK02A94R600036", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 59, equipo: "Refrigerador Tecnomac, Modelo: T310913705, Serie: 4209543", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 60, equipo: "Refrigerador Turbo Air, Modelo: TOM-36DXB-N, Serie: H2TDX36G3006", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 61, equipo: "Tarja 1 dos Tinas una Mescladora,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 62, equipo: "Tarja 10 dos tinas una Mescladora,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 63, equipo: "Tarja 11 una tina una Mescladora,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 64, equipo: "Tarja 2 dos Tinas una Mescladora,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 65, equipo: "Tarja 3 de 1 Tina una Mezcladora,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 66, equipo: "Tarja 4 dos tinas una Mescladora,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 67, equipo: "Tarja 5 una Tina una Mescladora,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 68, equipo: "Tarja 6 una Tina una Mescladora,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 69, equipo: "Tarja 7 dos tinas una Mescladoras,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 70, equipo: "Tarja 8 una tina una Mezcladora,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 71, equipo: "Tarja 9 una tina una Mescladora,Modelo: N/A, Serie: N/A", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 72, equipo: "Tren de arrastre Intertecnica Modelo: IFT6909, Serie: 9551", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] },
        { id: 73, equipo: "ULTRA-2,BA, Modelo: ULTR30720", ubicacion: "ENSAMBLE", frecuencia: "MENSUAL", meses: ["X","X","X","X","X","X","X","X","X","X","X","X"] }
    ]
};

let comedorActual = 'central';

function abrirCalendarioModal() {
    document.getElementById('modal-calendario').style.display = 'flex';
    cargarTablaModal(comedorActual);
}

function cerrarCalendarioModal() {
    document.getElementById('modal-calendario').style.display = 'none';
}

function cambiarComedorModal(comedor) {
    comedorActual = comedor;
    const botones = document.querySelectorAll('.tab-btn');
    botones.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    cargarTablaModal(comedor);
}

function cargarTablaModal(comedor) {
    const tbody = document.getElementById('cuerpo-tabla-calendario');
    tbody.innerHTML = '';
    
    const items = datosCalendarioComedores[comedor] || [];
    items.forEach(row => {
        let tr = document.createElement('tr');
        let celdasMeses = row.meses.map(m => `<td style="text-align:center; color:var(--brand-blue); font-weight:bold;">${m}</td>`).join('');
        
        tr.innerHTML = `
            <td>${row.id}</td>
            <td style="text-align:left; white-space: nowrap;">${row.equipo}</td>
            <td>${row.ubicacion}</td>
            <td>${row.frecuencia}</td>
            ${celdasMeses}
        `;
        tbody.appendChild(tr);
    });
}