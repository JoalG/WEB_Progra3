import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserSelectorComponent } from './components/user-selector/user-selector.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ExerciseCardComponent } from './components/exercise-card/exercise-card.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { DifficultyCardComponent } from './components/difficulty-card/difficulty-card.component';
import { SolveExerciseComponent } from './components/solve-exercise/solve-exercise.component';
import { FormExerciseComponent } from './components/form-exercise/form-exercise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CodeEditorModule } from '@ngstack/code-editor';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationControlsComponent } from './components/pagination-controls/pagination-controls.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserSelectorComponent,
    NavbarComponent,
    ExerciseCardComponent,
    CategoryCardComponent,
    DifficultyCardComponent,
    SolveExerciseComponent,
    FormExerciseComponent,
    PaginationControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    CodeEditorModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
