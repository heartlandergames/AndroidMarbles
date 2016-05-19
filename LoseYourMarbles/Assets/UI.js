#pragma strict
import UnityEngine.UI;

var shootUI : GameObject;

var moveUI : GameObject;




function Start () {

}

function Update () {

}

function ShootUICycle()
{
    shootUI.SetActive(!shootUI);

}

function MoveUICycle()
{
    moveUI.SetActive(!moveUI);
}
