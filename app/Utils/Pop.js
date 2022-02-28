export class Pop {

  /**
   * @typedef {{message: string, response:{ data: any}}} AxiosError
   */

  /**
    * @param {string} title The title text.
    * @param {string} text The body text.
    * @param {string} icon 'success', 'error', 'info', 'warning', or 'question'.
    * @param {string} confirmButtonText The text of your confirm button.
    * -----------------------------------
    * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
  */
  static async confirm(title = 'Are you sure?', text = "You won't be able to revert this!", icon = 'warning', confirmButtonText = 'Yes, delete it!') {
    try {
      // @ts-ignore
      const res = await Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmButtonText
      })
      if (res.isConfirmed) {
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }

  /**
   * @param {string} title The title text
   * @param {string} display 'success', 'error', 'info', 'warning', or 'question'.
   * @param {string} position 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
   * @param {number} timer Time in milliseconds.
   * @param {boolean} progressBar Show progress bar or not respectively.
   * -----------------------------------
   * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
   */
  static toast(title = 'Warning!', display = 'warning', position = 'top-end', timer = 3000, progressBar = true) {
    // @ts-ignore
    Swal.fire({
      title: title,
      icon: display,
      position: position,
      timer: timer,
      timerProgressBar: progressBar,
      toast: true,
      showConfirmButton: false
    })
  }
  /**
   * @param {Error | AxiosError} error Handles thrown errors and will unwrap Axios errors.
   */
  static error(error) {
    // @ts-ignore
    let message = error.response?.data || error.message
    Pop.toast(message, 'error')
  }
}