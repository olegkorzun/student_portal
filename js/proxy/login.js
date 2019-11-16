class Login {
    loginListen (callback) {
        let frm = document.getElementById("frm");
        frm.addEventListener("submit", (e) => {
            e.preventDefault();
            let email = frm.elements["email"].value;
            let password = frm.elements["password"].value;
            APIRequest.instance.request = "https://rt-students.com/api/getStudent/"+email+"&"+ password;
            APIRequest.instance.getRequest((status,data)=>{
                if (status) {
                    let d = JSON.parse(data);
                    if (d.status) {
                        frm.elements["email"].value ='';
                        frm.elements["password"].value ='';
                        document.getElementById("status").innerHTML = "Error : " + d.reason;
                    } else {
                        sessionStorage.setItem('student', data);
                        APIRequest.instance.request = "https://rt-students.com/api/getCourses/" + password;
                        APIRequest.instance.getRequest((status,data)=>{
                            if (data.length > 0) {
                                sessionStorage.setItem('cources', data);
                                APIRequest.instance.request = "https://rt-students.com/api/getCalendar/" + password;
                                APIRequest.instance.getRequest((status,data)=>{
                                    if (data.length > 0) {
                                        sessionStorage.setItem('calendar', data);
                                        callback(true);
                                    }
                                });        
                            }
                        });
                    }                    
                } else {
                    frm.elements["email"].value ='';
                    frm.elements["password"].value ='';
                    document.getElementById("status").innerHTML = "Error" + data;
                }
            });    
        });
    }
}