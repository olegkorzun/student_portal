class Cources {
    showCources () {
        let courceObject = sessionStorage.getItem('cources');
        let courceObjectArr = JSON.parse(courceObject);
        let container = document.getElementById("container");
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        let page = document.createElement('div');
        page.className="text-center";
        container.appendChild(page);

        let h1 = document.createElement('h1');
        h1.className = 'page-header';
        page.appendChild(h1);
        let i0 = document.createElement('i');
        i0.className = 'fa fa-book';
        i0.innerText ='  Student Cources';
        h1.appendChild(i0);

        let table = document.createElement('TABLE');
        table.className = 'table table-striped table-hover';
        page.appendChild(table);
        let thead = document.createElement('THEAD');
        table.appendChild(thead);
        let tr = document.createElement('TR');
        tr.className = 'd-flex justify-content-center';
        thead.appendChild(tr);
        
        for (let key in courceObjectArr[0]) {
            let th = document.createElement('th');
            th.className = 'col-2';
            tr.appendChild(th);
            th.appendChild(document.createTextNode(''+ key));
        }
        table.appendChild(thead);
        let tbody = document.createElement('TBODY');
        table.appendChild(tbody);  
        for (let i=0; i<courceObjectArr.length; i++) {
            let tr = document.createElement('TR');
            tr.className = 'd-flex justify-content-center';
            tbody.appendChild(tr);    
            for (let key in courceObjectArr[i]) {
                let td = document.createElement('td');
                td.className = 'col-2';
                tr.appendChild(td);
                td.appendChild(document.createTextNode(''+ courceObjectArr[i][key]));
            }
       }
       table.appendChild(tbody);
    }
}
