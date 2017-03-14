/**
 * Created by dkw on 14/03/2017.
 */

/***
 <head>
 .control-group {border: 1px solid transparent;}
 .error {border: 1px solid red;}
 .success {border: 1px solid green;}
 </head>
 */

(function () {
    'use strict';

    angular
        .module('moduleName')
        .component('componentName', {
            template: `
				<form name="$ctrl.ngForm">
					<div class="control-group" ng-class="$ctrl.getCssClasses($ctrl.ngForm.email)">
						<label>E-mail</label>
						<input
								type="text"
								ng-model="$ctrl.user.email"
								name="email"
								required/>

						<span ng-if="$ctrl.showError($ctrl.ngForm.email, 'email')">You masst enter a valid email!</span>
						<span ng-if="$ctrl.showError($ctrl.ngForm.email, 'required')">This field is required!</span>

					</div>
				</form>
			`,
            controller () {
                const $ctrl = this;

                Object.assign($ctrl, {
                    getCssClasses (model) {
                        return {
                            error: model.$invalid && model.$dirty,
                            success: model.$valid && model.$dirty
                        }
                    },
                    showError (model, errorType) {
                        return model.$error[errorType];
                    }
                })
            }
        })
})();
