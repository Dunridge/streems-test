import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {HeaderComponent} from './components/header/header.component';
import {UsersService} from './services/users.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {AppLayoutComponent} from './app-layout/app-layout.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from './store/effects/users.effects';
import {usersReducer} from './store/reducers/users.reducer';
import {postsReducer} from './store/reducers/posts.reducer';
import {PostsEffects} from './store/effects/posts.effects';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    HeaderComponent,
    FooterComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    // TODO: add StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}) to debug
    StoreModule.forRoot({ users: usersReducer, posts: postsReducer }),
    EffectsModule.forRoot([UsersEffects, PostsEffects])
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
