import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { faMask, faSpinner, faCoffee } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  exports: [FontAwesomeModule]
})
export class IconsModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faMask, faSpinner, faCoffee);
  }
}
