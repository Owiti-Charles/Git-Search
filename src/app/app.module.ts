import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ReopsitoriesComponent } from './reopsitories/reopsitories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserserviceService } from './userservice.service';
import { HighlightDirective } from './highlight.directive';
import { DatePipePipe } from './date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    SearchFormComponent,
    ReopsitoriesComponent,
    NotfoundComponent,
    HighlightDirective,
    DatePipePipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
