function runBody() {
document.body.innerHTML = `
//kuku';
<textarea id="in"></textarea>
<form action="webapp.php" method="post">
	Текст: <input type="text" name="intext">
	<input type="submit">
</form>
<script>
document.getElementById("in").value=JSON.stringify(window.Telegram.WebApp);
document.getElementsByName("intext")[0].value=JSON.stringify(window.Telegram.WebApp);
</script>
`;
}
;
