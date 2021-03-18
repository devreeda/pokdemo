import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { PokemondetailComponent } from './pokemondetail/pokemondetail.component';

@NgModule({
  declarations: [AppComponent, MyComponentComponent, FilterPokemonPipePipe, PokemondetailComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
