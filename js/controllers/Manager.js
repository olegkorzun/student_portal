class Manager {
    static get instance() {
        if (!Manager._instance) {
            Manager._instance = new Manager();
        }
        return Manager._instance;
    }

    initProject() {
        let start = new Login;
        start.login((result)=>{
            if (result) {
                let navbar = new Navbar;
                navbar.show();
                let student = new Student;
                student.showStudentData();
            }
        });
    }
}