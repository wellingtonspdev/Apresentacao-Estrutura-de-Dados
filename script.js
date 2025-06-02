// Lógica geral da apresentação de slides
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('total-slides').textContent = totalSlides;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    document.getElementById('current-slide').textContent = currentSlide + 1;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault(); // Previne rolar a página com a barra de espaço
        changeSlide(1);
    } else if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    }
});

document.addEventListener('click', function(e) {
    // Impede que cliques nos botões de controle da pilha ou da navegação mudem o slide
    if (e.target.closest('.nav-btn') || e.target.closest('.slide-counter') || e.target.closest('.stack-controls')) {
        return;
    }
    const rect = document.body.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    if (clickX > width / 2) {
        changeSlide(1);
    } else {
        changeSlide(-1);
    }
});

// Lógica específica da demonstração interativa da pilha
document.addEventListener('DOMContentLoaded', () => {
    const stackContainer = document.getElementById('stack-visual-container');
    const pushBtn = document.getElementById('stack-push-btn');
    const popBtn = document.getElementById('stack-pop-btn');
    const peekBtn = document.getElementById('stack-peek-btn');
    const messageArea = document.getElementById('stack-message-area');
    
    // Verifica se os elementos da demo existem para não dar erro em outros slides
    if (!stackContainer) return;

    let stackData = [1, 2, 3]; // Dados iniciais da pilha
    const MAX_ITEMS = 5;
    let elementCounter = 4;

    function renderStack() {
        stackContainer.innerHTML = '';
        stackData.forEach(item => {
            const el = document.createElement('div');
            el.className = 'stack-item';
            el.textContent = item;
            stackContainer.appendChild(el);
        });
    }

    function updateMessage(msg, isError = false) {
        messageArea.textContent = msg;
        messageArea.style.color = isError ? '#e74c3c' : '#2c3e50';
    }

    pushBtn.addEventListener('click', () => {
        if (stackData.length >= MAX_ITEMS) {
            updateMessage('Pilha cheia! (isFull)', true);
            return;
        }
        const newElement = elementCounter++;
        stackData.push(newElement);
        renderStack();
        updateMessage(`Elemento '${newElement}' adicionado (push)`);
    });

    popBtn.addEventListener('click', () => {
        if (stackData.length === 0) {
            updateMessage('Pilha vazia! (isEmpty)', true);
            return;
        }
        const poppedElement = stackData.pop();
        renderStack();
        updateMessage(`Elemento '${poppedElement}' removido (pop)`);
    });

    peekBtn.addEventListener('click', () => {
        if (stackData.length === 0) {
            updateMessage('Pilha vazia! (isEmpty)', true);
            return;
        }
        const topElement = stackContainer.lastChild;
        updateMessage(`Elemento no topo: ${topElement.textContent} (peek)`);
        topElement.classList.add('peek');
        setTimeout(() => {
            if(topElement) { // Garante que o elemento ainda existe
               topElement.classList.remove('peek');
            }
        }, 1000);
    });
    
    renderStack(); // Renderiza a pilha inicial quando o DOM estiver pronto
});