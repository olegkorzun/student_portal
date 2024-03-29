class APIRequest {
    constuctor (request,data) {
        this.data = data;
        this.request = request;
    }
    // static class mode
    static get instance() {
        if (!APIRequest._instance) {
            APIRequest._instance = new APIRequest();
        }
        return APIRequest._instance;
    }
    // GET request 
    getRequest (callback) {
        let req = new XMLHttpRequest();  
        req.open("GET", this.request, true); 
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.onreadystatechange = () => {
            if (req.readyState == 4) {
                this.data = req.response;
                if (req.status == 200) {
                    console.log('API request success. Status: ', req.status, + ' ' + req.statusText);
                    console.log(this.data);
                    callback(true,this.data);
                } else {
                    console.log('API request Error: ',req);
                    callback(false,req.status);
                }
            }
        }
        req.send(null);
    }
    // POST request...
}