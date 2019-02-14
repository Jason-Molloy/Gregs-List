let serial = 0

export default class Home {
  constructor(data) {
    this.serial = serial
    this.price = data.price
    this.title = data.title
    this.img = data.img
    this.description = data.description || 'No Description Provided'
    serial++
  }

  getTemplate() {
    return `
        <div class="card col-3">
            <img class="card-img-top" src="${this.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.description} -- ${this.price}</p>
                <button onclick="app.controllers.homeController.deleteHome(${this.serial})">Remove</button>
            </div>
        </div>`
  }
}
