fetch("../api/galleryApi.json")
        .then((res) => {
        return res.json();
    })
    .then((data) => {
        for (let i = 0; i<=10; i++) {
            let imagesTags = `
            <div id="image-box"><img src="${data["0"][i]["image-url"]}" width="100%" height="100%"/></div>`
            document.body.innerHTML(imagesTags)
        }
    });