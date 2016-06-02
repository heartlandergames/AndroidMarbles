#pragma strict

var manager : Manager;

var shootLoc: Transform;





//tracking for shooting Touch inputs
var startPos : Vector2;

var endPos : Vector2;

var start : boolean;

var end : boolean;


var maxPower : float = 100;

var maxCurve : float = 10;



function Start () {
    manager = gameObject.FindWithTag("MANAGER").GetComponent(Manager);
}



function Update()
{
    if(manager.CheckForMovement())
    {
        PreShot();  
    }
    if(start && end)
    {
        Shoot();
    }
}

function PreShot()
{
    //waits for a touchInput to begin and end
    //when ended, records the positions at start/end and sets both variables to true
    //this results in Shoot() being called through an Update Check;
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
   
}

function Shoot()
{
    //creates a shooter clone and then applies the appropriate forces from the getcurve/power functions
    //if the touch ends below the starting point do nothing.
    if(startPos.y > endPos.y)
    {
             
        return;
    }

    Debug.Log(startPos + " + " + endPos);


    var shooter : GameObject = Instantiate(Resources.Load("Prefabs/ShooterPrefab"),shootLoc.position, shootLoc.rotation);
   
    //uses the custom GetCurve/Power functions to set the x and z variables of ShotDirection to apply to the shooter with AddForce();
    var shotDirection : Vector3 = Vector3(GetCurve(endPos.x, startPos.x), 0, GetPower(endPos.y, startPos.y));
    
    //Applies the AddForce function using the shotDirection variable to the Shooter gameObject;      
    shooter.GetComponent(Rigidbody).AddRelativeForce(shotDirection, ForceMode.Impulse);

    //Zeroes out the start and endPos variables and sets start/end to false to await a new shot.
    startPos = Vector2.zero;
    endPos = Vector2.zero;
    start = false;
    end = false;

    

    //Tells this player to cycle the Shooting Setup.
    GetComponent(Player).ShootSetup();

  
    //manager.WaitForTurn();


}


function GetPower(ey : float, sy : float) : float
{
    //gets the z-direction force for a shot from the starting and ending y-position of the GetTouch.
    //divides the difference of those two by the total screen height to get the ratio of maxPower this shot should have
    var sh : int = Screen.height;

    var power : float;
    power = ((ey - sy) / sh) * maxPower;
    
    return power;
    
}

function GetCurve(ex : float, sx : float) : float
{
        //Gets the x-direction to apply to the shooter from the start/endPos of the x-coordinate
        //checks to see if the finger ended left/right of the starting position and then multiplies by negative to get left movement if necessary
        //takes the difference in coordinate values and then divides by the total screen width to get a ratio to multiply by maxCurve

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

    