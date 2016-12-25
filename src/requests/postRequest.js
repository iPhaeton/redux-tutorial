export default function (url, body) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(body));

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 201) reject(xhr.statusText);
            else resolve(xhr.responseText);
        }
    });
};