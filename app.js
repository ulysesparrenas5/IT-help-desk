let activeCategory = "All";

const searchInput = document.getElementById("searchInput");
const articleList = document.getElementById("articleList");
const categoryButtons = document.getElementById("categoryButtons");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

// Safety: show text as plain text, never as HTML
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function makeList(items, ordered) {
  const tag = ordered ? "ol" : "ul";
  return "<" + tag + ">" + items.map(function (item) {
    return "<li>" + escapeHtml(item) + "</li>";
  }).join("") + "</" + tag + ">";
}

// ---------- CATEGORY BUTTONS ----------
function renderCategoryButtons() {
  const categories = ["All"];
  ARTICLES.forEach(function (a) {
    if (!categories.includes(a.category)) categories.push(a.category);
  });

  categoryButtons.innerHTML = categories.map(function (c) {
    const style = c === activeCategory ? "btn-primary" : "btn-outline-primary";
    return '<button class="btn btn-sm category-btn ' + style + '" data-category="' + escapeHtml(c) + '">' + escapeHtml(c) + "</button>";
  }).join("");
}

categoryButtons.addEventListener("click", function (event) {
  const button = event.target.closest("button");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategoryButtons();
  renderArticles();
});

// ---------- ARTICLES ----------
function renderArticles() {
  const search = searchInput.value.trim().toLowerCase();

  const filtered = ARTICLES.filter(function (a) {
    const text = (a.title + " " + a.problem + " " + a.keywords.join(" ")).toLowerCase();
    const matchesSearch = search === "" || text.includes(search);
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  resultCount.textContent = filtered.length + " of " + ARTICLES.length + " articles";
  noResults.classList.toggle("d-none", filtered.length > 0);

  articleList.innerHTML = filtered.map(function (a) {
    const experienceBadge = a.fromExperience
      ? ' <span class="badge text-bg-warning ms-2">From my experience</span>'
      : "";

    return '<div class="accordion-item">' +
      '<h2 class="accordion-header">' +
        '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#article' + a.id + '">' +
          '<span class="badge text-bg-secondary me-2">' + escapeHtml(a.category) + "</span>" +
          escapeHtml(a.title) + experienceBadge +
        "</button>" +
      "</h2>" +
      '<div id="article' + a.id + '" class="accordion-collapse collapse" data-bs-parent="#articleList">' +
        '<div class="accordion-body article-section">' +
          "<h6>Problem</h6><p>" + escapeHtml(a.problem) + "</p>" +
          "<h6>Possible Causes</h6>" + makeList(a.causes, false) +
          "<h6>Diagnostic Procedure</h6>" + makeList(a.diagnosis, true) +
          "<h6>Solution</h6>" + makeList(a.solution, true) +
          "<h6>Lesson Learned / Prevention</h6><p class='mb-0'>" + escapeHtml(a.lesson) + "</p>" +
        "</div>" +
      "</div>" +
    "</div>";
  }).join("");
}

// Search updates instantly while typing
searchInput.addEventListener("input", renderArticles);

renderCategoryButtons();
renderArticles();