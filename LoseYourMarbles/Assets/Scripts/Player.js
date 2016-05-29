#pragma strict
import System.Collections.Generic;

var manager : Manager;

var shooting : boolean;

var look : PlayerLook;

var move : PlayerMovement;

var inTurn : boolean;

var points : int;

var collectedMarbles : List.<GameObject> = new List.<GameObject>();

function Start () {
    manager = GameObject.FindWithTag("MANAGER").GetComponent(Manager);
    look = gameObject.GetComponent(PlayerLook);
    move = gameObject.GetComponent(PlayerMovement);
}

function Update () {
    if(inTurn)
    {
        PreShoot();
    }
}

function PreShoot()
{
    //runs while player is in turn
    //waits for touchInput on the UI controls and calls appropriate scripts/functions
    if(Input.touchCount > 0)
    {
        var touch : Touch = Input.GetTouch(0);
        
        var hit : Collider2D = Physics2D.OverlapPoint(touch.position);

        if(hit.gameObject.tag == "SHOOT")
        {
            
            if(touch.phase == TouchPhase.Ended)
            {
                ShootSetup();
                manager.FlashText("SHOOTING ACTIVATED");
            }
        }   
    }

    if(Input.GetButtonDown("Fire1"))
    {
        var mouseHit : Collider2D = Physics2D.OverlapPoint(Input.mousePosition);
        if(mouseHit.gameObject.tag=="SHOOT")
        {
            ShootSetup();
            manager.FlashText("SHOOTING ACTIVATED");

        }
        
    }
}

function ShootSetup()
{
    //Deactivates/Reactivates the proper scripts
    if(!shooting)
    {
        manager.ShootMode(this);
        move.enabled = false;
        look.enabled = false;
        WaitForSeconds(.3);
        gameObject.GetComponent(PlayerShoot).enabled = true;
        shooting = true;
        return;
    }
    if(shooting)
    {
        manager.ShootMode(this);
        move.enabled = true;
        look.enabled = true;
        WaitForSeconds(.3);
        gameObject.GetComponent(PlayerShoot).enabled = false;
        shooting = false;
        return;
    }
}

