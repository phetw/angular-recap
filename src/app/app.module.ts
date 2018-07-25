import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [AppComponent, NavbarComponent, AboutComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
