import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nameforge';

  currentPage: string = 'home';

  navToPage(page: string) {
    console.log(this.currentPage)
    if (page && page !== undefined) {
      this.currentPage = page
    }
    else {
      console.error("No param given for page navigation! Cannot navigate!")
    }
    console.log(this.currentPage)
  }
}

