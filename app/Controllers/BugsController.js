import { ProxyState } from "../AppState.js"
import { bugsService } from "../Services/BugsService.js"
import { Pop } from "../Utils/Pop.js"

function _draw() {
  const bugs = ProxyState.bugs
  let template = `
  <tr>
    <th>Title</th>
    <th>Description</th>
    <th>Reported By</th>
    <th>Status</th>
  </tr>`
  bugs.forEach(bug => template += bug.Template)

  document.getElementById('bugs').innerHTML = template
}


export class BugsController {
  constructor() {
    ProxyState.on('bugs', _draw)
    bugsService.getAllBugs()
  }

  async createBug() {
    try {

      window.event.preventDefault()

      const form = window.event.target
      const rawData = {
        title: form.title.value,
        description: form.description.value,
        creator: form.creator.value
      }
      console.log(rawData)

      bugsService.createBug(rawData)

      form.reset()
      Pop.toast('Bug Created', 'success')

    } catch (error) {
      console.log(error)
      Pop.toast('Something went wrong', "error")
    }

  }
}