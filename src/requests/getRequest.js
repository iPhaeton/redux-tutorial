export default function (url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200) reject(xhr.statusText);
            else resolve(xhr.responseText);
        }
    });
}