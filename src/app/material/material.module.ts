import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule  } from '@angular/material';
import {MatIconModule  } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatCardModule} from '@angular/material/card'




// export 
 const MaterialComponents = [ 
   MatToolbarModule,MatIconModule,MatButtonModule 
   ,MatAutocompleteModule,MatCardModule
  
  ];



@NgModule({
  imports: [ MaterialComponents ],
  exports:[MaterialComponents]
})
export class MaterialModule {}
