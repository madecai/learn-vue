const ejsexcel = require('ejsexcel')
const fs = require("fs");

const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

(async function() {
	//获得Excel模板的buffer对象
	const exlBuf = await readFileAsync("./mytest.xlsx");
	//数据源
    const data = [[{"dpt_des":"开发部","doc_dt":"2013-09-09","doc":"a001"}],
    [
    {"pt":"pt1","des":"des1","due_dt":"2013-08-07","des2":"2013-12-07"},
    {"pt":"pt1","des":"des1","due_dt":"2013-09-14","des2":"des21"},
    {"pt":"pt1","des":"des1","due_dt":"2013-09-14","des2":"123"},
    {"pt":"pt1","des":"des2","due_dt":"2013-09-14","des2":"34"},
    {"pt":"pt1","des":"des3","due_dt":"2013-09-14","des2":"aaaa"},
    {"pt":"pt1","des":"des3","due_dt":"2013-09-14","des2":"qweqw"},
    {"pt":"pt1","des":"des4","due_dt":"2013-09-14","des2":"vvv"}
    ]];
	//用数据源(对象)data渲染Excel模板
	//cachePath为编译缓存路径, 绝对路径, 若不设置, 则无缓存 cachePath: __dirname+"/cache/"
	const exlBuf2 = await ejsexcel.renderExcel(exlBuf, data, {});
	await writeFileAsync("./mytest2.xlsx", exlBuf2);
	console.log("生成mytest2.xlsx");
})();
