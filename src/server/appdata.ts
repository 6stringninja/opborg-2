
export class BreadCrumb {
    constructor(public title = '', public url = '', public selected = false) {

    }
}
export class MenuItem {
    constructor(
        public title = '',
        public url = '',
        public icon = '',
        public selected = false
    ) {

    }
}
export class PageData {
    appName = 'OP-Borg';
    breadcrumbs: BreadCrumb[] = [];
    menuitems: MenuItem[] = [];
    page = 'Dashboard';

    title = 'OP-BORG Manager';
    constructor() {
        this.breadcrumbs.push(new BreadCrumb("Dashboard", "#dashboard"));
        this.breadcrumbs.push(new BreadCrumb("Overview",'',true));
        this.menuitems.push (new MenuItem('Dashboard','/','fa-tachometer-alt',true));
        this.menuitems.push(new MenuItem("Miners",'/miners','fa-folder',false));
        this.menuitems.push(new MenuItem("Stats",'/stats','fa-chart-area',false));
        this.menuitems.push(new MenuItem("Settings",'/settings','fa-cog',false));
    }
}

