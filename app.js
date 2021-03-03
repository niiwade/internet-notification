// select all required elements

const box = document.querySelector(".box");
const pop = document.querySelector(".pop");
const wifiIcon = document.querySelector(".icon");
const title = document.querySelector("span");
const subTitle = document.querySelector("p");

window.onload = () => { //once window loads code runs
    function ajax() {
        let xhr = new XMLHttpRequest(); //create new xml objects
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); // send get request to this url
        xhr.onload = (event) => { //once ajax loads
            //if ajax status is  equal to 200 or less than 300 that mean user is getting data from the URL
            // or user is online and should be getting a response status code of 200 
            if (xhr.status == 200 && xhr.status < 300) {
                pop.classList.remove("offline");
                title.innerText = "You are online now";
                subTitle.innerText = "Yo ! Internet is connected";
                wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';

            } else { // user isnt online 
                offline();
            }
        };
        xhr.onerror = () => { //if the URL is incorrect or return a 400 or any other error
            offline();
        };
        xhr.send();
    }

    function offline() { // offline function
        pop.classList.add("offline");
        title.innerText = "You are offline now";
        subTitle.innerText = "Yo ! Internet is down";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
    }


    setInterval(() => {
        ajax(); // call the function
    }, 100);
}