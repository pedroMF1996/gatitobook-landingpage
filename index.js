var inputs = [document.querySelector(".login"),
              document.querySelector(".password")],
    inputsEventsHandlers = {
        'click': (e)=>{
                    var element = e.target;
                    var classList = [...element.classList];
                    if(!element.value && !classList.includes('sobe-label'))
                        element.classList.toggle('sobe-label');
                },
        'keypress': (e)=>{
                        var element = e.target;
                        var classList = [...element.classList];
                        if(!classList.includes('sobe-label'))
                            element.classList.toggle('sobe-label');
                        },
        'blur': (e)=>{
                    var element = e.target;
                    var classList = [...element.classList];
                    if(!element.value &&  classList.includes('sobe-label'))
                        element.classList.toggle('sobe-label');
                },
        'focus': (e)=>{
                    var element = e.target;
                    var classList = [...element.classList];
                    if(!classList.includes('sobe-label'))
                        element.classList.toggle('sobe-label');
                }
    };
    
var buttons = [document.querySelector('.position-arrow-up'),
                document.querySelector('.enviar')],
    buttonEventsHandlers = {
        'click': (e)=>{
                    var element = e.target;
                    var classList = [...element.classList];
                    if(classList.includes('position-arrow-up')){
                        arrowUpClickEventHandler(element);
                    }else if(classList.includes('passByArrowUp')){
                        element = document.querySelector('.position-arrow-up');
                        arrowUpClickEventHandler(element);
                    }
                },
        'blur': (e)=>{
                    var element = e.target;
                    element.style.transform = 'scale(1)';
                },
        'focus': (e)=>{
                    var element = e.target;
                    element.style.transform = 'scale(1.015)';
                }
    }

// Métodos     
var arrowUpClickEventHandler = (element)=>{
    var form = document.querySelector('form');
    form.classList.toggle('d-none');
    form.classList.toggle('cima-footer');
    element.classList.toggle('cima-arrow');
    element.classList.toggle('zoom');
}

// Aplica eventos nos elementos
(function (){
    inputs.forEach(input => {
        Object.keys(inputsEventsHandlers).forEach(eventHandlerKey => {
            input.addEventListener(eventHandlerKey, inputsEventsHandlers[eventHandlerKey]);
        })
    });
    buttons.forEach(button => {
        Object.keys(buttonEventsHandlers).forEach(eventHandlerKey => {
            button.addEventListener(eventHandlerKey, buttonEventsHandlers[eventHandlerKey]);
        });
    });
})();