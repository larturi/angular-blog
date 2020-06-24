// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

// Services
import { TranslateService } from './services/translate.service';
import { ConfigService } from './services/config.service';

// Pipes
import { TranslatePipe } from './pipes/translate.pipe';

// Components
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { WidgetComponent } from './components/footer/widget/widget.component';
import { CopyrightComponent } from './components/footer/copyright/copyright.component';
import { CardPostComponent } from './components/content/card-post/card-post.component';
import { PostComponent } from './components/content/post/post.component';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { LeaveCommentComponent } from './components/content/post/leave-comment/leave-comment.component';
import { ListCommentsComponent } from './components/content/post/list-comments/list-comments.component';

// Directives
import { ClickOutsideDirective } from './directives/click-outside.directive';

// Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyARWIPdDM4EyZ85uvfSraX6fvcfIrae0dQ',
  authDomain: 'ddr-blog-2583f.firebaseapp.com',
  databaseURL: 'https://ddr-blog-2583f.firebaseio.com',
  projectId: 'ddr-blog-2583f',
  storageBucket: 'ddr-blog-2583f.appspot.com',
  messagingSenderId: '817380412680',
  appId: '1:817380412680:web:d5ff5dc31ae06f7754b0bd'
};

export function translateFactory(provider: TranslateService) {
  return () => provider.getData();
}

export function configFactory(provider: ConfigService) {
  return () => provider.getData();
}

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    FooterComponent,
    ContentComponent,
    HeaderComponent,
    WidgetComponent,
    CopyrightComponent,
    CardPostComponent,
    PostComponent,
    SanitizePipe,
    LeaveCommentComponent,
    ListCommentsComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgxPaginationModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    },
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
