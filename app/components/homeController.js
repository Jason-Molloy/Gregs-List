import HomeService from "./homeService.js";

//Private
let _hs = new HomeService()


function draw() {
  let homes = _hs.Homes
  let template = ''
  homes.forEach(home => {
    template += home.getTemplate()
  });
  document.getElementById('available-homes').innerHTML = template
}

function logHomes() {
  console.log("homes UPDATED!!!")
}

//Public
export default class HomeController {
  constructor() {

    _hs.addSubscriber('homes', draw)
    _hs.addSubscriber('homes', logHomes)
    draw()
  }

  //IN ANY FORM SUBMISSION DO NOT FORGET TO PREVENT THE DEFAULT ACTION
  addHome(event) {
    event.preventDefault();
    let form = event.target
    let newHome = {
      title: form.title.value,
      price: form.price.value,
      description: form.description.value,
      img: form.img.value
    }
    //debugger
    _hs.addHome(newHome)
    //Clears the form
    form.reset()

  }
  deleteHome(id) {
    _hs.deleteHome(id)
  }

}
