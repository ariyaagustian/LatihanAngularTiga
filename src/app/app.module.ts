import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BukuComponent } from './buku/buku.component';
import { BukuAddComponent } from './buku/buku-add/buku-add.component';
import { BukuListComponent } from './buku/buku-list/buku-list.component';
import { AnggotaComponent } from './anggota/anggota.component';
import { AnggotaListComponent } from './anggota/anggota-list/anggota-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AnggotaAddComponent } from './anggota/anggota-add/anggota-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BukuComponent,
    BukuAddComponent,
    BukuListComponent,
    AnggotaComponent,
    AnggotaListComponent,
    AnggotaAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
