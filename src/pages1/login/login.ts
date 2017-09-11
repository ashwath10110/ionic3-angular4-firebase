import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthProvider } from '../../providers/auth/auth';

// import { HomePage } from '../home/home';
import { EmailValidator } from '../../validators/email';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-login1',
	templateUrl: 'login.html'
})
export class LoginPage {

	public loginForm: FormGroup;
	public loading: Loading;

	constructor(public navCtrl: NavController, public authData: AuthProvider,
		public formBuilder: FormBuilder, public alertCtrl: AlertController,
		public loadingCtrl: LoadingController) {

		this.loginForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
			password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
		});
	}

	loginUser() {
		if (!this.loginForm.valid) {
			console.log(this.loginForm.value);
		} else {
			this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
				.then(authData => {
					this.navCtrl.setRoot('LoginPage');
				}, error => {
					this.loading.dismiss().then(() => {
						let alert = this.alertCtrl.create({
							message: error.message,
							buttons: [
								{
									text: "Ok",
									role: 'cancel'
								}
							]
						});
						alert.present();
					});
				});

			this.loading = this.loadingCtrl.create({
				dismissOnPageChange: true,
			});
			this.loading.present();
		}
	}

	goToResetPassword() {
		this.navCtrl.push('ResetPasswordPage');
	}

	createAccount() {
		this.navCtrl.push('SignupPage');
	}

}
