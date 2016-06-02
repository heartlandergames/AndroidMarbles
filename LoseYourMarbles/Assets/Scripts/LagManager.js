#pragma strict
var matchInfo : MatchInfo;

var spawn1 : Transform;

var spawn2 : Transform;

var timer : float = 30.0;

var lagLine : Transform;



function Start () {
    matchInfor = GameObject.FindWithTag("MATCHINFO");


}

function Update () {

}

function Timer ()
{
    if(timer <= 0)
    {
        ForcecEndLag();
    }
}

function ForceEndLag()
{
    for(var p : GameObject in matchInfo.players)
    {
        if(p.GetComponent(Player).lagged != true)
    {
           //Force them to shoot at a random strength
        }
    }
}

function CheckResults ()
{
    var shooterArray : GameObject[];
    shooterArray = GameObject.FindGameObjectsWithTag("SHOOTER");


}