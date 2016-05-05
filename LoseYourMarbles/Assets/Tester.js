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

        if(hit.gameObject.tag == "RIGHT")
        {
            text.text = "MOVE RIGHT";
            textParent.SetActive(true);
        }
        if(hit.gameObject.tag == "LEFT")
        {
            text.text = "MOVE LEFT";
            textParent.SetActive(true);
        }
        if(hit.gameObject.tag == "SHOOT")
        {
            text.text = "SHOOT";
            textParent.SetActive(true);
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
    preShootUI.SetActive(false);
    shootUI.SetActive(true);
}