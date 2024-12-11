document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('userModal');
    const openModalButton = document.querySelector('.submit');
    const closeModalButton = modal.querySelector('.modal-close');
  
    // Відкрити модальне вікно
    openModalButton.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
    });
  
    // Закрити модальне вікно
    closeModalButton.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  
    // Закрити модальне вікно при кліку поза вмістом
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  
    // Обробка форми
    const userForm = document.getElementById('userForm');
    userForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = userForm.name.value;
      const email = userForm.email.value;
  
      alert(`Дякуємо, ${name}! Ваш email (${email}) записаний.`);
      modal.classList.add('hidden');
    });

    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Показувати кнопку, якщо прокручено вниз
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
        } else {
        scrollToTopBtn.classList.remove('show');
        }
    });

    // Прокрутка до початку сторінки
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    });

  });