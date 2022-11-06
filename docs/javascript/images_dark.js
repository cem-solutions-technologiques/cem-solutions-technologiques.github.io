var isDark = document.querySelector("body[data-md-color-scheme=slate]");
if (isDark) {
  var darkables = document.querySelectorAll('img[src$="darkable"');
  fromLightToDark(darkables);
} else {
  var darkables = document.querySelectorAll('img[src$="darkable"');
  fromDarkToLight(darkables);
}

var items = document.querySelectorAll("[data-md-color-media]");

for (let index = 0; index < items.length; index++) {
  const element = items[index];
  element.onchange = (evt) => {
    setTimeout(function () {
      if (!evt.target.checked) return;
      var isDark = document.querySelector("body[data-md-color-scheme=slate]");
      var darkables = document.querySelectorAll('img[src$="darkable"');
      if (isDark) {
        fromLightToDark(darkables);
      } else {
        fromDarkToLight(darkables);
      }
    });
  };
}

function fromLightToDark(images) {
  images.forEach((image) => {
    var idx = image.src.lastIndexOf(".");
    if (idx > -1) {
      var add = "_dark";
      image.src = [image.src.slice(0, idx), add, image.src.slice(idx)].join("");
    }
  });
}

function fromDarkToLight(images) {
  images.forEach((image) => {
    image.src = image.src.replace("_dark", "");
  });
}
