export class Bug {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.description = data.description
    this.closed = data.closed
    this.creator = data.creator
  }

  get Template() {
    return `
    <tr class="selectable bg-white ">
      <td>${this.title}</td>
      <td>${this.description}</td>
      <td>${this.creator}</td>
      <td><i class="mdi mdi-${this.closed ? 'check text-success' : 'close text-danger'}"></i></td>
    </tr>`
  }
}