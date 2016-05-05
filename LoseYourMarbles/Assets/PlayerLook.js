#pragma strict

var cam : GameObject;

function Start () {

}

function Update () {
    Look();
}

function Look()
{
    if(Input.touchCount > 0)
    {
        var touch : Touch = Input.GetTouch(0);
        if(Input.GetTouch(0).phase == TouchPhase.Moved)
        {
            cam.transform.Rotate(Vector3(touch.deltaPosition.y,0, 0) *5* Time.deltaTime);
            transform.Rotate(Vector3(0,touch.deltaPosition.x,0) * 5 * Time.deltaTime);
        }
    }
}