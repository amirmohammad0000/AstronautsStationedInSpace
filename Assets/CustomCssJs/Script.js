"use strict";

let content = document.querySelector(".content");

const GetData = () => {
    $.getJSON("http://api.open-notify.org/astros.json", (data) => {
        let Data = [];
        Data.push(data["people"]);
        Data.forEach((item) => {
            for (let i = 0; i < item.length; i++) {
                let section = document.createElement("section");
                let img = document.createElement("img");
                let h1 = document.createElement("h1");
                let p = document.createElement("p");

                img.setAttribute("src", `./Assets/Images/${item[i].name}.png`);
                img.setAttribute("class", "img_section_post");
                img.setAttribute("alt", "image Astronauts");
                section.setAttribute("class", "section_post");
                h1.innerHTML = item[i].name;
                if (item[i].craft === "ISS") {
                    p.innerHTML = "International Space Station";
                } else if (item[i].craft === "Shenzhou 13") {
                    p.innerHTML = "Shenzhou 13";
                }

                content.appendChild(section);
                section.appendChild(img);
                section.appendChild(h1);
                section.appendChild(p);
            }
        });
    });
}