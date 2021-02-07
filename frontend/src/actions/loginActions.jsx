export class LoginActions {
    static LOGIN() {
        return 'LoginActions.LOGIN';
    }
    static LOGIN_SUCCESS() {
        return 'LoginActions.LOGIN_SUCCESS';
    }
    static LOGIN_FAILED() {
        return 'LoginActions.LOGIN_FAILED';
    }

    static login(aEmail, aPassword) {
        return { 
            type: LoginActions.LOGIN, 
            payload: {
                email: aEmail,
                password: aPassword
            } 
        }
    }

    static login_successful(aPayload) {
        return { 
            type: LoginActions.LOGIN_SUCCESS,
            payload: aPayload
        }
    }

    static login_failed(aError) {
        return { 
            type: LoginActions.LOGIN_FAILED,
            payload: aError
        }
    }
}
