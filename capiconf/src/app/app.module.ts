import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocComponent } from './conferences/shared/coc/coc.component';
import { IncluaTodaPessoaComponent } from './campaigns/inclua-toda-pessoa/inclua-toda-pessoa.component';
import { OnlineComponent } from './conferences/editions/20online/online/online.component';

@NgModule({
  declarations: [
    AppComponent,
    CocComponent,
    IncluaTodaPessoaComponent,
    OnlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
