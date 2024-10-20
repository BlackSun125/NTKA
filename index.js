const contentLetterSrart_actived = "Hiiiii. Chào mừng bé hỏ đến với món quà nho nhỏ nhân dịp 20/10 cụa anh😋😋😋." //Lời mở đầu cho bức thư
const mainContentLetter = "Chúc bé hỏ ngày càng xinh đẹp, học giỏi để sau này thành công trên con đường mình đã chọn. Chúc em luôn luôn vui vẻ, luôn luôn nở nụ cười thật tươi dù có chuyện gì xảy ra đi chăng nữa😁. Và nhớ là anh vẫn ở đây, vẫn luôn sẵn sàng khi em cần nhé :33!!!" //Nội dung của bức thư

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/b4bbdb54b7152338d7143cb444a77f09.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/boy1.jpg"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const backgroundSound = document.getElementById("backgroundSound");

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

window.addEventListener('load', function () {
    setTimeout(() => {
        const audioElement = document.createElement('audio');
        audioElement.id = 'backgroundSound';
        audioElement.preload = 'none'; // No preload
        audioElement.loop = true;
        audioElement.volume = 0.2;

        const sourceElement = document.createElement('source');
        sourceElement.src = './audio/sound.mp3';
        sourceElement.type = 'audio/mpeg';

        audioElement.appendChild(sourceElement);
        document.body.appendChild(audioElement);

        // Play the audio
        audioElement.play().then(() => {
            audioElement.muted = false;
        }).catch((error) => {
            console.log("Autoplay was prevented:", error);
        });
    }, 2000);
});


document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s")
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                    setTimeout(() => {
                        document.querySelector(".friendImageLeft").setAttribute("style", "opacity: 1; transition: .5s, zIndex: 100");
                        document.querySelector(".friendImageRight").setAttribute("style", "opacity: 1; transition: .5s, zIndex: 100");
                        document.querySelector(".socialButtons").setAttribute("style", "opacity: 1; transition: .5s");

                    }, 1000);
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");

            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [1, 3]; // Blur mềm hơn
    const count = a;
    const allDefaultColor = ["#FFB6C1", "#FF69B4", "#FF1493", "#FFD700", "#EEE8AA"]; // Màu hồng, vàng nhẹ

    for (var i = 0; i < count; i++) {
        var randomLeft = Math.floor(Math.random() * width);
        var randomTop = Math.floor(Math.random() * height / 2);
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 5) + 10; // Kích thước nhỏ hơn một chút
        var moveTime = Math.floor(Math.random() * 3) + 2; // Tăng thời gian rơi chậm hơn

        var div = document.createElement("div");
        div.classList.add("snow");
        div.style.position = "absolute";
        div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * 5)];
        div.style.borderRadius = (Math.floor(Math.random() * 20) + 10) + "px"; // Tạo hiệu ứng tròn hơn, mềm mại hơn

        div.style.height = widthEle * Math.floor(Math.random() * 3 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px";
        div.style.marginTop = randomTop + "px";
        div.style.filter = "blur(" + blurLv[blur] + "px)";
        div.style.opacity = "0.8"; // Tăng sự trong suốt để nhẹ nhàng hơn
        div.style.animation = "moveLight " + moveTime + "s ease-in-out infinite, sway " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}

// Thêm keyframe cho hiệu ứng lắc lư
const style = document.createElement('style');
style.innerHTML = `
@keyframes moveLight {
    to {
        transform: translateY(100vh);
    }
}

@keyframes sway {
    0%, 100% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(20px); // Thêm hiệu ứng lắc nhẹ
    }
}
`;
document.head.appendChild(style);
