
class Student {

  showStudentData () {

    //Prepare Data
    let studentObject = sessionStorage.getItem('student');
    let studentObjectArr = JSON.parse(studentObject);
    let courceObject = sessionStorage.getItem('cources');
    let courceObjectArr = JSON.parse(courceObject);
    let calendarObject = sessionStorage.getItem('calendar');
    let calendarObjectArr = JSON.parse(calendarObject);
    calendarObjectArr.sort(function (a, b) {
      if (a.sessionDate > b.sessionDate) {
        return 1;
      }
      if (a.sessionDate < b.sessionDate) {
        return -1;
      }
      return 0;
    });

    //Clean Area
    let container = document.getElementById('container');
    while (container.firstChild) {
       container.removeChild(container.firstChild);
    }

    //Header
    let div = document.createElement('div');
    div.className='text-center';
    container.appendChild(div);
    let h1 = document.createElement('h1');
    h1.className = 'page-header';
    div.appendChild(h1);
    let i0 = document.createElement('i');
    i0.className = 'fa fa-file';
    i0.innerText ='  Student Data';
    h1.appendChild(i0);

    // Student Content
    let row = document.createElement('div');
    row.className='row justify-content-center';
    div.appendChild(row);
    let col = document.createElement('div');
    col.className='col-md-4 mb-4';
    row.appendChild(col);
    let card = document.createElement('div');
    card.className='card text-left shadow h-100 py-2';
    col.appendChild(card);
    // Student Data
    for (let key in studentObjectArr[0]) {
      let p = document.createElement('p');
      card.appendChild(p);
      if (key == 'registeryDate') {
        p.appendChild(document.createTextNode(''+ key + ' : '+studentObjectArr[0][key].slice(0,10)));
      } else {
        p.appendChild(document.createTextNode(''+ key + ' : '+studentObjectArr[0][key]));
      }
    }
    //<span style="color:blue;">THIS</span>

    // Student Analytics
    col = document.createElement('div');
    col.className='col-md-4 mb-4';
    row.appendChild(col);
    card = document.createElement('div');
    card.className='card shadow h-100 py-2';
    col.appendChild(card);
    
    // Study in progress
    let prValue = 0;
    for (let i = 0; i < courceObjectArr.length; i++) {
      if (courceObjectArr[i].examMark != 0 || courceObjectArr[i].projectMark != 0) {
        prValue++;
      }
    }
    let procent = Math.trunc((prValue / courceObjectArr.length) * 100);
    let p = document.createElement('p');
    card.appendChild(p);
    p.appendChild(document.createTextNode('Study in progress'));
    let progress = document.createElement('div');
    progress.className='progress';
    card.appendChild(progress);
    let progressBar = document.createElement('div');
    progressBar.className='progress-bar';
    progressBar.style = 'width: '+procent+'%;';
    progressBar.innerText = procent+'%';
    progress.appendChild(progressBar);

    //Average grade for exams
    let mark = 0;
    let markConnt = 0;
    for (let i = 0; i < courceObjectArr.length; i++) {
      if (courceObjectArr[i].examMark != 0 ) {
        mark += courceObjectArr[i].examMark;
        markConnt ++ ;
      }
      if (courceObjectArr[i].projectMark != 0) {
        mark += courceObjectArr[i].projectMark;
        markConnt ++ ;
      }
    }
    procent = Math.trunc( mark / markConnt);
    p = document.createElement('p');
    card.appendChild(p);
    p.appendChild(document.createTextNode('Average grade for exams'));
    progress = document.createElement('div');
    progress.className='progress';
    card.appendChild(progress);
    progressBar = document.createElement('div');
    progressBar.className='progress-bar bg-success';
    progressBar.style = 'width: '+ procent +'%;';
    progressBar.innerText = procent;
    progress.appendChild(progressBar);

    // Next lesson
    let datetime = moment();
    for (let i=0; i<calendarObjectArr.length; i++) {
      if (calendarObjectArr[i].sessionDate.slice(0, 10) >= datetime.format('YYYY-MM-DD')) {
        p = document.createElement('p');
        card.appendChild(p);
        p.appendChild(document.createTextNode('Next lesson'));
        p = document.createElement('p');
        card.appendChild(p);
        p.appendChild(document.createTextNode(''+calendarObjectArr[i].sessionDate.slice(0, 10)));
        p = document.createElement('p');
        card.appendChild(p);
        p.appendChild(document.createTextNode('' + calendarObjectArr[i].code + ' ' + calendarObjectArr[i].teacher));
        break;
      }
  }

  }
}
