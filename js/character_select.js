var characters = [
    {
        "name": "Josuke Higashikata",
        "age": "16",
        "power": "Stand",
        "power_name": "Crazy Diamond",
        "type": "Lunatique, Loyal",
        "face": "images/characters/part4/josuke4_portrait.jpg",
        "power_pic": ""
    },
    {
        "name": "Kira Yoshikage",
        "age": "33",
        "power": "Stand",
        "power_name": "Killer Queen",
        "type": "Sociopathe, Maniaque",
        "face": "images/characters/part4/kira_portrait.jpg",
        "power_pic": ""
    },
    {
        "name": "Jotaro Kujo",
        "age": "28",
        "power": "Stand",
        "power_name": "Star Platinum",
        "type": "Froid",
        "face": "images/characters/part4/jotaro4_portrait.jpg",
        "power_pic": ""
    },
    {
        "name": "Okuyasu Nijimura",
        "age": "16",
        "power": "Stand",
        "power_name": "The Hand",
        "type": "",
        "face": "images/characters/part4/okuyasu_portrait.jpg",
        "power_pic": ""
    },
    {
        "name": "Joseph Joestar",
        "age": "79",
        "power": "Stand",
        "power_name": "Hermit Purple",
        "type": "",
        "face": "images/characters/part4/oldjoseph_portrait.jpg",
        "power_pic": ""
    },
    {
        "name": "Koichi Hirose",
        "age": "15",
        "power": "Stand",
        "power_name": "Echoes",
        "type": "",
        "face": "images/characters/part4/koichi_portait.jpg",
        "power_pic": ""
    },
    {
        "name": "Rohan Kishibe",
        "age": "20",
        "power": "Stand",
        "power_name": "Heaven's Door",
        "type": "",
        "face": "images/characters/part4/rohan_portrait.jpg",
        "power_pic": ""
    }
];

window.addEventListener("load", function () {
   var colGallerie = document.getElementById("gallerie").children;
   for (var i = 0 ; i < colGallerie.length; i++){
       colGallerie[i].style.top = (document.getElementById("gallerie").offsetHeight*0.25)-30*i+"px";
       colGallerie[i].style.left = (colGallerie[i].offsetWidth * i)+"px";
       for(let figure of colGallerie[i].children)
       {
           figure.addEventListener("mouseover", function () {
               var id = parseInt(this.dataset.chara);
               console.log(id);
               console.log("lel");
               document.querySelector("#chara_details img").setAttribute("src", characters[id].face);
               document.querySelector("#chara_details em").innerHTML = characters[id].name;
               document.querySelector("#chara_details p:first-child").innerHTML = "Age : "+characters[id].age+" ans";
               document.querySelector("#chara_details p:nth-child(2)").innerHTML = characters[id].power+" : "+characters[id].power_name;
               document.querySelector("#chara_details p:last-child").innerHTML = "Caractère : "+characters[id].type;
           });
       }
   }
});


