console.clear();
const textarea = document.getElementById("textarea");

const boldBtn = document.getElementById("textBold");
boldBtn.addEventListener("click", function () {
  if (textarea.style.fontWeight !== "bold") {
    textarea.style.fontWeight = "bold";
  } else {
    textarea.style.fontWeight = "normal";
  }
});

const italicBtn = document.getElementById("textItalic");
italicBtn.addEventListener("click", function () {
  if (textarea.style.fontStyle !== "italic")
    textarea.style.fontStyle = "italic";
  else textarea.style.fontStyle = "normal";
});

const textUnderline = document.getElementById("textUnderline");
textUnderline.addEventListener("click", function () {
  if (textarea.style.textDecoration !== "underline")
    textarea.style.textDecoration = "underline";
  else textarea.style.textDecoration = "none";
});

TextAlign("alignLeft", "left", "left");
TextAlign("alignCenter", "center", "left");
TextAlign("alignRight", "right", "left");
TextAlign("alignJustify", "justify", "left");

function TextAlign(elementId, value, defaultValue) {
  elementId = document.getElementById(elementId);
  elementId.addEventListener("click", function () {
    if (textarea.style.textAlign !== value) textarea.style.textAlign = value;
    else textarea.style.textAlign = defaultValue;
  });
}

const fontSize = document.getElementById("fontSize");
fontSize.addEventListener("focusout", function (e) {
  textarea.style.fontSize = fontSize.value + "px";
});

const textCaseChange = document.getElementById("textCaseChange");
textCaseChange.addEventListener("click", function () {
  if (textarea.style.textTransform !== "uppercase")
    textarea.style.textTransform = "uppercase";
  else textarea.style.textTransform = "none";
});

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", function () {
  textarea.style.color = colorPicker.value;
});
