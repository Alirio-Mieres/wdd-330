let table = document.querySelector("ol");

const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html"
  },

{
  label: "Week2 notes",
  url: "week2/index.html"
},
{
  label: "Week3 notes",
  url: "week3/index.html"
},

{
  label: "Week4 notes",
  url: "week4/index.html"
}];


for (let i = 0; i < links.length; i++ ) {

  let label = document.createElement('li');

  let url = document.createElement('a');

  url.innerHTML = links[i].label;

  url.setAttribute( 'href', links[i].url);

  label.appendChild(url);
  table.appendChild(label);
};

