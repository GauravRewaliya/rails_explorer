import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["image"]
  zoom = 1

  connect() {
    this.image = document.getElementById("zoomable-image")
  }

  in() {
    this.zoom += 0.1
    this.apply()
  }

  out() {
    this.zoom = Math.max(0.1, this.zoom - 0.1)
    this.apply()
  }

  reset() {
    this.zoom = 1
    this.apply()
  }

  apply() {
    if (this.image) {
      this.image.style.transform = `scale(${this.zoom})`
    }
  }
}
