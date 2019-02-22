function OnPomodoroClicked() {
	var pluginPath = objApp.GetPluginPathByScriptFileName("Pomodoro_Global.js");
	objWindow.ShowHtmlDialogEx(true, "番茄时钟", pluginPath + 'app/index.html', 440, 500, '', null, null);
}

function InitPomodoroButton() {
    var pluginPath = objApp.GetPluginPathByScriptFileName("Pomodoro_Global.js");
    objWindow.AddToolButton("main", "Pomodoro", "番茄时钟", pluginPath + "app/images/plugin.ico", "OnPomodoroClicked");
}
InitPomodoroButton();
