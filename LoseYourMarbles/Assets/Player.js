#pragma strict

var manager : GameObject;

var shooting : boolean;

function Start () {
    manager = GameObject.FindWithTag("MANAGER");
}

function Update () {
    PreShoot();
}

function PreShoot()
{
    if(Input.touchCount > 0)
    {
        var touch : Touch = Input.GetTouch(0);
        
        var hit : Collider2D = Physics2D.OverlapPoint(touch.position);

        if(hit.gameObject.tag == "SHOOT")
        {
            Shooting();
        }   
    }
}

function Shooting()
{
    //Deactivates/Reactivates the proper scripts
    if(!shooting)
    {
        gameObject.GetComponent(PlayerMovement).enabled = false;
        gameObject.GetComponent(PlayerShoot).enabled = true;
        gameObject.GetComponent(PlayerLook).enabled = true;
        shooting = true;
        return;
    }
    if(shooting)
    {
        gameObject.GetComponent(PlayerShoot).enabled = false;
        gameObject.GetComponent(PlayerMovement).enabled = true;
        gameObject.GetComponent(PlayerLook).enabled = true;
        shooting = false;
        return;
    }
}