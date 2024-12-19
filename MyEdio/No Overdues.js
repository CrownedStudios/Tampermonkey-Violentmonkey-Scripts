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

    setInterval(function() {
        removeElementsAndChangeText();
    }, 10);
