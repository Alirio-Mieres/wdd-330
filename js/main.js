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
  label: "Week 6 Todo",
  url: "week6/index.html"
},

{
  label: "Week 7 notes",
  url: "week7/index.html"
},
{
  label: "Week 8 notes",
  url: "week8/index.html"
},
{
  label: "Week 9 notes",
  url: "week9/index.html"
},
{
  label: "Week 10 notes",
  url: "week10/index.html",
},
{
  label: "Final Project",
  url: "FinalProject/index.html"
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

