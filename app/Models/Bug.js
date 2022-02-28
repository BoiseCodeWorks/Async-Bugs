export class Bug {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.description = data.description
    this.closed = data.closed
    this.creator = data.creator
  }

  get EditTemplate() {
    return /* html */ `
    <tr class="selectable" id="${this.id}">
     <td class="bg-white" contenteditable id="${this.id}-title">${this.title}</td>
     <td class="bg-white" contenteditable id="${this.id}-description">${this.description}</td>
     <td class="bg-white" contenteditable id="${this.id}-creator">${this.creator}</td>
        <td class="bg-white">
          <input type="checkbox" ${this.closed ? 'checked' : ''} id="${this.id}-closed">
        </td>
        <td class="bg-white d-flex align-items-center"> 
          <button class="btn btn-success" onclick="app.bugsController.editBug('${this.id}')">Save</button>
          <p class="m-0 ms-2 selectable p-2" onclick="app.bugsController.closeEdit('${this.id}')"> Cancel </p>
        </td>
    </tr>
    `
  }

  get Template() {
    return /* html */`
    <tr class="selectable" id="${this.id}">
      <td class="bg-white">${this.title}</td>
      <td class="bg-white">${this.description}</td>
      <td class="bg-white">${this.creator}</td>
      <td class="bg-white"><i class="mdi mdi-${this.closed ? 'check text-success' : 'close text-danger'}"></i></td>
      <td class="on-hover"> 
          <i class="mdi mdi-dots-vertical" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          </i>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li class="dropdown-item" onclick="app.bugsController.openEdit('${this.id}')">Edit</li>
            <li class="dropdown-item" onclick="app.bugsController.deleteBug('${this.id}')">Delete</li>
          </ul>
      </td>
    </tr>`
  }
}