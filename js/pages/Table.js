class Table {
    showAnyTable () {
        let courceObject = sessionStorage.getItem('calendar');
        let courceObjectArr = JSON.parse(courceObject);
        courceObjectArr.sort(function (a, b) {
            if (a.sessionDate > b.sessionDate) {
              return 1;
            }
            if (a.sessionDate < b.sessionDate) {
              return -1;
            }
            return 0;
        });
        let page = document.getElementById("container");
        while (page.firstChild) {
            page.removeChild(page.firstChild);
        }
        let table = document.createElement('TABLE');
        table.className = 'table';
        page.appendChild(table);
        let thead = document.createElement('THEAD');
        table.appendChild(thead);
        let tr = document.createElement('TR');
        thead.appendChild(tr);
        for (let key in courceObjectArr[0]) {
            let th = document.createElement('th');
            tr.appendChild(th);
            th.appendChild(document.createTextNode(''+ key));
        }
        table.appendChild(thead);
        let tbody = document.createElement('TBODY');
        table.appendChild(tbody);  
        for (let i=0; i<courceObjectArr.length; i++) {
            let tr = document.createElement('TR');
            tbody.appendChild(tr);    
            for (let key in courceObjectArr[i]) {
                let td = document.createElement('td');
                tr.appendChild(td);
                td.appendChild(document.createTextNode(''+ courceObjectArr[i][key]));
            }
       }
       table.appendChild(tbody);
    }
}
