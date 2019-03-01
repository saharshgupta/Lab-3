function border(){
    let div = document.getElementById("para");
    let rbc = document.getElementById("RBC").value;
    let gbc = document.getElementById("GBC").value;
    let bbc = document.getElementById("BBC").value;
    let bgc = "rgb(" + rbc + "," + gbc + "," + bbc + ")";
    div.style.backgroundColor = bgc;
    let bcr = document.getElementById("RB").value;
    let bcg = document.getElementById("GB").value;
    let bcb = document.getElementById("BB").value;
    let w = document.getElementById("BW").value + "px ";
    div.style.borderWidth = w;
    let bc = "rgb(" + bcr + "," + bcg + "," + bcb + ")";
    div.style.borderColor = bc;
    
}