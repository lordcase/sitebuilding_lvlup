/*OUT OF ORDDER, RECALC TEXTBOX SIZES*/
function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

/*MOBILE MENU PRIME*/
function openMobileMenu(toggle) {
	document.getElementById(toggle).classList.toggle('animate')
	document.getElementById('header_nav').classList.toggle('animate')
}


/*SEARCH STATUS CHANGES, ACTIVE AND SEARCH RESULTS*/
const search = document.getElementById("header_search")
const searchField = document.getElementById("searchField")
searchField.addEventListener("focus", (e)=>{
	search.classList.add("active")
	if (!search.classList.contains("results"))
		search.classList.add("latest")
})
searchField.addEventListener("blur", (e)=>{
	search.classList.remove("active")
	search.classList.remove("latest")
})
searchField.addEventListener("input", (e)=>{
	if (searchField.value.length > 0) {
		search.classList.remove("latest")
		search.classList.add("results")
	}else{
		search.classList.add("latest")
		search.classList.remove("results")
	}
})


/*ADD ACTIVE CLASS TO CURRENT MENU*/
document.getElementById("account").addEventListener("click", (e)=>{
	document.getElementById("accountnav_main").classList.toggle("active")
})

/*MENU UNDERLINE STUFF*/
const target = document.querySelector(".target");
const links = document.querySelectorAll(".mainnav_item a");
const items = document.querySelectorAll(".mainnav_item");
window.addEventListener("resize", resizeFunc);

/*ADD EVENT LISTENER FOR CHANGE MENU*/
for (let i = 0; i < links.length; i++) {
//  links[i].addEventListener("click", (e) => e.preventDefault());
  items[i].addEventListener("click", changeMenuFunc);
}
/*ONLOAD TRIGGER CLICK ON ACTIVE MENU TO TRIGGER UNDERLINE*/
for (let i = 0; i < links.length; i++) {
  if (items[i].classList.contains("active")) {
    items[i].click()
  }
}


/*CHANGE ACTIVE MENU*/
function changeMenuFunc() {
  for (let i = 0; i < links.length; i++) {
    if (items[i].classList.contains("active")) {
      items[i].classList.remove("active");
    }
  }

  this.classList.add('active')
	if (screen.width >700 && screen.width <= 1300)
		document.getElementById("header_nav").classList.toggle("medactive")
   
  const width = this.getBoundingClientRect().width;
  const height = this.getBoundingClientRect().height;
  const left = this.getBoundingClientRect().left;
  const top = this.getBoundingClientRect().top;
 
  target.style.width = `${width}px`;
  target.style.height = `${height}px`;
  target.style.left = `${left}px`;
  target.style.top = `${top}px`;
  target.style.transform = "none";
}

/*RESIZE DETECT FOR MAIN NAV*/
function resizeFunc() {
  const active = document.querySelector(".mainnav_item.active");
   
  if (active) {
    const left = active.getBoundingClientRect().left + window.pageXOffset;
    const top = active.getBoundingClientRect().top + window.pageYOffset;
 
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
  }
}


/*CHECKLIST OPEN/CLOSE*/
function addOpen(a) {
	console.log(a, a.firstChild)
 	a.firstElementChild.classList.toggle("closed")
 	a.parentNode.parentNode.parentNode.classList.toggle("closed")
}

function btfAddOpen(a) {
	console.log(a, a.parentNode.parentNode.parentNode)
 	a.firstElementChild.firstElementChild.classList.toggle("closed")
 	a.parentNode.parentNode.classList.toggle("closed")
}


/*VEHICLE EXPAND&CLOSE*/

document.getElementById("vehicle_toggle").addEventListener("click", ()=>{
	document.getElementById("content_grid").classList.toggle("vehicle_expanded")
	document.getElementById("vehicle_toggle_expand").classList.toggle("show")
	document.getElementById("vehicle_toggle_close").classList.toggle("show")
})