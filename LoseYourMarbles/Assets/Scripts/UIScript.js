#pragma strict
import UnityEngine.UI;

var shootUI : GameObject;

var moveUI : GameObject;

var backButton : GameObject;


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

function BackButtonCycle()
{
    backButton.SetActive(!backButton.active);
}