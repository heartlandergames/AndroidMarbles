#pragma strict

var manager : GameObject;

var shootLoc: Transform;





//tracking for shooting Touch inputs
var startPos : Vector2;

var endPos : Vector2;

var start : boolean;

var end : boolean;


var maxPower : float = 100;

var maxCurve : float = 10;



function Start () {
    manager = gameObject.FindWithTag("MANAGER");
}



function Update()
{
    PreShot();  

    if(start && end)
    {
        Shoot();
    }
}

function PreShot()
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
    /*
    if(Input.GetButtonDown("Fire1"))
    {
        startPos = Vector2(Screen.width/2 ,0);
        endPos = Vector2(0,Screen.height);
        start = true;
        end = true;
        Debug.Log(startPos + " + " + endPos);
    }*/
}

function Shoot()
{
    if(startPos.y > endPos.y)
    {
        return;
    }

    Debug.Log(startPos + " + " + endPos);

    var shooter : GameObject = Instantiate(Resources.Load("Prefabs/ShooterPrefab"),shootLoc.position, shootLoc.rotation);
   
    var shotDirection : Vector3;
    
    if(endPos.x >= startPos.x )
    {
        shotDirection.x = ((endPos.x - startPos.x)/ Screen.width) * maxCurve;
    }
    else if(endPos.x < startPos.x)
    {
        shotDirection.x = ((startPos.x - endPos.x)/Screen.width) * -maxCurve;
    }

    shotDirection.z = ((endPos.y-startPos.y)/Screen.height)* maxPower;
       
    shooter.GetComponent(Rigidbody).AddForce(shotDirection, ForceMode.Impulse);
    startPos = Vector2.zero;
    endPos = Vector2.zero;
    start = false;
    end = false;
    GetComponent(Player).ShootSetup();
}

function GetPower(ey : float, sy : float) : float
{
    var sh : int = Screen.height;

    var power : float;
    power = ((ey - sy) / sh) * maxPower;


    Debug.Log("Power " + power);

    return power;
    
}

function GetCurve(ex : float, sx : float) : float
    {
        var sw : int = Screen.width;
        var curve : float;

        if( ex >= sx )
        {
            curve = ((ex-sx)/sw) * maxCurve;
            return curve;
        }
        else if (ex < sx)
        {
            curve = ((sx-ex)/sw) * -maxCurve;
            return curve;
        }
        Debug.Log(curve);
    }    

    