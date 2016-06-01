#pragma strict
import System.Collections.Generic;
import UnityEngine.UI;

var colorList : List.<Color> = new List.<Color>();

var mainList : List.<Color> = new List.<Color>();

var accentList : List.<Color> = new List.<Color>();


function Start () {
    var choice : int = Random.Range(0, mainList.Count-1);

   

    Camera.main.backgroundColor = mainList[choice];

    var buttonObjectArray : GameObject[] = GameObject.FindGameObjectsWithTag("BUTTON");
    for(var b : GameObject in buttonObjectArray)
    {
        b.GetComponent(Image).color = accentList[choice];
        b.GetComponent(Image).color.a = 255;
    }

}

function Update () {

}