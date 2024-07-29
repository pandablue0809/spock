const scrollElements = document.querySelectorAll(".aos-init");

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
  element.classList.add("aos-animate");
};

const hideScrollElement = (element) => {
  element.classList.remove("aos-animate");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener('scroll', () => {
  throttle(handleScrollAnimation, 250);
})

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

window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var headerContentHeight = header.offsetHeight;
  if (window.scrollY >= headerContentHeight) {
    header.classList.add('position-fixed');
  } else {
    header.classList.remove('position-fixed');
  }
});

document.getElementById('heading-toggler').addEventListener('click', function() {
  var content = document.getElementById('heading-menu');
      content.classList.add('show-menu');
  });
  document.querySelectorAll('.heading-link').forEach(button => {
    button.addEventListener('click', function() {
      var content = document.getElementById('heading-menu');
          content.classList.remove('show-menu');
      });
  })

  document.getElementById('heading-toggler-remove').addEventListener('click', function() {
    var content = document.getElementById('heading-menu');
        content.classList.remove('show-menu');
    });

        document.querySelectorAll('.accordion-button').forEach((button, index) => {
            button.addEventListener('click', () => {             
                
                // Toggle the aria-expanded attribute
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                button.setAttribute('aria-expanded', !isExpanded);
                button.classList.toggle('collapsed')
                document.querySelectorAll('.accordion-collapse').forEach((collapse, key) => {
                    if (index !== key) {
                        collapse.classList.remove('show');
                        collapse.previousElementSibling.querySelector('button').setAttribute('aria-expanded', 'false');
                    } else {
                      collapse.classList.toggle('show')
                    }
                });
                document.querySelectorAll('.accordion-button').forEach((val, i) => {
                  if (index !== i) {
                      val.classList.add('collapsed');
                      
                  } 
              });
            });
        });