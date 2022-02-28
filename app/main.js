import { BugsController } from "./Controllers/BugsController.js"
class App {
  bugsController = new BugsController()
}

window["app"] = new App()
