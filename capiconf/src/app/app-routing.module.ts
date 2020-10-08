import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocComponent } from './conferences/shared/coc/coc.component';
import { IncluaTodaPessoaComponent } from './campaigns/inclua-toda-pessoa/inclua-toda-pessoa.component';
import { AdiamentoComponent } from './conferences/editions/adiamento/adiamento.component';
import { Online2020NovComponent } from './conferences/editions/20online-nov/online/online2020-nov.component';

const defaultRedirect = 'online';

const routes: Routes = [
  { path: '', redirectTo: defaultRedirect, pathMatch: 'full' },
  {
    path: '2020',
    loadChildren: () =>
      import(`./conferences/editions/20/capybara2020/capybara2020.module`).then(
        m => m.Capybara2020Module,
      ),
  },
  {
    path: '2019',
    loadChildren: () =>
      import(`./conferences/editions/19/capybara2019/capybara2019.module`).then(
        m => m.Capybara2019Module,
      ),
  },
  { path: 'online', component: Online2020NovComponent },
  { path: 'inclua-toda-pessoa', component: IncluaTodaPessoaComponent },
  { path: 'coc', component: CocComponent },
  { path: 'adiamento', component: AdiamentoComponent },
  { path: '**', redirectTo: defaultRedirect },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
