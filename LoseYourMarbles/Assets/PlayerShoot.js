#pragma strict

var manager : GameObject;

var shootLoc: Transform;


//shot power 
var power : float;

var maxPower : float;



//tracking for shooting Touch inputs
var startPos : Vector2;

var endPos : Vector2;

var start : boolean;

var end : boolean;


//the rate at which the shot charges.

var chargeRate : float;

var charging : boolean;

var chargeUp : boolean = true;

function Start () {
    manager = gameObject.FindWithTag("MANAGER");
}
/*
function Update () {
    if(!charging)
    {
        if(Input.GetTouch(0).phase == TouchPhase.Began)
        {   
            charging = true;
            
            
        }
    }


    if(charging)
    {
        ChargePower();
    }


    if(!charging && power > 0)
    {
        Shoot();
    }
   
}


function ChargePower()
{
    if(chargeUp)
    {
        power += Time.deltaTime * chargeRate;
    }
    if(!chargeUp)
    {
        power-= Time.deltaTime * chargeRate;
    }

    if(power >= maxPower)
    {
        power = maxPower;
        chargeUp = false;

    }
    if(power <= 0)
    {
        power = 0;
        chargeUp = true;
    }

    if(Input.GetTouch(0).phase == TouchPhase.Ended)
    {
        charging = false;
    }
    manager.GetComponent(Tester).Display("Power : "+ power);

}

function Shoot()
{
    if(Input.touchCount > 0)
    {
        if(Input.GetTouch(0).phase == TouchPhase.Began)
        {
            startPos = Input.GetTouch(0).position;
        }
        if(Input.GetTouch(0).phase == TouchPhase.Ended)
        {
            endPos = Input.GetTouch(0).position;
        }
    }

    if(startPos != Vector2.zero && endPos != Vector2.zero)
    {
        var distX = endPos.x - startPos.x;
        var distY = endPos.y - startPos.y;
        var shooter : GameObject = Instantiate(Resources.Load("Prefabs/ShooterPrefab"), transform.position, transform.rotation);

        shooter.GetComponent(Rigidbody).AddForce(Vector3(distY, 0, distX), ForceMode.Impulse);
        gameObject.GetComponent(Player).ShootSetup();
    }
}*/


function Update()
{
    if(Input.touchCount >0 )
    {
        var touch : Touch = Input.GetTouch(0);
        if(touch.phase == TouchPhase.Began)
        {
            startPos = touch.position;
            start = true;
        }
        if(touch.phase == TouchPhase.Ended)
        {
            endPos = touch.position;
            end = true;
        }
    }

    if(start && end)
    {
        if(startPos.y > endPos.y)
        {
            return;
        }

       

        var shooter : GameObject = Instantiate(Resources.Load("Prefabs/ShooterPrefab"),shootLoc.position, shootLoc.rotation);

        shooter.GetComponent(Rigidbody).AddForce(Vector3((endPos.x - startPos.x)/2, 0, (endPos.y - startPos.y)));
        
        startPos = Vector2.zero;
        endPos = Vector2.zero;
        start = false;
        end = false;
    }
}