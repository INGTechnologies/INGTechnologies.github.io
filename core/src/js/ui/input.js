
import element_utils from './element_utils.js'



export default element_utils.define(
    
    class extends element_utils.element_base(HTMLInputElement) {

        constructor (option) {

            super(option);

        }

    }, 

    'input'

);