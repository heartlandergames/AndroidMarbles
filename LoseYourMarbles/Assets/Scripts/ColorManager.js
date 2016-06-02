#pragma strict
import System.Collections.Generic;
import UnityEngine.UI;

var colorList : List.<Color> = new List.<Color>();

var mainList : List.<Color> = new List.<Color>();

var accentList : List.<Color> = new List.<Color>();

var choice : int;
function Start () {

    Debug.Log(choice + "  1");
    choice = Random.Range(0, mainList.Count-1);
    Debug.Log(choice + "  2");
   

    Camera.main.backgroundColor = mainList[choice];

    SetButtonColor();

}

function Update () {
    if(GameObject.FindWithTag("BUTTON").GetComponent(Image).color != accentList[choice])
    {
        SetButtonColor();
    }
}

function SetButtonColor()
{
    var buttonObjectArray : GameObject[] = GameObject.FindGameObjectsWithTag("BUTTON");
    for(var b : GameObject in buttonObjectArray)
    {
        b.GetComponent(Image).color = accentList[choice];
        b.GetComponent(Image).color.a = 255;
    }
}