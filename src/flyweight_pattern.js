const Model = function(sex) {
    this.sex = sex;
}

Model.prototype.takePhoto = function() {
    console.log(`sex=${this.sex} underwear=${this.underwear}`);
}

// 创建男模特与女模特两个对象
const maleModel = new Model("male");
const femaleModel = new Model("female");

// 给男模特依次穿上所有的内衣并拍照
for(let i = 1; i <= 50; i ++) {
    maleModel.underwear = `underwear ${i}`;
    maleModel.takePhoto();
}


// 给女模特依次穿上所有的内衣并拍照
for(let i = 1; i <= 50; i ++) {
    femaleModel.underwear = `underwear ${i}`;
    femaleModel.takePhoto();
}
