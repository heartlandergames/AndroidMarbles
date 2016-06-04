#pragma strict
import UnityEngine.SceneManagement;
import UnityEngine.UI;
import System.Collections.Generic;


var mainScreen : GameObject;
var optionsScreen : GameObject;
var storeScreen : GameObject;
var playScreen: GameObject;

var screenList : List.<GameObject> = new List.<GameObject>();

function Start () {
  

    screenList.Add(mainScreen);
    screenList.Add(optionsScreen);
    screenList.Add(storeScreen);
    screenList.Add(playScreen);

}

function Update () {

}

function LoadColumned()
{
    SceneManager.LoadScene("Columned");
}

function LoadLag()
{
    SceneManager.LoadScene("LagScene");
}

function QuitGame()
{
    Application.Quit();
}

function HomeScreen()
{
    SceneManager.LoadScene("MainScreen");
    Time.timeScale =1;
}

function MainScreen()
{
    CloseScreens();
    mainScreen.SetActive(true);
}

function PlayScreen()
{
    CloseScreens();
    playScreen.SetActive(true);
}

function StoreScreen()
{
    CloseScreens();
    storeScreen.SetActive(true);
}

function OptionsScreen()
{
    CloseScreens();
    optionsScreen.SetActive(true);
}

function MarbleScreen()
{

}

function LevelScreen()
{

}
function ModeScreen()
{

}

function CloseScreens()
{
    for (var g : GameObject in screenList)
    {
        g.SetActive(false);
    }
}
