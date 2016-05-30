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
players[0].inTurn = true;
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
    Debug.Log("Cycle");
}

function Test()
{
    if(Input.GetButtonUp("Fire2"))
    {
        FlashText("Time" + Time.time);
    }
}

function WaitForTurn()
{
    for(var p : Player in players)
    {
    p.gameObject.GetComponent(PlayerShoot).enabled = false;
    p.gameObject.GetComponent(PlayerLook).enabled = true;
    p.gameObject.GetComponent(PlayerMovement).enabled = true;
    }
}

function NextTurn()
{
    for(var p : Player in players)
    {
        p.inTurn = !p.inTurn;
    }
}

function AddPoint(g:GameObject)
{
    var rb : Rigidbody = g.GetComponent(Rigidbody);
    rb.isKinematic = true;
    rb.useGravity = false;
    g.GetComponent(MeshRenderer).enabled = false;

    for(var p : Player in players)
    {
        if(p.inTurn)
    {
            g.transform.position = p.gameObject.transform.position;
            p.points++;
            return;
        }
    }
        
}


function CheckForWinner()
{
    for(var p : Player in players)
    {
        if(p.points >= 7)
    {
            FlashText("Winner == " + p.name + players.IndexOf(p));
            Time.timeScale =0;
    }
}
}