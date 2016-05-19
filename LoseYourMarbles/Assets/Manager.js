#pragma strict
import UnityEngine.UI;
import System.Collections.Generic;

var ui : UIScript;



var text : GameObject;

var textDisplay :boolean;

var players : List.<Player> = new List.<Player>();


function Start () {
    //Get References to valuable Scripts/gameObjects
    ui = GetComponent(UIScript);

    //get player gameObjects in game and add their "Player" to the playersList
    var playerArray : GameObject[] = GameObject.FindGameObjectsWithTag("PLAYER");
    for(var p : GameObject in playerArray)
    {
       players.Add(p.GetComponent(Player));
    }
}

function Update () {
    Test();
}

function FlashText(s : String)
{
    if(!textDisplay)
    {
        textDisplay = true;
        var t : Text = text.transform.GetChild(0).GetComponent(Text);
        t.text = s;
        text.gameObject.SetActive(true);
        yield WaitForSeconds(2);
        text.gameObject.SetActive(false);
        textDisplay = false;
    }
}

function ShootMode(p : Player)
{
    ui.MoveUICycle();
    ui.ShootUICycle();
}

function Test()
{
    if(Input.GetButtonUp("Fire2"))
    {
        FlashText("Time" + Time.time);
    }
}