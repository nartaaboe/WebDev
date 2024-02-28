import { Component } from '@angular/core';
import {AppModule} from "../app.module";

@Component({
  selector: 'app-testt',
  standalone: true,
    imports: [
        AppModule
    ],
  templateUrl: './testt.component.html',
  styleUrl: './testt.component.css'
})
export class TesttComponent {

}
