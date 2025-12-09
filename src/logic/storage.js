function saveAll(projects){
    localStorage.setItem("projects", JSON.stringify(projects));
}

function loadAll() {
    return JSON.parse(localStorage.getItem("projects")) || [];
}

export { saveAll, loadAll };