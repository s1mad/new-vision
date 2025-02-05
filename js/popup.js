function showPopup(type) {
    const popup = document.getElementById(`${type}-popup`);
    popup.style.display = 'flex';
}

function closePopup(popup) {
    popup.style.display = 'none';
}

// Закрытие попапа при клике вне его
document.addEventListener('click', (e) => {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (e.target === popup) {
            closePopup(popup);
        }
    });
});

// Закрытие попапа при клике на крестик
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const popup = btn.closest('.popup');
        closePopup(popup);
    });
});

// Добавляем после существующего кода
document.addEventListener('click', (e) => {
    const button = e.target.closest('[data-popup]');
    if (button) {
        const popupType = button.getAttribute('data-popup');
        
        // Если кнопка находится внутри другого попапа, сначала закрываем текущий попап
        const currentPopup = button.closest('.popup');
        if (currentPopup) {
            closePopup(currentPopup);
        }
        
        showPopup(popupType);
    }

    const priceCard = e.target.closest('.price-card');
    if (priceCard) {
        const currentPopup = priceCard.closest('.popup');
        if (currentPopup) {
            closePopup(currentPopup);
        }
        showPopup('contact');
    }
}); 