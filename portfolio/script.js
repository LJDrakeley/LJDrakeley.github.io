 /* FOLLOWING CODE FOR PRELOADING IMAGES */

    //keep preloaded images
    const preloadedImgs = [];

    const imageUrls = [
      "./portfolio_images/background_1_lowerRes.jpg",
      "./portfolio_images/background_2_lowerRes.jpg"
    ]

    function preloadImages(url) {
      //creates new image objects for each url
      const img = new Image();

      //triggers the browser to cache the images
      img.src =url;

      preloadedImgs.push(img);
    };

    imageUrls.forEach(url => {preloadImages(url)});

    /* FOLLOWING CODE FOR TYPING ANIMATION */

    const info = [
      "Lewis Drakeley",
      "ljdrakeley@gmail.com",
      "(585) 481-9303"
    ];

    const nameContainer = document.getElementById("animated-name");
    const emailContainer = document.getElementById("animated-email");
    const numberContainer = document.getElementById("animated-number");

    let currentTextIndex = 0;
    let currentCharacterIndex =0;
    let cursorElement = null;

    function typeInfo() {
      //Assing the correct cursor for removal later
      cursorElement = whichElement(currentTextIndex).querySelector(".typing");

      if (currentCharacterIndex <= info[currentTextIndex].length) {
        // Displays one character with the span (cursor) in front
        whichElement(currentTextIndex).innerHTML = info[currentTextIndex].slice(0, currentCharacterIndex) + '<span id="cursor" class="typing" style="border-right:2px solid black; height:1rem;"></span>';
        currentCharacterIndex++;

        // The 100 milliseconds make the animation look like typing
        setTimeout(typeInfo,100);
      } else {
        //cursor no longer needed on the previous line
        //arrow function such that hideCursor is captured as a closure, otherwise immediately passed
        setTimeout(() => hideCursor(currentTextIndex), 1800);
        
        currentTextIndex++;
        currentCharacterIndex = 0;

        //timer to indicate pause in typing
        setTimeout(typeInfo, 2000);
      }
    }

    function whichElement(elementIndex) {
      //Helps find which element is needed for execution
      switch(elementIndex) {
        case 0:
          return nameContainer;
        case 1:
          return emailContainer;
        case 2:
          return numberContainer;
        default:
          null;
      }
    }

    function hideCursor(elementIndex) {
        //hide display
        cursorElement.style.display = "none";
      };

    typeInfo();

    /* FOLLOWING CODE FOR SLIDESHOW NUMBER */

    // Get the slideshow container
    const slideshowContainer = document.querySelector(".slideshow");

    // Get the total number of list-items
    const totalItems = document.querySelectorAll(".list-item").length;

    // Get the counter element
    const slideshowCounter = document.getElementById("slideshowCounter");

    // Function to update the slideshow counter
    function updateSlideshowCounter() {
      const scrollPosition = slideshowContainer.scrollLeft;
      const itemWidth = slideshowContainer.querySelector(".list-item").offsetWidth;
      const currentIndex = Math.round(scrollPosition / itemWidth);
      slideshowCounter.textContent = `${currentIndex + 1}/${totalItems}`;
    }

    // Attach an event listener to update the counter when the container is scrolled
    slideshowContainer.addEventListener("scroll", updateSlideshowCounter);

    // Update the counter initially
    updateSlideshowCounter();

    /* FOLLOWING CODE FOR SCROLL BUTTONS */

    function onSlideshowClick(direction) {
      const scrollPosition = slideshowContainer.scrollLeft;
      const itemWidth = slideshowContainer.querySelector(".list-item").offsetWidth;
      if (direction=='right') {
        slideshowContainer.scrollLeft += itemWidth;
      };
      if (direction=='left') {
        slideshowContainer.scrollLeft -= itemWidth;
      };
      updateSlideshowCounter();
    }