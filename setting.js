
// Fonction pour afficher le tiroir a gauche
const drawer = document.getElementById('drawer');
function openDrawer() {
    drawer.classList.add('open');
}

function closeDrawer() {
    drawer.classList.remove('open');
}

// Fonction pour changer le theme
const tex = document.getElementById("texte")
const body = document.getElementById("monBody")
function changedark() {
    body.style.backgroundColor = "#202020"
    drawer.style.backgroundColor = "gray"
    tex.style.backgroundColor = "#202020"
    tex.style.color = "white"
    tex.textContent = "Dark"
}
function changelight() {
    body.style.backgroundColor = "lightblue"
    drawer.style.backgroundColor = "#a8a8a8"
    tex.textContent = "Light"
    tex.style.backgroundColor = "white"
    tex.style.color = "black"
    
}
function changeblue() {
    body.style.backgroundColor = "blue"
    drawer.style.backgroundColor = "lightblue"
    tex.textContent = "Blue"
    tex.style.backgroundColor = "blue"
    tex.style.color = "white"
}
function changeorange() {
    body.style.backgroundColor = "rgb(255, 130, 0)"
    drawer.style.backgroundColor = "white"
    tex.textContent = "Orange"
    tex.style.backgroundColor = "rgb(255, 115, 0)"
    tex.style.color = "white"
}


// Dictionnaire uo listes
const fruits = ["Utulisateur_1", "Utulisateur_2", "Utulisateur_3", "Utulisateur_4"]
const liste = document.getElementById("liste")

// Listes des dictionnaires
function dictionnaire() {
    const button = document.createElement("button")
    if (document.getElementById("delete_liste")) { // verification de liste
        return
    }
    button.textContent = "Masquer"
    button.id = "delete_liste"// id pour Suprimer
    button.style.marginTop = "5px"
    fruits.forEach(fruit => {
        const li = document.createElement("li")
        li.textContent = fruit
        li.style.color = "white"
        li.style.fontStyle = "bold"
        li.style.backgroundColor = "gray"
        document.getElementById("liste").appendChild(li)
    })
    document.getElementById("liste").appendChild(button)
    button.addEventListener("click", () => {
        liste.innerHTML = ""
        liste.appendChild(button)
        button.remove()// suprimer le button
    })
}
// window 
function openindwon() {
    window.open("https://www.facebook.com/avel.mimilitia/",
        "popup", "width=500,height=650, left=500, top=50")
}


