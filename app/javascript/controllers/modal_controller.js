import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  close() {
    const modal = document.getElementById("image_modal")
    if (modal) modal.innerHTML = ""
  }
}
