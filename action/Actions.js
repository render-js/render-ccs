export class Actions{

    hooks

    constructor(hooks) {
        this.hooks = hooks;
    }

    changeTheme(theme) {
        this.hooks.changeTheme(theme);
    }

    redirect(url,data){
        this.hooks.redirect(url,data);
    }
}