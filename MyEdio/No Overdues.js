function showCustomAlert() {
    const alertContainer = document.createElement('div');
    alertContainer.style.position = 'fixed';
    alertContainer.style.right = '-300px';
    alertContainer.style.top = '20px';
    alertContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    alertContainer.style.color = 'white';
    alertContainer.style.padding = '20px 30px';
    alertContainer.style.borderRadius = '8px';
    alertContainer.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
    alertContainer.style.fontFamily = 'Verdana, sans-serif';
    alertContainer.style.zIndex = '1000';
    alertContainer.style.transition = 'right 0.5s ease';

    const alertText = document.createElement('div');
    alertText.textContent = 'Script Loaded Successfully!';
    alertText.style.fontSize = '20px';
    alertText.style.fontWeight = '600';
    alertText.style.marginBottom = '8px';
    alertContainer.appendChild(alertText);

    const subText = document.createElement('div');
    subText.textContent = 'This message will only show once..';
    subText.style.fontSize = '14px';
    subText.style.opacity = '0.9';
    alertContainer.appendChild(subText);

    const dismissButton = document.createElement('button');
    dismissButton.textContent = 'Dismiss';
    dismissButton.style.marginTop = '15px';
    dismissButton.style.padding = '8px 15px';
    dismissButton.style.backgroundColor = '#f44336';
    dismissButton.style.color = 'white';
    dismissButton.style.border = 'none';
    dismissButton.style.borderRadius = '4px';
    dismissButton.style.cursor = 'pointer';
    dismissButton.style.fontSize = '14px';
    dismissButton.onclick = () => alertContainer.remove();
    alertContainer.appendChild(dismissButton);

    document.body.appendChild(alertContainer);

    setTimeout(() => {
        alertContainer.style.right = '20px';
    }, 100);

    setTimeout(() => {
        alertContainer.style.right = '-300px';
        setTimeout(() => {
            alertContainer.remove();
        }, 500);
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
