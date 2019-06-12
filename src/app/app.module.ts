import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatDialogModule, MatCardModule, MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  entryComponents: [CreateComponent,EditComponent],
  providers: [DataService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
