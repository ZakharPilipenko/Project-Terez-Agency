const scrollElements = document.querySelectorAll(".reveal");

//initialize throttleTimer as false 
let throttleTimer = false;
const throttle = (callback, time) => {
    //don't run the function while throttle timer is true 
    if (throttleTimer) return;
    
    //first set throttle timer to true so the function doesn't run 
    throttleTimer = true;
    
    setTimeout(() => {
        //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed 
        callback();
        throttleTimer = false;
	}, time);
}

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("active");
};

const hideScrollElement = (element) => {
  element.classList.remove("active");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.10)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => {
  throttle(() => {
    handleScrollAnimation();
  }, 250);
})

/* https://webdesign.tutsplus.com/animate-on-scroll-with-javascript--cms-36671t для информации об прокрутки*/