#pragma strict
import UnityEngine.UI;

var matchInfo : MatchInfo;

var spawn1 : Transform;

var spawn2 : Transform;



var timer : float = 30.0;

var roundTime : int;

var timerText : Text;

var lagLine : Transform;

var checkStill : boolean;

function Start () {
   // matchInfo = GameObject.FindWithTag("MATCHINFO").GetComponent(MatchInfo);


}

function Update () {
    Timer();
    if(CheckStill())
    {
        //Debug.Log("CheckStill");
        CheckResults();
    }

}

function Timer ()
{
    if(timer <= 0)
    {
        ForceEndLag();
        return;
    }

    timer -= Time.deltaTime;
    
    roundTime = Mathf.RoundToInt(timer);
    timerText.text = roundTime + "";
}

function ForceEndLag()
{
    var players : GameObject[]= GameObject.FindGameObjectsWithTag("PLAYER");
    for (var p : GameObject in players)
    {
        var ls : LagShot = p.GetComponent(LagShot);
        if(ls.lag != true)
    {
            ls.Shoot(Random.Range(0, ls.maxPower));
            //ls.Shoot(ls.maxPower);
        }
    }
}



function CheckStill()
{
    
    var playerArray : GameObject[] = GameObject.FindGameObjectsWithTag("PLAYER");
    Debug.Log(playerArray.length);
    var x : int = 0;
    for(var p : GameObject in playerArray)
    {
        if(p.GetComponent(LagShot).lag)
        {
            x++;
        }
}

    if(x == playerArray.length){
        //Debug.Log("CheckStill part 2");
    var shooterArray : GameObject[] = GameObject.FindGameObjectsWithTag("SHOOTER");
    var y : int = 0;
    for(var s : GameObject in shooterArray)
    {
        var rb : Rigidbody = s.GetComponent(Rigidbody);
        if(rb.velocity.magnitude <= .1)
        {
           rb.velocity = Vector3.zero;
           rb.angularVelocity = Vector3.zero;
           y++;
        }
    }    
        if(y == shooterArray.length)
        {
            Debug.Log("still");
            return true;
        }
        else if(y < shooterArray.length)
        {
            return false;
        }
    
    }
}


function CheckResults ()
{
    //Debug.Log("CheckResults Called");
    var shooterArray : GameObject[] = GameObject.FindGameObjectsWithTag("SHOOTER");
    var closestPos : float =100;
    var closestShooter : GameObject;
    
    for (var s : GameObject in shooterArray)
    {
        var pos : float;
        var trans : Transform = s.transform;
        if(trans.position.z < lagLine.position.z)
        {
            pos = lagLine.position.z - trans.position.z;
        }
        else if (trans.position.z > lagLine.position.z)
        {
            pos = trans.position.z - lagLine.position.z;
        }
        if(pos < closestPos)
    {
            closestPos = pos;
            closestShooter = s;
        }
    }
        Debug.Log(closestPos);
        Debug.Log(closestShooter.name);
}