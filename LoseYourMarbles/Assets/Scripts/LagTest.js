#pragma strict
import UnityEngine.UI;

var lagManager : LagManager;

function Start () {
    lagManager = GameObject.FindWithTag("LAGMANAGER").GetComponent(LagManager);
}

function Update () {
    GetComponent(Text).text = lagManager.timer + "";
}