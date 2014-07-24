var protoNames = [
'Nessa Nguyen',
'Jeff Winkler',
'John Murphy',
'Jeff Drakos',
'Rebecca Strong',
'Gardner Lonsberry' ,
'Jonathan Gean',
'Nathaniel Tuvera',
'Tim Hannes',
'Aziz Hasanov',
'Chris Heuberger',
'Dmitry Shamis' ,
'Corey Leveen',
'Paul Hiam',
'Steven Doran',
'Ben Karl',
'Kristen Tonga',
'Wake Lankard',
'Carlos Pichardo' ,
'Paul Gasbarra',
'Andrea Trapp'
];

var protoObjects = [
  {
   name: 'Nessa Nguyen',
   intro: 'Nessa came to NYC to pursue her love for passion but soon turned to digital marketing and web development. She enjoys making beautiful designs, solving problems and enhancing her skills as a full-stack developer.',
   portfolio: 'http://nessanguyen.com',
   github: 'https://github.com/myfashionhub',
   twitter: 'http://www.twitter.com/_Myfashionhub',
   email: 'v.nessa.nguyen@gmail.com',
   image: '../images/protos/Nessa.jpg'
  },
]

//Create the student collection
var studentCollection = new StudentCollection();

function addNames (){
  _.each(protoNames, function(name){
    var studentModel = new Student({name: name});
    studentCollection.add(studentModel);
    console.log(name + ' was added to studentCollection');
  })
}

$(function(){
  addNames();
})
