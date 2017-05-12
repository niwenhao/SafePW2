import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: "sp-common-navbar",
  templateUrl: 'common-navbar.html'
})
export class CommonNavbar {
  @Input() subject: string;
  @Output() logout: EventEmitter<number>;

  do_logout() {
    if (this.logout) {
      this.logout.emit(0);
    }
  }
}
