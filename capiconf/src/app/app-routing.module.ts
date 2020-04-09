import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocComponent } from './conferences/shared/coc/coc.component';
import { IncluaTodaPessoaComponent } from './campaigns/inclua-toda-pessoa/inclua-toda-pessoa.component';
import { OnlineComponent } from './conferences/editions/20online/online/online.component';

const routes: Routes = [
  //{ path: '', redirectTo: '2020/inicio', pathMatch: 'full' },
  { path: '', redirectTo: 'online', pathMatch: 'full' },
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
  { path: 'online', component: OnlineComponent },
  { path: 'inclua-toda-pessoa', component: IncluaTodaPessoaComponent },
  { path: 'coc', component: CocComponent },
  { path: '**', redirectTo: '2020/inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
