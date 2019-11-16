class Manager {
    static get instance() {
        if (!Manager._instance) {
            Manager._instance = new Manager();
        }
        return Manager._instance;
    }

    initProject() {
        let start = new Login;
        start.loginListen((result)=>{
            if (result) {
                //Start Pages
                let navbar = new Navbar;
                navbar.show();
                let routes = new Routes;
                routes.ListenNavbarRoutes();
                let student = new Student;
                student.showStudentData();
                let footer = new Footer;
                footer.showFooter();
            }
        });
    }
}