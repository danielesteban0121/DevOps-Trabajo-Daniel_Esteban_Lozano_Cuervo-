// bubbles.js - Efecto de burbujas flotantes

document.addEventListener('DOMContentLoaded', function() {
    const bubblesContainer = document.querySelector('.left-side .bubbles');
    if (!bubblesContainer) return;
    
    const bubbleCount = 50; // Número total de burbujas
    const mobileBreakpoint = 768; // Tamaño para considerar móvil
    const mobileBubbleCount = 20; // Número reducido para móviles
    
    // Crea todas las burbujas
    function createBubbles() {
        bubblesContainer.innerHTML = '';
        
        const count = window.innerWidth <= mobileBreakpoint ? mobileBubbleCount : bubbleCount;
        
        for (let i = 0; i < count; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            
            // Configuración aleatoria para cada burbuja
            const size = Math.random() * 10 + 5; // 5px a 15px
            const duration = Math.random() * 20 + 10; // 10s a 30s
            const delay = Math.random() * 10; // 0s a 10s
            const moveX = (Math.random() * 200 - 100) + 'px'; // -100px a 100px
            
            bubble.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${Math.random() * 100}%;
                animation-duration: ${duration}s;
                animation-delay: ${delay}s;
                --move-x: ${moveX};
            `;
            
            bubblesContainer.appendChild(bubble);
        }
    }
    
    // Ajusta las burbujas al cambiar tamaño de pantalla
    function handleResize() {
        createBubbles();
    }
    
    // Inicializa y configura eventos
    createBubbles();
    window.addEventListener('resize', handleResize);
    
    // Limpieza al salir de la página
    window.addEventListener('beforeunload', function() {
        window.removeEventListener('resize', handleResize);
    });
});