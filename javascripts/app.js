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
'Paul Gasberra',
'Andrea Trapp'
];

//Create the student collection
var studentCollection = new StudentCollection();

addNames = function(){
  _.each(protoNames, function(name){
    var studentModel = new Student({name: name});
    studentCollection.add(studentModel);
    console.log(name + 'was added to studentCollection');
  })
  return studentCollection;
}

$(function(){
  addNames();
})
