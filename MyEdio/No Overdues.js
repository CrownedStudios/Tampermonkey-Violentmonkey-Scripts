let alertSent = false;

function showCustomAlert() {
    if (alertSent) return;
    alertSent = true;

    const alertContainer = document.createElement('div');
    alertContainer.style.position = 'fixed';
    alertContainer.style.right = '-400px';
    alertContainer.style.bottom = '20px';
    alertContainer.style.backgroundColor = 'rgba(50, 50, 50, 0.95)';
    alertContainer.style.color = '#ffffff';
    alertContainer.style.padding = '15px 25px';
    alertContainer.style.borderRadius = '12px';
    alertContainer.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
    alertContainer.style.fontFamily = 'Arial, Helvetica, sans-serif';
    alertContainer.style.fontSize = '16px';
    alertContainer.style.zIndex = '1000';
    alertContainer.style.transition = 'right 0.6s ease-in-out, opacity 0.5s ease-in-out';

    const alertText = document.createElement('div');
    alertText.textContent = 'Script Loaded Successfully!';
    alertText.style.fontSize = '18px';
    alertText.style.fontWeight = 'bold';
    alertText.style.marginBottom = '8px';
    alertText.style.letterSpacing = '0.5px';
    alertContainer.appendChild(alertText);

    const subText = document.createElement('div');
    subText.textContent = 'This message will only show once..';
    subText.style.fontSize = '14px';
    subText.style.color = '#cccccc';
    subText.style.marginBottom = '10px';
    alertContainer.appendChild(subText);

    const dismissButton = document.createElement('button');
    dismissButton.textContent = 'Dismiss';
    dismissButton.style.padding = '10px 20px';
    dismissButton.style.backgroundColor = '#ff5722';
    dismissButton.style.color = '#ffffff';
    dismissButton.style.border = 'none';
    dismissButton.style.borderRadius = '6px';
    dismissButton.style.cursor = 'pointer';
    dismissButton.style.fontSize = '14px';
    dismissButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    dismissButton.onclick = () => {
        alertContainer.style.opacity = '0';
        setTimeout(() => alertContainer.remove(), 500);
    };
    alertContainer.appendChild(dismissButton);

    document.body.appendChild(alertContainer);

    setTimeout(() => {
        alertContainer.style.right = '20px';
    }, 100);

    setTimeout(() => {
        alertContainer.style.opacity = '0';
        setTimeout(() => alertContainer.remove(), 500);
    }, 3000);
}

function removeElementsAndChangeText() {
    const calendarElements = document.querySelectorAll('.c-calendar-list-accordion');
    calendarElements.forEach(element => element.remove());

    const mediumSmallElements = document.querySelectorAll('.-mediumsmall.-neutral-darkest');
    mediumSmallElements.forEach(element => element.remove());

    const overdueElements = document.querySelectorAll('.-overdue');
    overdueElements.forEach(element => element.remove());

    const tagElements = document.querySelectorAll('.c-tag.-neutral-lightest');
    tagElements.forEach(tag => {
        tag.textContent = '0 OVERDUE';
    });
}

showCustomAlert();

setInterval(function() {
    removeElementsAndChangeText();
}, 10);
