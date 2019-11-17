class Navbar {

    show () {
        let page = document.getElementById("menu");
        // clean area
        while (page.firstChild) {
            page.removeChild(page.firstChild);
        }
        // navigation
        let nav = document.createElement('nav');
        nav.className = 'navbar navbar-expand-lg navbar-light bg-light';
        page.appendChild(nav);
        // navbar-brand
        let a = document.createElement('a');
        a.className = 'navbar-brand';
        a.href = '#';
        nav.appendChild(a);
        let img = document.createElement('img');
        img.className = 'd-inline-block align-top';
        img.src = 'img/rt.jpg';
        img.width = '50';
        a.appendChild(img);

        //Collaps 
        let button = document.createElement('button');
        button.className="navbar-toggler";
        button.type="button";
        button.setAttribute("data-toggle","collapse");
        button.setAttribute("data-target","#navbarNavAltMarkup");
        button.setAttribute("aria-controls","navbarNavAltMarkup");
        button.setAttribute("aria-expanded","false");
        button.setAttribute("aria-label","Toggle navigation");
        nav.appendChild(button);
        let span = document.createElement('span');
        span.className="navbar-toggler-icon";
        button.appendChild(span);

        // Navbar
        let div = document.createElement('div');
        div.className = 'collapse navbar-collapse';
        div.id = 'navbarNavAltMarkup';
        nav.appendChild(div);
        let a1 = document.createElement('a');
        a1.className = 'nav-item nav-link student';
        a1.href = '#';
        a1.innerText ='Student';
        div.appendChild(a1);
        let a2 = document.createElement('a');
        a2.className = 'nav-item nav-link cources';
        a2.href = '#';
        a2.innerText ='Courses';
        div.appendChild(a2);
        let a3 = document.createElement('a');
        a3.className = 'nav-item nav-link calendar';
        a3.href = '#';
        a3.innerText ='Calendar';
        div.appendChild(a3); 
    }
}