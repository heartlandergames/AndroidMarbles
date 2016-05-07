#pragma strict


var power : float;

var maxPower : float;

var startPos : Vector2;

var endPos : Vector2;


var chargeRate : float;

var charging : boolean;

var chargeUp : boolean = true;

function Start () {

}

function Update () {
    if(charging)
    {
        ChargePower();
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

    if(startPos != null && endPos != null)
    {
        var distX = endPos.x - startPos.x;
        var distY = endPos.y - startPos.y;
        var shooter : GameObject = Instantiate(Resources.Load("Prefabs/ShooterPrefab"), transform.position, transform.rotation);

        shooter.GetComponent(Rigidbody).AddForce(Vector3(distY, 0, distX), ForceMode.Impulse);
        gameObject.GetComponent(Player).Shooting();
    }
}