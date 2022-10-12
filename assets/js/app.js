
/// Add active class to Nav //


 /// Contact Form validation code ///
 const form  = document.getElementById('contact-form'); 
 const firstName = document.getElementById('firstname'); 
 const lastName  = document.getElementById('lastname'); 
 const email  = document.getElementById('email'); 
 const message  = document.getElementById('msg'); 
 const locationURLArray = window.location.href.split('/'); 

 



/// Contact Form Reset & Validation ///

if(locationURLArray[3] === 'contact.html'){
    

    form.addEventListener('submit', function handleClick(event) {
      // 👇️ if you are submitting a form (prevents page reload)
      event.preventDefault();

      if(username.value == ''){

      }
    
      form.reset();
    });

}




/// Values For Visitor Counter ///

const COUNT_URL = "https://api.countapi.xyz"
const NAMESPACE = "mkdircode.com"
const KEY = "6f8c1b24-4900-11ed-b878-0242ac120002"

const counter = document.querySelectorAll("span.footer__group-counter-number");
// Logic For Visitor Counter ///
const getCount = async () => {
    const response = await fetch(`${COUNT_URL}/get/${NAMESPACE}/${KEY}`);
    const data = await response.json();
    setValue(data.value);
  };
  
  const incrementCount = async () => {
    const response = await fetch(`${COUNT_URL}/hit/${NAMESPACE}/${KEY}`);
    const data = await response.json();
    setValue(data.value);
  };
  

  
  const setValue = (num) => {
    var str = num.toString().padStart(5, "0");
    for (let index = 0; index < str.length; index++) {
      const element = str[index];
      counter[index].innerHTML = element;
    }
  };
  
  if (localStorage.getItem("hasVisited") == null) {
    incrementCount()
      .then(() => {
        localStorage.setItem("hasVisited", "true");
      })
      .catch((err) => console.log(err));
  } else {
    getCount()
      .catch((err) => console.log(err));
  }
  