class Routes {

    ListenNavbarRoutes () {
        // Listen fore Menu
        document.getElementById('navbarNavAltMarkup').onclick = (event) => {
            if (event.target.className == 'nav-item nav-link student') {
                let student = new Student;
                student.showStudentData();
            }  else if (event.target.className == 'nav-item nav-link cources') {
                let cources = new Cources;
                cources.showCources();
            } else if (event.target.className == 'nav-item nav-link calendar') {
                let calendar = new Calendar;
                let data = sessionStorage.getItem('calendar');
                calendar.data = JSON.parse(data);
                //Sort Data
                calendar.data.sort(function (a, b) {
                    if (a.sessionDate > b.sessionDate) {
                        return 1;
                    }
                    if (a.sessionDate < b.sessionDate) {
                        return -1;
                    }
                    return 0;
                    });
                calendar.calendar();
            }
        }
    }
}