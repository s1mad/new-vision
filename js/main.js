document.addEventListener('DOMContentLoaded', () => {
    initializeContent();
    initializePopups();
});

function initializeContent() {
    // Заполнение шапки
    document.getElementById('psychologist-name').textContent = config.personal.name;
    document.getElementById('short-description').textContent = config.personal.shortDescription;
    
    // Инициализация кнопок в шапке
    document.querySelector('.btn.primary').textContent = config.buttons.contact.text;
    document.querySelector('.btn.secondary').textContent = config.buttons.prices.text;

    // Заполнение заголовков попапов
    document.querySelector('#contact-popup h3').textContent = config.popups.contact.title;
    document.querySelector('#prices-popup h3').textContent = config.popups.prices.title;

    // Заполнение секции "Обо мне"
    const aboutSection = document.getElementById(config.sections.about.id);
    aboutSection.querySelector('h2').textContent = config.sections.about.title;
    aboutSection.querySelector('.about-content').innerHTML = `
        ${config.sections.about.content.split('\n\n').map(paragraph => 
            `<p>${paragraph.trim()}</p>`
        ).join('')}
        <ul class="education-list">
            ${config.sections.about.education.map(edu => `<li>${edu}</li>`).join('')}
        </ul>
    `;

    // Заполнение преимуществ
    const advantagesSection = document.getElementById(config.sections.advantages.id);
    advantagesSection.querySelector('h2').textContent = config.sections.advantages.title;
    advantagesSection.querySelector('.advantages-grid').innerHTML = config.sections.advantages.items
        .map(item => `
            <div class="advantage-card">
                <img src="${item.icon}" alt="${item.title}" class="advantage-icon">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');

    // Заполнение отзывов
    const testimonialsSection = document.getElementById(config.sections.testimonials.id);
    testimonialsSection.querySelector('h2').textContent = config.sections.testimonials.title;
    testimonialsSection.querySelector('.testimonials-slider').innerHTML = config.sections.testimonials.items
        .map(testimonial => `
            <div class="testimonial-card">
                <img src="${testimonial.photo}" alt="${testimonial.name}" class="testimonial-photo">
                <p class="testimonial-text">${testimonial.text}</p>
                <div class="testimonial-author">${testimonial.name}</div>
                <div class="testimonial-type">${testimonial.type}</div>
            </div>
        `).join('');

    // Добавляем кнопки в секции
    Object.values(config.sections).forEach(section => {
        const sectionElement = document.getElementById(section.id);
        if (section.contactButton) {
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'section-contact-button';
            buttonContainer.innerHTML = `
                <button class="btn primary" data-popup="${section.contactButton.action}">
                    ${section.contactButton.text}
                </button>
            `;
            sectionElement.querySelector('.container').appendChild(buttonContainer);
        }
    });

    // Инициализация футера
    initializeFooter();
    
    // Устанавливаем ширину кнопок
    adjustButtonWidths();
}

function initializePopups() {
    // Инициализация попапа контактов
    const contactButtons = document.querySelector('#contact-popup .contact-buttons');
    contactButtons.innerHTML = config.popups.contact.buttons
        .map(contact => `
            <button class="contact-button" onclick="window.open('${contact.link}', '_blank', 'noopener,noreferrer')">
                <img src="${contact.icon}" alt="${contact.title}" class="contact-icon">
                ${contact.title}
            </button>
        `).join('');

    // Инициализация попапа цен
    const pricesContent = document.querySelector('.prices-content');
    pricesContent.innerHTML = config.popups.prices.items
        .map(item => `
            <div class="price-card" data-popup="contact">
                <div class="price-info">
                    <h4>${item.title}</h4>
                    <div class="price-details">
                        <span>${item.duration}</span>
                    </div>
                </div>
                <div class="price-amount">${item.price}</div>
            </div>
        `).join('');
}

function initializeFooter() {
    // Обновляем секцию контактов
    const contactSection = document.querySelector('footer .footer-section:first-child .social-buttons');
    contactSection.innerHTML = config.contacts
        .map(contact => `
            <a href="${contact.link}" class="footer-button" target="_blank" rel="noopener noreferrer">
                <div class="icon-circle">
                    <img src="${contact.icon}" alt="${contact.title}">
                </div>
                <span class="button-text">${contact.title}</span>
            </a>
        `).join('');

    // Обновляем секцию социальных сетей
    const socialSection = document.querySelector('footer .footer-section:last-child .social-buttons');
    socialSection.innerHTML = config.social
        .map(social => `
            <a href="${social.link}" class="footer-button" target="_blank" rel="noopener noreferrer">
                <div class="icon-circle">
                    <img src="${social.icon}" alt="${social.title}">
                </div>
                <span class="button-text">${social.title}</span>
            </a>
        `).join('');
}

// Функция для установки ширины кнопок
function adjustButtonWidths() {
    document.querySelectorAll('.section-contact-button').forEach(buttonContainer => {
        const section = buttonContainer.closest('.section');
        const cards = section.querySelectorAll('.advantage-card, .testimonial-card');
        
        if (cards.length > 0) {
            const cardWidth = cards[0].offsetWidth;
            const button = buttonContainer.querySelector('.btn');
            button.style.width = `${cardWidth}px`;
        }
    });
}

// Обновляем ширину кнопок при изменении размера окна
window.addEventListener('resize', adjustButtonWidths);

// Запускаем первичную настройку после полной загрузки страницы
document.addEventListener('DOMContentLoaded', adjustButtonWidths);