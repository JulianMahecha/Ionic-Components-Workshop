import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
  { path: 'botones', loadChildren: './pages/botones/botones.module#BotonesPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },  { path: 'check', loadChildren: './pages/check/check.module#CheckPageModule' },
  { path: 'datetime', loadChildren: './pages/datetime/datetime.module#DatetimePageModule' },
  { path: 'fabs', loadChildren: './pages/fabs/fabs.module#FabsPageModule' },
  { path: 'fabs', loadChildren: './pages/fabs/fabs.module#FabsPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
