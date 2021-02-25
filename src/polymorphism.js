let baiduMap = {
    show: () => {
        console.log("showing baidu map.");
    }
}

let googleMap = {
    show: () => {
        console.log("showing google map."); 
    }
}

function usingMap(map) {
    map.show();
}

usingMap(baiduMap); // showing baidu map.
usingMap(googleMap); // showing google map.
