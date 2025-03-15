const profiles: string[] = ["tanya", "john"];

let currentProfileIndex: number = profiles.indexOf("john");

console.log(currentProfileIndex); // 1

function showProfile(index: number): void {
  profiles.forEach((profileId, i) => {
    const profileElement = document.getElementById(profileId);
    if (profileElement) {
      if (i === index) {
        profileElement.classList.remove("hidden");
        profileElement.classList.add("block");
      } else {
        profileElement.classList.remove("block");
        profileElement.classList.add("hidden");
      }
    }
  });
}

const nextButtons = document.querySelectorAll(".next-btn");

nextButtons.forEach((btn: Element) => {
  btn.addEventListener("click", () => {
    currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
    showProfile(currentProfileIndex);
  });
});

const previousButtons = document.querySelectorAll(".prev-btn");

previousButtons.forEach((btn: Element) => {
  btn.addEventListener("click", () => {
    currentProfileIndex =
      (currentProfileIndex - 1 + profiles.length) % profiles.length;
    showProfile(currentProfileIndex);
  });
});
