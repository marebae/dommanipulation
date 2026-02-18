function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const addForm = document.getElementById("newContent");

    filterForm.style.display = "block";
    addForm.style.display = "none";
}

function showAddNew() {
    const filterForm = document.getElementById("filterContent");
    const addForm = document.getElementById("newContent");

    addForm.style.display = "flex";
    filterForm.style.display = "none";
}

function filterArticles() {

    const opinionChecked = document.getElementById("opinionCheckbox").checked;
    const recipeChecked = document.getElementById("recipeCheckbox").checked;
    const updateChecked = document.getElementById("updateCheckbox").checked;

    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {

        if (article.classList.contains("opinion")) {
            article.style.display = opinionChecked ? "block" : "none";
        }

        if (article.classList.contains("recipe")) {
            article.style.display = recipeChecked ? "block" : "none";
        }

        if (article.classList.contains("update")) {
            article.style.display = updateChecked ? "block" : "none";
        }

    });
}

function addNewArticle() {

    const titleInput = document.getElementById("inputHeader");
    const textInput = document.getElementById("inputArticle");
    const selectedType = document.querySelector('input[name="articleType"]:checked');

    const title = titleInput.value.trim();
    const text = textInput.value.trim();

    if (!title || !text || !selectedType) {
        alert("Please complete all fields.");
        return;
    }

    const articleList = document.getElementById("articleList");

    const article = document.createElement("article");
    article.classList.add(selectedType.value);

    const marker = document.createElement("span");
    marker.classList.add("marker");

    const typeLabel =
        selectedType.value.charAt(0).toUpperCase() +
        selectedType.value.slice(1);

    marker.textContent = typeLabel;

    const heading = document.createElement("h2");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    const readMore = document.createElement("p");
    readMore.innerHTML = '<a href="moreDetails.html">Read more...</a>';

    article.appendChild(marker);
    article.appendChild(heading);
    article.appendChild(paragraph);
    article.appendChild(readMore);

    articleList.appendChild(article);

    titleInput.value = "";
    textInput.value = "";
    selectedType.checked = false;
}
