module.exports = function myWebacpkLoader(content) {
    console.log(`myWebpackLoader가 동작함.`);
    return content.replace('console.log(','alert(');
}

