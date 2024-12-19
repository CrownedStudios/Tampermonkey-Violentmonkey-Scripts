function logScriptEnabled() {
    const logStyle = [
        'color: white',
        'background: linear-gradient(90deg, #ff5722, #ff9800)',
        'padding: 10px',
        'border-radius: 5px',
        'font-size: 16px',
        'font-weight: bold'
    ].join(';');

    console.log('%cScript Enabled: There are no set keys to disable.', logStyle);
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

logScriptEnabled();
setInterval(removeElementsAndChangeText, 10);
