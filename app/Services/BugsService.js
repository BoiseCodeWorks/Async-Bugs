import { ProxyState } from "../AppState.js"
import { Bug } from "../Models/Bug.js"
import { api } from "./AxiosService.js"

class BugsService {
  async getAllBugs() {
    const res = await api.get('')
    const bugs = res.data.map(b => new Bug(b))
    ProxyState.bugs = bugs
    // TODO what do we do with these bugs????
  }

  async createBug(rawData) {
    const res = await api.post('', rawData)
    console.log(res.data)
    ProxyState.bugs = [...ProxyState.bugs, new Bug(res.data)]
  }

  async editBug(update) {
    await api.put(update.id, update)
    // get the current (old) bug index 
    const index = ProxyState.bugs.findIndex(b => b.id === update.id)
    if (index == -1) {
      console.error("invalid id")
    }
    // replace the old bug with the update
    ProxyState.bugs.splice(index, 1, new Bug(update))

    ProxyState.bugs = ProxyState.bugs


  }

  async deleteBug(id) {
    await api.delete(id)
    ProxyState.bugs = ProxyState.bugs.filter(b => b.id != id)
  }
}

export const bugsService = new BugsService()