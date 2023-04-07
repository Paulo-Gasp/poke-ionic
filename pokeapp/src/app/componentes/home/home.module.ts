import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from './home.page';
import { PokemonServiceService } from '../../services/pokemon-service.service';	


@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ PokemonServiceService ]
})
export class HomeModule { }
