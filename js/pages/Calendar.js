class Calendar  {
    constructor (data) {
        this.data = data;
        this.datetime = null; 
    }

    showCalendar () {
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
        i0.className = 'fa fa-calendar';
        i0.innerText ='  Student Calendar';
        h1.appendChild(i0);
        let h4 = document.createElement('h4');
        h4.id = 'calendar-month';
        page.appendChild(h4);

        let calendarToolbar = document.createElement('div');
        calendarToolbar.className = "calendar-toolbar";
        calendarToolbar.id = "calendar-toolbar";
        page.appendChild(calendarToolbar); 

        let button1 = document.createElement('button');
        button1.className = 'btn btn-default';
        button1.id = 'btn-today';
        calendarToolbar.appendChild(button1);        
        let i1 = document.createElement('i');
        i1.className = 'fa fa-chevron-down';
        button1.appendChild(i1);

        let button2 = document.createElement('button');
        button2.className = 'btn btn-default';
        button2.id = 'btn-prev';
        calendarToolbar.appendChild(button2);        
        let i2 = document.createElement('i');
        i2.className = 'fa fa-chevron-left';
        button2.appendChild(i2);

        let button3 = document.createElement('button');
        button3.className = 'btn btn-default';
        button3.id = 'btn-next';
        calendarToolbar.appendChild(button3);        
        let i3 = document.createElement('i');
        i3.className = 'fa fa-chevron-right';
        button3.appendChild(i3);

        let table = document.createElement('TABLE');
        table.className = 'table table-bordered';
        table.id = 'calendar-table';
        page.appendChild(table);
    }

    render () {
        let datetime = this.datetime.clone(),
        month = datetime.month();
        let calendarMonth = document.getElementById('calendar-month');
        calendarMonth.innerText = 'On '+ datetime.format('MMMM YYYY');

        datetime.startOf('month').startOf('week');

        let table = document.getElementById('calendar-table');
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

        let tbody = document.createElement('TBODY');
        table.appendChild(tbody);
        let week = 0, i;
        while (week < 6) {
          let tr = document.createElement('tr');
          tr.className = 'd-flex justify-content-center calendar-month-row';
          for (i = 0; i < 7; i++) {
            let td = document.createElement('td');
            td.className = 'col-1 calendar-day';
            td.appendChild(document.createTextNode(datetime.format('D')));
            td.appendChild(document.createElement('br'));         
            for (let i=0; i<this.data.length; i++) {
                if (this.data[i].sessionDate.slice(0, 10) == datetime.format('YYYY-MM-DD')) {
                    td.appendChild(document.createTextNode('' + this.data[i].code + ' ' + this.data[i].teacher));
                    break;
                }
            }
            if (month !== datetime.month()) {
              td.className = 'col-1 calendar-prior-months-date';
            }
            let curDate = moment();
            if (datetime.format('MM DD') == curDate.format('MM DD')) {
                td.className = 'col-1 table-primary';
            }
            tr.appendChild(td);
            datetime.add(1, 'day');
          }
          tbody.appendChild(tr);
          week++;
        }
    }
    
    calendar () {
        this.showCalendar();
        this.datetime = moment();
        this.render();

        document.getElementById('calendar-toolbar').onclick = (event) => {
            if (event.target.className == 'fa fa-chevron-down') {
                this.datetime = moment();
                this.render();                    
            }  
            else if (event.target.className == 'fa fa-chevron-left') {
                this.datetime.startOf('month').subtract(1, 'day');
                this.render();
            }
            else if (event.target.className == 'fa fa-chevron-right') {
                this.datetime.endOf('month').add(1, 'day');
                this.render();
            }
        }
    }
}