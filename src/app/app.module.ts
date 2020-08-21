import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { GroupComponent } from './component/group/group.component';
import { FansComponent } from './component/fans/fans.component';

const routes = [
    {
        'path': '',
        'component': HomeComponent
    },
    {
        'path': 'group',
        'component': GroupComponent
    },
    {
        'path': 'fans',
        'component': FansComponent
    }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GroupComponent,
    FansComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
