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
      /** @type {HTMLFormElement} */
      // @ts-ignore
      const form = window.event.target
      const rawData = {
        title: form.title.value,
        description: form.description.value,
        creator: form.creator.value
      }
      bugsService.createBug(rawData)

      form.reset()
      Pop.toast('Bug Created', 'success')

    } catch (error) {
      console.log(error)
      Pop.toast('Something went wrong', "error")
    }

  }

  openEdit(id) {
    const bug = ProxyState.bugs.find(b => b.id == id)
    document.getElementById(id).innerHTML = bug.EditTemplate
    document.getElementById(id + '-title').focus()
  }

  async closeEdit(id) {
    if (!await Pop.confirm("Are You Sure?", "All Changes will be Reverted", "warning", "Continue Editing")) {

      const bug = ProxyState.bugs.find(b => b.id == id)
      document.getElementById(id).innerHTML = bug.Template
    }
  }

  async editBug(id) {
    try {
      const update = {
        id,
        title: document.getElementById(id + '-title').innerText,
        description: document.getElementById(id + '-description').innerText,
        creator: document.getElementById(id + '-creator').innerText,
        closed: document.getElementById(id + '-closed').checked
      }
      await bugsService.editBug(update)
      Pop.toast('Saved', 'success')
    } catch (error) {
      console.log(error)
      Pop.toast('Something went wrong', "error")
    }

  }

  async deleteBug(id) {
    try {
      if (await Pop.confirm()) {
        await bugsService.deleteBug(id)
        Pop.toast('Deleted', 'success')
      }
    } catch (error) {
      console.log(error)
      Pop.toast('Something went wrong', "error")
    }
  }
}