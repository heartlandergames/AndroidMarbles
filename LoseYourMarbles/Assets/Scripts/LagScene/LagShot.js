#pragma strict

var shooter : GameObject;

var startPos : Vector2;

var startTime : float;

var start : boolean;

var endPos : Vector2;

var endTime : float;

var end : boolean;

var maxPower : float = 10;

var lag : boolean;

function Start () {

}

function Update () {
    if(!lag){
        WaitForShot();

        if(start && end)
        {
            var power : float = ((endPos.y - startPos.y) / Screen.height) * maxPower;
            Shoot(power);
        }
    }
}

function Shoot( power : float)
    {
        var lagShooter : GameObject = Instantiate(shooter, transform.position, transform.rotation);
        lagShooter.GetComponent(Rigidbody).velocity = transform.forward * power;
        lagShooter.name = this.name + " Shooter";
        lag = true;
        start = false;
        end = false;
    }

    function WaitForShot()
    {
        if(Input.touchCount > 0)
        {
            if(Input.GetTouch(0).phase == TouchPhase.Began)
            {
                startPos = Input.GetTouch(0).position;
                startTime = Time.time;
                start = true;
            }
            if(Input.GetTouch(0).phase == TouchPhase.Ended)
            {
                endPos = Input.GetTouch(0).position;
                endTime = Time.time;
                end = true;
            }
        }
    }