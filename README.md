<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>测试实例</title>
<script>
function Dzhs()
{
let orgdianzan=document.getElementById("dzs");
let dianzan=parseInt(orgdianzan.innerText);
orgdianzan.innerText=dianzan+1;
}
</script>
</head>
<body>
<button id="dzs" onclick="Dzhs()">0</button>
</body>
</html>
