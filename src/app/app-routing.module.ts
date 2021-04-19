import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { OtherPageComponent } from './pages/other-page/other-page.component';
import { StickerPageComponent } from './pages/sticker-page/sticker-page.component';

const routes: Routes = [
  {
    component: MainPageComponent,
    path: 'main'
  },
  {
    component: StickerPageComponent,
    path: 'sticker'
  },
  {
    component: OtherPageComponent,
    path: 'other'
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
