
window.onload = function(){
  var oCity = document.getElementById('aqi-city-input');
  var oVal = document.getElementById('aqi-value-input');
  var oBtn1 = document.getElementById('add-btn');
  var oTable = document.getElementById('aqi-table');
  var aBtn = document.getElementsByTagName('button');
 /**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
  var aCity = oCity.value.trim();
  var aVal = oVal.value.trim();
  if (!aCity.match(/^[A-Za-z\u4e00-\u9fa5]/)) {
    alert("The name of city must be Chinese or English");
  }
  if (!aVal.match(/^\d+$/)) {
    alert("The index of air must be integer");
    return false;
  }
  aqiData[aCity]=aVal;
}

/**
 * 渲染aqi-table表格
    var oTr = document.createElement('tr');
    var oTd = document.createElement('td');
    oTd.innerHTML = "City";
    oTr.appendChild(oTd);

    var oTd = document.createElement('td');
    oTd.innerHTML = "Index";
    oTr.appendChild(oTd);

    var oTd = document.createElement('td');
    oTd.innerHTML = "Action";
    oTr.appendChild(oTd);
 */
function renderAqiList() {
  var items = "<tr><td>City</td><td>Index</td><td>Action</td></tr>";
  for(aCity in aqiData){
    items += "<tr><td>"+aCity+"</td><td>"+aqiData[aCity]+"</td><td><button data-aCity='"+aCity+"'>删除</button></td></tr>"
  }
  oTable.innerHTML = aCity?items:"";
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
  delete aqiData[aCity];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  oBtn1.onclick = addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  document.getElementById("aqi-table").addEventListener("click", function(event){
        if(event.target.nodeName.toLowerCase() === 'button') delBtnHandle.call(null, event.target.dataset.aCity);
    })
}

init();
}
