export class Bug {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.description = data.description
    this.closed = data.closed
    this.creator = data.creator
  }

  get Template() {
    return /* html */`
    <tr class="selectable">
      <td class="bg-white">${this.title}</td>
      <td class="bg-white">${this.description}</td>
      <td class="bg-white">${this.creator}</td>
      <td class="bg-white"><i class="mdi mdi-${this.closed ? 'check text-success' : 'close text-danger'}"></i></td>
      <td class="on-hover"> 
        <div class="dropdown">
        <i class="mdi mdi-dots-vertical dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        </i>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </td>
      
    </tr>`
  }
}