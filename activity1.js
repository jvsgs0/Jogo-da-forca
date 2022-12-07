
score = 0;

function updateScore()
{
    score = score + 1;
    document.getElementById("score").innerHTML = "Pontuação: " + score
}

function saveScore()
{
    localStorage.setItem("score", score);
}

function nextPage()
{
    window.location = "atividade_2.html";
}