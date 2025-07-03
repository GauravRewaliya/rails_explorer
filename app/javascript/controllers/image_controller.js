// app/javascript/controllers/image_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  open(event) {
    event.preventDefault()
    const url = this.element.dataset.imageUrl
    Turbo.visit(url, { frame: "image_modal" })
  }
}
