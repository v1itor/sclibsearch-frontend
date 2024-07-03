import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    template: '<router-outlet></router-outlet>',
    imports: [RouterOutlet, LoginComponent, HttpClientModule, FormsModule]
})
export class AppComponent {
  title = 'sc-libsearch';
}
