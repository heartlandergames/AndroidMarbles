#pragma strict

var manager : GameObject;

var shootLoc: Transform;





//tracking for shooting Touch inputs
var startPos : Vector2;

var endPos : Vector2;

var start : boolean;

var end : boolean;




function Start () {
    manager = gameObject.FindWithTag("MANAGER");
}



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

        shooter.GetComponent(Rigidbody).AddForce(transform.forward + Vector3((endPos.x - startPos.x)/2, -2, (endPos.y - startPos.y)/2));
        
        startPos = Vector2.zero;
        endPos = Vector2.zero;
        start = false;
        end = false;
        GetComponent(Player).ShootSetup();
        
    }
}