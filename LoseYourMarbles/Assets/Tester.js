#pragma strict
import UnityEngine.UI;

var text : Text;

var textParent : GameObject;

var shootUI : GameObject;

var preShootUI : GameObject;
function Start () {

}

function Update () {

    if(Input.touchCount > 0)
    {
        
        var hit : Collider2D = Physics2D.OverlapPoint(Input.GetTouch(0).position);
        //create collider info for current screenTouch

        if(hit.gameObject.tag == "RIGHT")
        {
            //if the player presses the right rotate button then rotate counter clockwise
            text.text = "MOVE RIGHT";
            textParent.SetActive(true);
        }
        if(hit.gameObject.tag == "LEFT")
        {
            //if the player presses the left rotate button then rotate clockwise
            text.text = "MOVE LEFT";
            textParent.SetActive(true);
        }
        if(hit.gameObject.tag == "SHOOT")
        {
            //if the player presses the shoot button then 
            text.text = "SHOOT";
            textParent.SetActive(true);
            ShootMode();
        }
    }
    
    if(Input.touchCount <=0)
    {
        textParent.SetActive(false);
        text.text = "NO TOUCH";
    }
}


function ShootMode()
{
    preShootUI.SetActive(!preShootUI);
    shootUI.SetActive(!shootUI);
}

function Display(s:String)
{
    text.text = s;
    textParent.SetActive(true);
    return;
}