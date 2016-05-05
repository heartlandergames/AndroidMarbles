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
            shooting = true;
            manager.GetComponent(Tester).ShootMode();
        }
    }
}