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

    static REGISTER() {
        return 'LoginActions.REGISTER';
    }

    static REGISTER_SUCCESS() {
        return 'LoginActions.REGISTER_SUCCESS';
    }

    static REGISTER_FAILED() {
        return 'LoginActions.REGISTER_FAILED';
    }

    static LOGOUT() {
        return 'LoginActions.LOGOUT';
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

    static register(aEmail, aPassword) {
        return { 
            type: LoginActions.REGISTER, 
            payload: {
                email: aEmail,
                password: aPassword
            } 
        }
    }

    static registerSuccessful(aPayload) {
        return { 
            type: LoginActions.REGISTER_SUCCESS,
            payload: aPayload
        }
    }

    static registerFailed(aError) {
        return { 
            type: LoginActions.REGISTER_FAILED,
            payload: aError
        }
    }

    static logout() {
        return {
            type: LoginActions.LOGOUT
        }
    }
}
