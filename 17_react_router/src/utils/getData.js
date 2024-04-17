export const getData = (url, setState) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => setState(data));
};
