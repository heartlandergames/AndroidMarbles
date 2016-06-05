#pragma strict
import UnityEngine.UI;


var playerName : String;

var nameText : InputField;

var wins : int;

var losses : int;

var streak : int;

function Start() {
    if(PlayerPrefs.HasKey("playerName"))
    {
        nameText.text = PlayerPrefs.GetString("playerName");
    }   
    
}

function Update () {
    playerName = nameText.text;
}

function SaveName()
{
    PlayerPrefs.SetString("playerName", playerName);
    PlayerPrefs.Save();
}

