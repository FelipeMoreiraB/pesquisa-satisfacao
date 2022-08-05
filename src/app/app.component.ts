import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, faFaceGrin, faMask, faSpinner } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cardápio';
  constructor(library: FaIconLibrary){
    library.addIcons(faMask, faSpinner, faCoffee, faFaceGrin);
  }
}
