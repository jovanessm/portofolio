const projectDiv = {
    TypeForSpeed: $(".TypeForSpeedInfo"),
};

$(".toggleButton").on("click", () => {
    if (projectDiv.TypeForSpeed.hasClass("hide")) {
        projectDiv.TypeForSpeed.removeClass("hide")
            .removeClass("invisible")
            .addClass("show"); // Show the div
    } else {
        projectDiv.TypeForSpeed.removeClass("show").addClass("hide");
        setTimeout(() => {
            projectDiv.TypeForSpeed.addClass("invisible");
        }, 1000);
    }
});
