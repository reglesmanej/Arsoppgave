let h_votes = 0;
let v_votes = 0;
let s_votes = 0;
let total_vote = 0;

//
function vote_h() {
    //her har jeg brukt "localStorage" for å lagre resultatet.
    h_votes = localStorage.getItem("hoyrestemmer")
    h_votes++;
    document.getElementById("hoyrestemmer").innerHTML = h_votes
    localStorage.setItem("hoyrestemmer", h_votes)
    total_vote = h_votes + v_votes + s_votes;
    document.getElementById("totalstemmer").innerHTML = total_vote
}

function vote_v() {
    //her har jeg brukt "localStorage" for å lagre resultatet.
    v_votes = localStorage.getItem("venstrestemmer")
    v_votes++;
    document.getElementById("venstrestemmer").innerHTML = v_votes
    localStorage.setItem("venstrestemmer", v_votes)
    total_vote = h_votes + v_votes + s_votes;
    document.getElementById("totalstemmer").innerHTML = total_vote
}

function vote_s() {
    //her har jeg brukt "localStorage" for å lagre resultatet.
    s_votes = localStorage.getItem("senterstemmer")
    s_votes++;
    document.getElementById("senterstemmer").innerHTML = s_votes
    localStorage.setItem("senterstemmer", s_votes)
    total_vote = h_votes + v_votes + s_votes;
    document.getElementById("totalstemmer").innerHTML = total_vote
}

e
function total_votes() {
    //for å få den function til å funke må du lege denne koden på alle de andre functionene.
    total_vote = +h_votes + +v_votes + +s_votes;
    document.getElementById("totalstemmer").innerHTML = total_vote

}

// ved bruk av dette fuctionen kan jeg lagre alle resultatene. 
function hentstemmer() {

    h_votes = localStorage.getItem("hoyrestemmer")
    v_votes = localStorage.getItem("venstrestemmer")
    s_votes = localStorage.getItem("senterstemmer")
    document.getElementById("hoyrestemmer").innerHTML = h_votes;
    document.getElementById("venstrestemmer").innerHTML = v_votes;
    document.getElementById("senterstemmer").innerHTML = s_votes;

}

