const initImg = (target, divTarget, data) => {
    const fixedImage = document.createElement("img");
    fixedImage.classList.add("fixedImage");
    fixedImage.src = `./asset/img/${data[target]}`;
    divTarget.append(fixedImage);

    const moveImage = document.createElement("img");
    moveImage.classList.add("moveImage");
    moveImage.src = `./asset/img/${data[target]}`;
    divTarget.append(moveImage);

}
const moveImageEffect = (classEffect, divTarget, countTarget, data) => {
    divTarget.querySelector(".moveImage").classList.add("transEffect");
    divTarget.querySelector(".fixedImage").src = `./asset/img/${data[countTarget]}`;
    divTarget.querySelector(".moveImage").classList.add(classEffect);
    setTimeout(() => {
        divTarget.querySelector(".moveImage").classList.remove("transEffect");
        divTarget.querySelector(".moveImage").src = `./asset/img/${data[countTarget]}`;
        divTarget.querySelector(".moveImage").classList.remove(classEffect);
    }, 500)
}

const slideEffect = (classEffect, divTarget, countTarget, data) => {
    let senseMouv
    classEffect === "slide-right" ? senseMouv = "moveRightInit" : senseMouv = "moveLeftInit"
    const moveImage = divTarget.querySelector(".moveImage")
    const fixeImage = divTarget.querySelector(".fixedImage")
    moveImage.src = `./asset/img/${data[countTarget]}`
    moveImage.classList.toggle(senseMouv)
    moveImage.classList.toggle("moveImage")
    setTimeout(() => {
        fixeImage.classList.add("transEffect");
        document.querySelector("." + senseMouv).classList.add("transEffect");
        fixeImage.classList.add(classEffect);
        document.querySelector("." + senseMouv).classList.add(classEffect);
        setTimeout(() => {
            document.querySelector("." + senseMouv).classList.add("moveImage")
            divTarget.querySelector(".moveImage").classList.toggle(senseMouv)
            fixeImage.classList.remove(classEffect);
            moveImage.classList.remove(classEffect);
            fixeImage.classList.remove("transEffect");
            moveImage.classList.remove("transEffect");
            fixeImage.src = `./asset/img/${data[countTarget]}`
        }, 400)
    }, 200)
}

const fadeEffect = (divTarget, countTarget, data) => {
    const fixeImage = divTarget.querySelector("img")
    const moveImage = divTarget.querySelector("img:last-of-type")
    moveImage.classList.add("fardIn")
    moveImage.src=`./assets/img/${data[countTarget]}`

    setTimeout(() => {
        fixeImage.classList.add("transEffect")
        fixeImage.classList.add("fardIn");
        moveImage.classList.add("transEffect")
        moveImage.classList.remove("fardIn");
        setTimeout(() => {
            fixeImage.classList.remove("fardIn");
            moveImage.classList.remove("fardIn");
            fixeImage.classList.remove("transEffect");
            moveImage.classList.remove("transEffect");
            fixeImage.src = `./assets/img/${data[countTarget]}`
        },900)
    }, 500)
}
