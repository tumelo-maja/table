$(document).ready(function() {
    $('.box').on('click', function() {
        // const classNames = $(this).attr('class').split(' ');
        // $('.' + classNames[1]).css({"background-color": 'red'});

        /**
         * When an element has 'box' class, fire this event
         */

        const classNames = $(this).attr('class').split(' ');
        const boxClass =  classNames[0];
        const className =  classNames[1];

        if ($(this).css('background-color') == 'rgb(255, 0, 0)') {
            // if this object is already red, turn it black
            $('.' + className).css('background-color', '#000');
        } else {
            //  else turn all elements with box class black
            // and then change the color of all elements
            // with the same class name as the clicked element
            // to red.
            $('.' + boxClass).css('background-color', '#000');
            $('.' + className).css('background-color', 'red');
        }
    });

    // 
    $('.module-nav').on('click', function() {
        let allModulesCardsSelector = '.card';
        let thisModuleCardsSelector = "." + this.id + "-card";
        
        $(allModulesCardsSelector).removeClass('card-highlight');
        $(thisModuleCardsSelector).addClass('card-highlight');
    });
    
});