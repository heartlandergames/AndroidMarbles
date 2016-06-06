#pragma strict
import System.Collections.Generic;



var marbles : List.<GameObject> = new List.<GameObject>();

var shooter : GameObject;

var arena : Scene;

var arenaString : String;


function Start () {



}

function Update () {

}

function AddMarble(g : GameObject)
    {
        if(marbles.Count < 6)
        {
            marbles.Add(g);
        }
        else if (marbles.Count >= 6)
        {
            Debug.Log("Can't add another one, you must've fucked up");
        }
    }
