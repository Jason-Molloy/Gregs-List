import CarController from "./components/carController.js";
import HomeController from "./components/homeController.js";
import JobController from "./components/jobController.js";




class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      homeController: new HomeController(),
      jobController: new JobController()
    }
  }
}



window.app = new App()