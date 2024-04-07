var runs = 0, balls = 0, overs = 0, wickets = 0, total = 0, st = 0, flag = 0, nst = 0, bstwkt = 0, bnstwkt = 0, bstrun = 0, bnstrun = 0, bflag = 0,stb=0,nstb=0;
var bat_team = localStorage.getItem('bat');
document.getElementById("bteam").textContent = bat_team;


function score(value) {
    if (balls === 5) {
        if (wickets === 10) {
            runs = total;
            if(flag === 0){
                stb+=1;
            }
            else{
                nstb+=1;
            }
            if(bflag === 0){
                bstwkt+=1;
                bflag=-1;
            }
            else if(bflag === 1){
                bnstwkt+=1;
                bflag=-1;
            }
        }
        else {
            if (flag==0){
                if (value%2===1){
                    flag=0;
                }
                else{
                    flag=1;
                }
                st+=value;
                stb+=1;
            }
            else{
                if (value%2===1){
                    flag=1;
                }
                else{
                    flag=0;
                }
                nst+=value;
                nstb+=1;
            }
            if(bflag === 0){
                bstrun+=value;
            }
            else if(bflag === 1){
                bnstrun+=value;
            }
            runs += value;
            total = runs;
            balls = (balls + 1) % 6;
            overs += 1;
            if(overs%2 === 0){
                bflag=0;
                bstrun=0
                bstwkt=0
            }
            else{
                bflag=1;
                bnstrun=0;
                bnstwkt=0;
            }
        }

    }
    else {
        if (wickets === 10) {
            runs = total;
            if(flag === 0){
                stb+=1;
            }
            else{
                nstb+=1;
            }
            if(bflag === 0){
                bstwkt+=1;
                bflag=-1;
            }
            else if(bflag === 1){
                bnstwkt+=1;
                bflag=-1;
            }
        }
        else {
            if (flag==0){
                if (value%2===0){
                    flag=0;
                }
                else{
                    flag=1;
                }
                st+=value;
                stb+=1;
            }
            else{
                if (value%2===0){
                    flag=1;
                }
                else{
                    flag=0;
                }
                nst+=value; 
                nstb+=1;
            }
            if(bflag === 0){
                bstrun+=value;
            }
            else if(bflag === 1){
                bnstrun+=value;
            }
            runs += value;
            total = runs;
            balls = (balls + 1) % 6;
        }
    }
    document.getElementById("runs").innerHTML = total;
    document.getElementById("Overs").innerHTML = overs + "." + balls;
    document.getElementById("st").innerHTML=st + "(" + stb + ")";
    document.getElementById("nst").innerHTML=nst + "(" + nstb + ")";
    document.getElementById("bst").innerHTML=bstwkt + "-" + bstrun;
    document.getElementById("bnst").innerHTML=bnstwkt + "-" + bnstrun;
}
function wicket(out) {
    if (out === -1 && wickets != 10) {
        if (balls === 5) {
            balls = 0;
            wickets += 1;
            overs += 1;
            if(flag === 0){
                st=0;
                stb=0;
            }
            else{
                nst=0;
                nstb=0;
            }
            if(bflag === 0){
                bstwkt+=1;
            }
            else if(bflag === 1){
                bnstwkt+=1;
            }
            if(overs%2 === 0){
                bflag=0;
                bstrun=0
                bstwkt=0
            }
            else{
                bflag=1;
                bnstrun=0;
                bnstwkt=0;
            }
        }
        else {
            balls = (balls + 1) % 6;
            wickets += 1;
            if(flag === 0){
                st=0;
                stb=0;
            }
            else{
                nst=0;
                nstb=0;
            }
            if(bflag === 0){
                bstwkt+=1;
            }
            else if(bflag ===1){
                bnstwkt+=1;
            }
        }
    }
    else if (out === -1 && wickets === 10){
        bflag=-1;
    }
    
    document.getElementById("runs").innerHTML = runs;
    document.getElementById("wicket").innerHTML = wickets;
    document.getElementById("Overs").innerHTML = overs + "." + balls;
    document.getElementById("st").innerHTML=st + "(" + stb + ")";
    document.getElementById("nst").innerHTML=nst + "(" + nstb + ")";
    document.getElementById("bst").innerHTML=bstwkt + "-" + bstrun;
    document.getElementById("bnst").innerHTML=bnstwkt + "-" + bnstrun;
}

function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    var wide = 0;
    wide=parseInt(document.getElementById("val").value);
    if (wide%2==0){
        runs += wide;
        total = runs;
    }
    if (wide%2==1){
        if (flag===0){
            flag=1;
        }
        else{
            flag=0;
        }
        runs += wide;
        total = runs;
    }
    if(bflag === 0){
        wide=wide+1;
        bstrun+=wide;
    }
    else if(bflag === 1){
        wide=wide+1;
         bnstrun+=wide;
     }
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("runs").innerHTML = total+1;
    document.getElementById("bst").innerHTML = bstwkt + "-" + bstrun;
    document.getElementById("bnst").innerHTML = bnstwkt + "-" + bnstrun;
}
