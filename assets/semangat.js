
var nav = document.getElementsByTagName("nav")[0];
var box_nav = document.getElementsByClassName("box-nav")[0];

window.addEventListener('scroll', function(){
    if(window.scrollY >= 450){
        nav.style.position="fixed";
        nav.style.top="0";
        nav.style.left="10px";
        nav.classList.add('animasi-down');
    }
    else{
        nav.classList.remove('animasi-down');
        nav.style.position="static";
    }
});

<script>
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
</script>



var btn_read_more = document.getElementById('btn-read-more');
var btn_read_more2 = document.getElementById('btn-read-more2');
var btn_read_more3 = document.getElementById('btn-read-more3');

var artikel_1 = document.getElementById('artikel1');
var more_1 = document.getElementById('more1');

var artikel_2 = document.getElementById('artikel2');
var more_2 = document.getElementById('more2');

var artikel_3 = document.getElementById('artikel3');
var more_3 = document.getElementById('more3');

function moreFunction1(){
    if(more_1.style.display === "none"){
        more_1.style.display = "inline";
        artikel_1.style.display = "none";
        btn_read_more.innerHTML="Baca Selengkapnya";
    }else{
        more_1.style.display = "none";
        artikel_1.style.display = "inline";
        btn_read_more.innerHTML = "Sembunyikan";
    }
}

function moreFunction2(){
    if(more_2.style.display === "none"){
        more_2.style.display = "inline";
        artikel_2.style.display = "none";
        btn_read_more2.innerHTML="Baca Selengkapnya";
    }else{
        more_2.style.display = "none";
        artikel_2.style.display = "inline";
        btn_read_more2.innerHTML = "Sembunyikan";
    }
}

function moreFunction3(){
    if(more_3.style.display === "none"){
        more_3.style.display = "inline";
        artikel_3.style.display = "none";
        btn_read_more3.innerHTML="Baca Selengkapnya";
    }else{
        more_3.style.display = "none";
        artikel_3.style.display = "inline";
        btn_read_more3.innerHTML = "Sembunyikan";
    }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

