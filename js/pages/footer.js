/*
<footer class="sticky-footer bg-white">
<div class="container my-auto">
  <div class="copyright text-center my-auto">
    <span>Copyright &copy; olegkorzun.me 2019</span>
  </div>
</div>
</footer>
*/

class Footer {
    showFooter () {
        let footer = document.getElementById("footer");
        // clean area
        while (footer.firstChild) {
            footer.removeChild(footer.firstChild);
        }
        footer.className = 'sticky-footer bg-light';
        let div = document.createElement('div');
        div.className = 'container my-auto';
        footer.appendChild(div);
        let div1 = document.createElement('div');
        div1.className = 'copyright text-center my-auto';
        div.appendChild(div1);
        let span = document.createElement('span');
        span.innerHTML ='Copyright &copy; olegkorzun.me 2019';
        div1.appendChild(span);
    }
}
