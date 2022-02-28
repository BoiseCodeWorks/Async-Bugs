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
  }
}

export const bugsService = new BugsService()