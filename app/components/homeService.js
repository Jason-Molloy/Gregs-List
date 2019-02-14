import Home from "../models/home.js";

//PRIVATE
//STATE IS THE OBJECT THAT CONTAINS ALL DATA
let _state = {
  homes: [
    new Home({ price: 1700000, title: 'Comfortable cottage', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwcubmcWhOo_acJ9KJfqlwYhtZgnaTvrieVNRkflN7JAYPsdqPA', description: 'Near Los Angeles... A steal at this price.' }),
    new Home({ price: 15000, title: 'Fixer Upper', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWRfh-k-8BAfgeXAYvOBHt6DQF9Mj6eOEDoVntqf1UuEywUmG', description: 'Just needs a little work and the roof won\'t leak...' }),
    new Home({ price: 8000, title: 'Mobile home - stationary', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5hsYGfUZY7zB7BIVwARo2tSIDMMfTj57fephRkVHlUYta7nRe', description: 'Breathtaking location with waterfront view' })
  ]
}


//SUBSCRIBERS HOLDS ALL FUNCTIONS TO TRIGGER ON CHANGES
//ALL PROPERTIES ON STATE WILL ALSO BE ON SUBSCRIBERS
//SUBSCRIBERS IS AN OBJECT OF ARRAYS OF FUNCTIONS
let _subscribers = {
  homes: []
}


function setState(dataName, value) {
  _state[dataName] = value
  //FOR EACH FUNCTION IN THE SUBSCRIBERS ENVOKE THE FUNCTION
  _subscribers[dataName].forEach(fn => fn());
}

//PUBLIC
export default class HomeService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }
  get Homes() {
    return _state.homes
  }
  addHome(rawHome) {
    let newHome = new Home(rawHome)
    _state.homes.push(newHome)
    setState('homes', _state.homes)
  }
  deleteHome(id) {
    for (let i = 0; i < _state.homes.length; i++) {
      let home = _state.homes[i];
      if (home.serial == id) {
        _state.homes.splice(i, 1)
        break;
      }
    }
    setState('homes', _state.homes)
  }
}