var protoNames = [
// 'Nessa Nguyen',
'Jeff Winkler',
'John Murphy',
'Jeff Drakos',
'Rebecca Strong',
'Gardner Lonsberry' ,
'Jonathan Gean',
'Nathaniel Tuvera',
'Tim Hannes',
'Aziz Hasanov',
// 'Chris Heuberger',
'Dmitry Shamis' ,
// 'Corey Leveen',
'Paul Hiam',
'Steven Doran',
// 'Ben Karl',
'Kristen Tonga',
'Wake Lankard',
'Carlos Pichardo' ,
'Paul Gasbarra',
'Andrea Trapp'
];

var protoObjects = [
  {name: 'Nessa Nguyen',
   intro: 'Nessa came to NYC to pursue her love for passion but soon turned to digital marketing and web development. She enjoys making beautiful designs, solving problems and enhancing her skills as a full-stack developer.',
   portfolio: 'http://nessanguyen.com',
   github: 'https://github.com/myfashionhub',
   twitter: 'http://www.twitter.com/_Myfashionhub',
   email: 'v.nessa.nguyen@gmail.com',
   image: '../images/protos/Nessa.jpg'},
  {name: 'Corey A. G. Leveen',
   intro: 'Corey is an entrepreneur and recent RPI graduate whose interests lie at the intersection of technology, science, and business. A Florida native, Corey is a lover of big ideas and is passionate about developing innovative products that improve lives.',
   portfolio: 'http://leveen.co',
   github: 'https://github.com/mntj',
   twitter: 'http://www.twitter.com/coreyleveen',
   email: 'coreyleveen@gmail.com',
   image: '../images/protos/Corey.jpg'},
  {name: 'Ben Karl',
   intro: 'A public relations veteran, Ben is learning to build technology, not just talk about it.',
   portfolio: 'http://benrkarl.com',
   github: 'https://github.com/BenRKarl',
   twitter: 'http://www.twitter.com/BenKarl',
   email: 'benrkarl@gmail.com',
   image: '../images/protos/Ben.jpg'},
  {name: 'Chris Heuberger',
   intro: 'Coming from a career in graphic design, Chris has always been interested in how information is organized and presented to convey a message or to create something amazing. After an incredible experience at GA, Chris hopes to build on this passion and is excited to take on his next challenge as a full-stack web developer.',
   portfolio: 'http://www.chrisheuberger.com',
   github: 'https://github.com/chrisbup',
   twitter: 'http://www.twitter.com/chrisbup',
   email: 'christopherheuberger@gmail.com',
   image: '../images/protos/Chris.jpg'},
  {name: 'Dmitry Shamis',
   intro: "Dmitry is a former entertainment professional who wanted to go from managing creative talent to being the creative talent. He is passionate about all things technology, sports and entertainment and is looking forward to utilizing his newfound programming skills to help build the future of the internet. WDI has changed Dmitry's life and if you'd like to learn more, please feel free to contact him directly.",
   portfolio: 'http://www.dmitryshamis.com',
   github: 'https://github.com/dshamis317',
   twitter: 'http://www.twitter.com/Diiimmmaaa',
   email: 'dshamis317@gmail.com',
   image: '../images/protos/Dmitry.jpg'},
  {name: 'Paul Hiam',
   intro: 'Paul has a background in digital media and has worked primarily with non-profits and social ventures. He recently moved to New York to attend ITP at Tisch. When Paul is not dreaming up web applications, he enjoys rock climbing and making music.',
   portfolio: 'http://www.paulhiam.com',
   github: 'https://github.com/paulh1am',
   twitter: '',
   email: 'p.s.hiam@gmail.com',
   image: '../images/protos/PaulH.jpg'},
  {name: 'Nate Tuvera',
   intro: "Nate is a former chemist from from New Jersey, who decided to mix things up and pursue a new field.  He's always had an interest and passion for technology and is now on following that path.  He looks forward to putting his new skills to use and building a new, exciting career in web development.",
   portfolio: 'http://www.natetuvera.com',
   github: 'https://github.com/ntuvera',
   twitter: 'http://www.twitter.com/ntuvera',
   email: 'ntuvera@gmail.com',
   image: '../images/protos/Nate.jpg'},
  {name: 'Steven Doran',
   intro: "A year ago, Steven was defending his doctoral dissertation in communciations and media studies. Tired of simply reading about technology, he enrolled in WDI to learn how to create cool things for the web. Now he's making all the things he spent so many hours reading about as a PhD student. He knits like a fiend.",
   portfolio: 'http://www.askmeaboutmyknitting.com',
   github: 'https://github.com/pantsonsteven',
   twitter: '',
   email: 'pantsonsteven@gmail.com',
   image: '../images/protos/Steven.jpg'},
  {name: 'Aziz Hasanov',
   intro: "Aziz is sure about two things in life… technology is his life’s biggest passion and he wants to turn that passion into his profession. He joined GA for that very reason. He is a big fan of clean design, well formatted code and Google. He plays tennis and trades options. Aziz constantly challenges himself as a web developer and always seeks new opportunities to improve. With the powers he now possesses he believes he can change the world one line of code at a time.",
   portfolio: 'http://aziz-ka.github.io/',
   github: 'http://github.com/aziz-ka',
   twitter: '',
   email: 'hasanov-aziz@gmail.com',
   image: '../images/protos/Aziz.jpg'},
  {name: 'Rebecca Strong',
   intro: "Trained in foreign languages, which makes her very curious about code, Rebecca is able to translate complex ideas into clear English for broad understanding. She loves using the team skills honed in her publishing career, where she worked with writers to develop and build ideas into powerful means of communication. An endurance triathlete, Rebecca is coming home for her 1st NYC marathon.",
   portfolio: '',
   github: 'https://github.com/rebecca50',
   twitter: 'http://www.twitter.com/becca100050',
   email: 'rebeccastrong50@gmail.com',
   image: '../images/protos/Rebecca.jpg'},
  {name: 'Tim Hannes',
   intro: "Tim is a creative professional who decided to dive into WDI after working in operations at an online wholesaler. He enjoys combining his passion for full-stack development, with his design skills to create beautiful user experiences. Outside of work, he enjoys listening to live music, and anything outdoors.",
   portfolio: 'http://thannes30.github.io/',
   github: 'https://github.com/thannes30/',
   twitter: 'http://twitter.com/timhannes',
   email: 'timhannes3@gmail.com',
   image: '../images/protos/Tim.jpg'},
  {name: 'Gardner Lonsberry',
   intro: "Gardner has worked in the hospitality business prior to pursuing his career in web development. Outside of his time spent coding, he is compelled to think of ways to refactor his code and learn concepts in programming to tackle challenges both old and new.  He stands confidently behind his coding skills and resolve to quickly deploy solutions.  But most importantly Gardner invests himself in the problem being solved as well as the solution.",
   portfolio: 'http://www.gardnerlonsberry.com',
   github: 'https://github.com/glonsberry',
   twitter: 'http://twitter.com/glonsberry',
   email: 'gardnerlonsberry@gmail.com',
   image: '../images/protos/Gardner.jpg'},
  {name: 'Kristen Tonga',
   intro: "Kristen can make bread dragons. She is also growing cauliflower. Certified as an Wilderness-EMT and as a TEFL instructor, with a Vassar degree in Poli Sci, Kristen spent three years on the streets of Central America and West Africa. She found WDI in her pursuit of efficacious international development work. She is turned on by effective and beautiful design, and reads about UX in her spare time.",
   portfolio: 'http://krtonga.github.io/',
   github: 'https://github.com/krtonga',
   twitter: '',
   email: 'kristen.tonga@gmail.com',
   image: '../images/protos/Kristen.jpg'},
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
