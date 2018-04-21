import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DemoHomeComponent } from './demo-home/demo-home.component';

import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication/authentication.service';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		DemoHomeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing
	],
	providers: [
		AuthGuard,
		AuthenticationService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
