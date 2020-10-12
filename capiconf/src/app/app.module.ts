import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocComponent } from './conferences/shared/coc/coc.component';
import { IncluaTodaPessoaComponent } from './campaigns/inclua-toda-pessoa/inclua-toda-pessoa.component';
import { Online2020NovComponent } from './conferences/editions/20online-nov/online/online2020-nov.component';
import { AdiamentoComponent } from './conferences/editions/adiamento/adiamento.component';
import { Capi20SponsorsComponent } from './conferences/editions/20/capi20-sponsors/capi20-sponsors.component';

@NgModule({
  declarations: [
    AppComponent,
    CocComponent,
    IncluaTodaPessoaComponent,
    Capi20SponsorsComponent,
    Online2020NovComponent,
    AdiamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
