// Animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Cambiar entre formularios
function showForm(formNumber) {
    document.querySelectorAll('.form-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('form').forEach(form => form.classList.add('hidden'));
    document.getElementById(`form${formNumber}`).classList.remove('hidden');
    event.target.classList.add('active');
}