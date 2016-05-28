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
    shootUI.SetActive(!shootUI.active);

}

function MoveUICycle()
{
    moveUI.SetActive(!moveUI.active);
}
