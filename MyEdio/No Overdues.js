function showCustomAlert() {

    const alertContainer = document.createElement('div');
    alertContainer.style.position = 'fixed';
    alertContainer.style.top = '-100px';
    alertContainer.style.left = '50%';
    alertContainer.style.transform = 'translateX(-50%)';
    alertContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    alertContainer.style.color = 'white';
    alertContainer.style.padding = '20px';
    alertContainer.style.borderRadius = '5px';
    alertContainer.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    alertContainer.style.fontFamily = 'Arial, sans-serif';
    alertContainer.style.zIndex = '1000';
    alertContainer.style.transition = 'top 0.5s ease';

    const alertText = document.createElement('div');
    alertText.textContent = 'Script Loaded Successfully!';
    alertText.style.fontSize = '18px';
    alertText.style.fontWeight = 'bold';
    alertContainer.appendChild(alertText);

    const subText = document.createElement('div');
    subText.textContent = 'This message will only show once..';
    subText.style.fontSize = '14px';
    subText.style.marginTop = '5px';
    alertContainer.appendChild(subText);

    const dismissButton = document.createElement('button');
    dismissButton.textContent = 'Dismiss';
    dismissButton.style.marginTop = '10px';
    dismissButton.style.padding = '5px 10px';
    dismissButton.style.backgroundColor = 'white';
    dismissButton.style.color = 'black';
    dismissButton.style.border = 'none';
    dismissButton.style.borderRadius = '3px';
    dismissButton.style.cursor = 'pointer';
    dismissButton.onclick = () => alertContainer.remove();
    alertContainer.appendChild(dismissButton);

    document.body.appendChild(alertContainer);

    setTimeout(() => {
        alertContainer.style.top = '20px';
    }, 100);

    setTimeout(() => {
        alertContainer.style.top = '-100px'; 
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
