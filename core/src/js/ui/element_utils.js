
const element_utils = {

    define : function (ElementClass, name) {

        try {
    
            customElements.define('i-' + name, ElementClass, {extends : name});
    
        }
        catch{
    
    
    
        }
    
        return ElementClass;
    
    },

    apply_option : function (element, option) {

        element.option = option || new Object();
    
        element.textContent = '' || element.option.textContent;
    
        element.className = '' || element.option.class;
    
        element.id = '' || element.option.id;
    
    },

    element_base : function (HTMLBase){

        return class extends HTMLBase {

            constructor(option){

                super();

                element_utils.apply_option(this, option);

            }

        }

    }

}



export default element_utils;