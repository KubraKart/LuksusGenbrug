document.getElementById("updatedform").addEventListener("submit", (e) => {
    e.preventDefault();

const newemail = document.getElementById("email").value;
const newpassword = document.getElementById("password").value;

const updatedUser = {
    email: newemail,
    password: newpassword,
};

fetch("http://localhost:5500/update", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
})

.then((response) => response.json())
.then((response) => {
    if(response) {
        console.log(response);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        window.alert("Bruger opdateret")
    }
})
.catch(() => {
    window.alert("hov! noget gik galt.")
});
});