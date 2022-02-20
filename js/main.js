let table = document.querySelector("ol");

const links = [
  {
    label: "Week 1 notes",
    url: "week1/index.html"
  },

{
  label: "Week 2 notes",
  url: "week2/index.html"
},
{
  label: "Week 3 notes",
  url: "week3/index.html"
},

{
  label: "Week 4 notes",
  url: "week4/index.html"
},
{
  label: "Week 5 notes",
  url: "week5/index.html"
},

{
  label: "Week 6",
  url: "week6/index.html"
},

{
  label: "Week 7",
  url: "week7/index.html"
}
];


for (let i = 0; i < links.length; i++ ) {

  let label = document.createElement('li');

  let url = document.createElement('a');

  url.innerHTML = links[i].label;

  url.setAttribute( 'href', links[i].url);

  label.appendChild(url);
  table.appendChild(label);
};

