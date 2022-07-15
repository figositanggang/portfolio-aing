const routes = document.querySelectorAll(`[data-route="true"]`);

let tmp = 0;
for (let index = 0; index < routes.length; index++) {
    routes[index].onclick = () => {
        tmp = index;
        routes[index].dataset.click = true;
        try {
            routes[index-1].dataset.click = false;
            routes[index+1].dataset.click = false;
        } catch (error) {
            console.log(error);
        }
    }
}