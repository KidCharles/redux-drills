// //importing function
// //package
// import { createStore } from 'redux';




// //import reducer function 
// //this is the reducer function in the reducer file
// //if you do not use export destructuring, you use export default

// import reducer from './ducks/guestList';


// ///create store
// let store = createStore(reducer);

// //export
// export default store;


import { createStore } from 'redux';

import reducer from './ducks/guestList';

let store = createStore(reducer);

export default store;