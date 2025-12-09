(() => {
  console.log("Master script.js loaded.");
  //gsap
  const boxes = gsap.utils.toArray(".box-sap");

  boxes.forEach((box, i) => {
    const anim = gsap.fromTo(
      box,
      { autoAlpha: 0, y: 50 },
      { duration: 1, autoAlpha: 1, y: 0 }
    );
    ScrollTrigger.create({
      trigger: box,
      animation: anim,
      toggleActions: "play none none none",
      once: true,
    });
  });

  // =======================================================
  // 1. DATA (Must be available on all pages using this script)
  // =======================================================
  const projectsData = {
    1: {
      title: "OJU - A BETTER FRUIT, A BETTER LIFE",
      overview:
        "OJU is a brand of organic juices, so the logo is integrated to show the brand's products with natural and youthful colors, targeting young customers. Using sans-serif with the footer of letter are rounded, showing youthfulness and dynamism, not being rigid or constrained.",
      tools: [
        { name: "Adobe Illutrator", icon: "images/illustrator.png" },
        { name: "Adobe Photoshop", icon: "images/photoshop.png" },
        { name: "Clip Studio Paint", icon: "images/csp.png" },
      ],
      images: [
        { name: "Oju-1", src: "images/oju1.png" },
        { name: "Oju-2", src: "images/oju2.png" },
        { name: "Oju-3", src: "images/oju3.png" },
        { name: "Oju-4", src: "images/oju4.png" },
        { name: "Oju-5", src: "images/oju5.png" },
        { name: "Oju-6", src: "images/oju6.png" },
        { name: "Oju-7", src: "images/oju7.png" },
        { name: "Oju-8", src: "images/oju8.png" },
        { name: "Oju-9", src: "images/oju9.png" },
      ],
    },
    2: {
      title: "BIN'S TREASURE",
      overview:
        "The story about a city boy named Bin, who has a lot of interest in games and city living. One day, Bin has to go back to his birth's hometown to visit his grandmother in Lunar New Year's Eve. During his trip, he has unlocked a memory that buried deep inside of him.",
      tools: [
        { name: "Adobe After Effect", icon: "images/after_effect.png" },
        { name: "Adobe Photoshop", icon: "images/photoshop.png" },
        { name: "Clip Studio Paint", icon: "images/csp.png" },
      ],
      images: [
        { name: "Bin-1", src: "images/bin1.png" },
        { name: "Bin-2", src: "images/bin2.png" },
        { name: "Bin-3", src: "images/bin3.png" },
        { name: "Bin-4", src: "images/bin4.png" },
        { name: "Bin-5", src: "images/bin5.png" },
        { name: "Bin-6", src: "images/bin6.png" },
        { name: "Bin-7", src: "images/bin7.png" },
        { name: "Bin-8", src: "images/bin8.png" },
        { name: "Bin-9", src: "images/bin9.png" },
      ],
    },
    3: {
      title: "ORBITZ - THE TASTE OUT THE SPACE",
      overview:
        "Orbitz was a short-lived fruit-flavored, non-carbonated beverage with gelatinous fruit-flavored beads floating inside. It was marketed as a “texturally enhanced alternative beverage” by The Clearly Food & Beverage Company of Canada.",
      tools: [
        { name: "Adobe After Effect", icon: "images/after_effect.png" },
        { name: "Adobe Photoshop", icon: "images/photoshop.png" },
        { name: "Clip Studio Paint", icon: "images/csp.png" },
        { name: "Abobe Illustrator", icon: "images/illustrator.png" },
        { name: "Cinema4d", icon: "images/cinema4d.png" },
      ],
      images: [
        { name: "Orbitz-1", src: "images/orbitz1.png" },
        { name: "Orbitz-2", src: "images/orbitz2.png" },
        { name: "Orbitz-3", src: "images/orbitz3.png" },
        { name: "Orbitz-4", src: "images/orbitz4.png" },
        { name: "Orbitz-5", src: "images/orbitz5.png" },
        { name: "Orbitz-6", src: "images/orbitz6.png" },
        { name: "Orbitz-7", src: "images/orbitz7.png" },
        { name: "Orbitz-8", src: "images/orbitz8.png" },
        { name: "Orbitz-9", src: "images/orbitz9.png" },
      ],
    },
    4: {
      title: "無 - None Oracle",
      overview:
        " The Japanese style Oracle deck combines elements of Japanese legends and the modernity of today's people. The deck is inspired by the modernity and tradition of the Taisho era of Japan. When Western culture was introduced.",
      tools: [
        { name: "Adobe Photoshop", icon: "images/photoshop.png" },
        { name: "Clip Studio Paint", icon: "images/csp.png" },
        { name: "Abobe Illustrator", icon: "images/illustrator.png" },
      ],
      images: [
        { name: "None-1", src: "images/none1.png" },
        { name: "None-2", src: "images/none2.png" },
        { name: "None-3", src: "images/none3.png" },
        { name: "None-4", src: "images/none4.png" },
        { name: "None-5", src: "images/none5.png" },
        { name: "None-6", src: "images/none6.png" },
        { name: "None-7", src: "images/none7.png" },
        { name: "None-8", src: "images/none8.png" },
        { name: "None-9", src: "images/none9.png" },
      ],
    },
    5: {
      title: "SEVEN OR 7",
      overview:
        " The Japanese style Oracle deck combines elements of Japanese legends and the modernity of today's people. The deck is inspired by the modernity and tradition of the Taisho era of Japan. When Western culture was introduced.",
      tools: [
        { name: "Adobe Photoshop", icon: "images/photoshop.png" },
        { name: "Clip Studio Paint", icon: "images/csp.png" },
        { name: "Abobe Illustrator", icon: "images/illustrator.png" },
      ],
      images: [
        { name: "Seven-1", src: "images/seven1.png" },
        { name: "Seven-2", src: "images/seven2.png" },
        { name: "Seven-3", src: "images/seven3.png" },
        { name: "Seven-4", src: "images/seven4.png" },
        { name: "Seven-5", src: "images/seven5.png" },
        { name: "Seven-6", src: "images/seven6.png" },
        { name: "Seven-7", src: "images/seven7.png" },
        { name: "Seven-8", src: "images/seven8.png" },
        { name: "Seven-9", src: "images/seven9.png" },
      ],
    },
  };

  // --- Hamburger Menu ---
  const mainMenu = document.querySelector(".menu-nav");
  const hamburger = document.querySelector(".hamburger");

  function toggleMenu() {
    if (mainMenu && hamburger) {
      mainMenu.classList.toggle("is-open");
      const isExpanded =
        hamburger.getAttribute("aria-expanded") === "true" || false;
      hamburger.setAttribute("aria-expanded", !isExpanded);
    }
  }
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  // --- Lightbox Functions  ---
  const contentLight = document.querySelector("#lightbox-overlay");
  const imagesLight = document.querySelector("#lightbox-image");

  if (contentLight && imagesLight) {
    contentLight.addEventListener("click", (e) => {
      if (e.target !== imagesLight) {
        contentLight.classList.remove("show");
        imagesLight.classList.remove("showImage");
      }
    });
  }

  // Function called by image clicks to open lightbox (needs to be implemented wherever images are generated)
  // const aparecerImagen = (imageSrc) => { /* ... lightbox open logic ... */ };

  // =======================================================
  // 3. PAGE-SPECIFIC LOGIC (Index vs. Projects page)
  // =======================================================

  const currentPath = window.location.pathname;

  // --- LOGIC FOR THE INDEX.HTML PAGE (Video Player, Project Links) ---
  if (currentPath.endsWith("index.html") || currentPath === "/") {
    console.log("Index page logic initializing...");

    // --- Video Player Setup (Assuming elements exist in index.html) ---
    const playerCon = document.querySelector("#player-container");
    const player = document.querySelector("video");
    const videoControls = document.querySelector("#video-controls");

    if (player && videoControls) {
      const playButton = document.querySelector("#play-button");
      const pauseButton = document.querySelector("#pause-button");
      const stopButton = document.querySelector("#stop-button");
      const volumeSlider = document.querySelector("#change-vol");
      const fullScreen = document.querySelector("#full-screen");

      player.controls = false;
      videoControls.classList.remove("hidden");

      // Video Functions
      function playVideo() {
        player.play();
      }
      function pauseVideo() {
        player.pause();
      }
      function stopVideo() {
        player.pause();
        player.currentTime = 1;
      }
      function changeVolume() {
        player.volume = volumeSlider.value;
      }
      function toggleFullScreen() {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          playerCon.requestFullscreen();
        }
      }
      function showControls() {
        videoControls.classList.remove("hide");
      }
      function hideControls() {
        videoControls.classList.add("hide");
      }

      // Video Event Listeners
      playButton.addEventListener("click", playVideo);
      pauseButton.addEventListener("click", pauseVideo);
      stopButton.addEventListener("click", stopVideo);
      volumeSlider.addEventListener("change", changeVolume);
      fullScreen.addEventListener("click", toggleFullScreen);
      videoControls.addEventListener("mouseenter", showControls);
      videoControls.addEventListener("mouseleave", hideControls);
      player.addEventListener("mouseenter", showControls);
      player.addEventListener("mouseleave", hideControls);
    }

    // --- Project Link Handling (for navigation to projects.html) ---
    // We use localStorage here to pass the ID to the next page
    const projectLinks = document.querySelectorAll(
      ".dynamic-load-btn, .project-info"
    );

    projectLinks.forEach((element) => {
      element.addEventListener("click", function (e) {
        const projectId = this.dataset.projectId;
        if (projectId) {
          localStorage.setItem("selectedProjectId", projectId);
          // If they clicked the div, prevent default and navigate manually
          if (this.tagName !== "A") {
            e.preventDefault();
            window.location.href = "projects.html";
          }
        }
      });
    });
  }

  // --- LOGIC FOR THE PROJECTS.HTML PAGE (Dynamic content loading) ---
  else if (currentPath.endsWith("projects.html")) {
    console.log("Projects page logic initializing...");

    // Function to handle the actual DOM injection on the projects page
    function createProjectDisplay(projectId) {
      const project = projectsData[projectId];
      const projectInfoSection = document.querySelector("#portfolio");
      const iconSkillContainer = document.querySelector("#skill");

      if (!project || !projectInfoSection) return;

      projectInfoSection.innerHTML = `
                <div class="content">
                    <h2 class="description">${project.title}</h2>
                    <p>${project.overview}</p>
                    <div class="content-gallery">
                        ${project.images
                          .map(
                            (img) => `<img src="${img.src}" alt="${img.name}">`
                          )
                          .join("")}
                    </div>
                </div>
            `;

      if (iconSkillContainer) {
        iconSkillContainer.innerHTML = `
                    <div class="icon-skill">
                        <ul>
                            ${project.tools
                              .map(
                                (tool) =>
                                  `<li><img src="${tool.icon}" alt="${tool.name}"></li>`
                              )
                              .join("")}
                        </ul>
                    </div>
                `;
      }
    }

    const projectIdFromStorage = localStorage.getItem("selectedProjectId");

    if (projectIdFromStorage) {
      const projectIdFromStorage = localStorage.getItem("selectedProjectId");
      createProjectDisplay(projectIdFromStorage || "1");
      localStorage.removeItem("selectedProjectId");
    }
  }
})();
