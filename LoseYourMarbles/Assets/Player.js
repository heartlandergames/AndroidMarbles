#pragma strict

var manager : GameObject;

var shooting : boolean;

var look : PlayerLook;

var move : PlayerMovement;


function Start () {
    manager = GameObject.FindWithTag("MANAGER");
    look = gameObject.GetComponent(PlayerLook);
    move = gameObject.GetComponent(PlayerMovement);
    manager.GetComponent(Tester).player = this;
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
            
            if(touch.phase == TouchPhase.Ended)
            {
                ShootSetup();
                manager.GetComponent(Tester).Display("SHOOTING ACTIVATED");
            }
        }   
    }

    if(Input.GetButtonDown("Fire1"))
    {
        var mouseHit : Collider2D = Physics2D.OverlapPoint(Input.mousePosition);
        if(mouseHit.gameObject.tag=="SHOOT")
        {
            ShootSetup();
            
        }
    }
}

function ShootSetup()
{
    //Deactivates/Reactivates the proper scripts
    if(!shooting)
    {
        
        move.enabled = false;
        look.enabled = false;
        shooting = true;
        yield WaitForSeconds(.3);
        gameObject.GetComponent(PlayerShoot).enabled = true;
        return;
    }
    if(shooting)
    {
        
        move.enabled = true;
        look.enabled = true;
        shooting = false;
        yield WaitForSeconds(.3);
        gameObject.GetComponent(PlayerShoot).enabled = false;
        return;
    }
}

