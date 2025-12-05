// DEEPSEEK EN SU MAXIMO EXPLENDOR, NI PREGUNTAR QUE SIGNIFICA =)

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM cargado - Iniciando procesamiento...');
    procesarYMostrarDatos();
});

function procesarYMostrarDatos() {
    const urlParams = new URLSearchParams(window.location.search);
    
    console.log('🔍 URL completa:', window.location.href);
    console.log('📋 Parámetros GET:', urlParams.toString());
    console.log('📊 Todos los parámetros:', Object.fromEntries(urlParams));
    
    const turnos = {
        'mañana': 'Mañana',
        'tarde': 'Tarde', 
        'online': 'Online'
    };

    const interesesMap = {
        'redes': 'Redes',
        'hardware': 'Hardware',
        'web': 'Web'
    };

    if (urlParams.toString()) {
        console.log('🎯 Mostrando datos...');
        
        // Mostrar datos con valores por defecto
        document.getElementById('td-nombre').textContent = urlParams.get('nombre') || 'No especificado';
        document.getElementById('td-email').textContent = urlParams.get('email') || 'No especificado';
        document.getElementById('td-telefono').textContent = urlParams.get('telefono') || 'No especificado';
        document.getElementById('td-ciudad').textContent = urlParams.get('ciudad') || 'No especificado';
        
        const turno = urlParams.get('turno');
        document.getElementById('td-turno').textContent = turnos[turno] || 'No especificado';
        
        // Debug intereses
        console.log('🎯 Intereses individual:', urlParams.get('intereses'));
        console.log('🎯 Intereses array:', urlParams.getAll('intereses[]'));
        
        let interesesTexto = 'Ninguno';
        const interesesArray = urlParams.getAll('intereses[]');
        
        if (interesesArray.length > 0) {
            interesesTexto = interesesArray.map(int => interesesMap[int] || int).join(', ');
        } else {
            const interesIndividual = urlParams.get('intereses');
            if (interesIndividual) {
                interesesTexto = interesesMap[interesIndividual] || interesIndividual;
            }
        }
        
        document.getElementById('td-intereses').textContent = interesesTexto;
        
        // Mostrar/ocultar secciones
        document.getElementById('contenido-resultados').classList.remove('hidden');
        document.getElementById('sin-datos').classList.add('hidden');
        
        console.log('✅ Datos mostrados correctamente');
        
    } else {
        console.log('❌ No hay parámetros en la URL');
        document.getElementById('contenido-resultados').classList.add('hidden');
        document.getElementById('sin-datos').classList.remove('hidden');
    }
}