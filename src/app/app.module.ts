import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OtherPageComponent } from './pages/other-page/other-page.component';
import { StickerPageComponent } from './pages/sticker-page/sticker-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SidebarComponent,
    OtherPageComponent,
    StickerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
